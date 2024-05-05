package server

import (
	"time"

	"github.com/goccy/go-json"
	"github.com/gofiber/contrib/fiberzap/v2"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/log"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/healthcheck"
	"github.com/gofiber/fiber/v2/middleware/idempotency"
	"github.com/gofiber/fiber/v2/middleware/monitor"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gofiber/fiber/v2/middleware/requestid"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	utils "github.com/chrismarsilva/cms.golang.tnb.cripo.utils"
)

type Server struct {
	cfg *utils.Config
	app *fiber.App
}

func NewServer() *Server {
	return &Server{
		cfg: utils.NewConfig(),
		app: fiber.New(fiber.Config{
			AppName:     "Tamo em Cripto - API Auth - v1.0.0",
			JSONEncoder: json.Marshal,
			JSONDecoder: json.Unmarshal,
		}),
	}
}

func (s *Server) Initialize() {
	s.app.Use(requestid.New())

	s.app.Use(compress.New(compress.Config{
		Level: compress.LevelBestSpeed,
	}))

	s.app.Use(cors.New(cors.Config{
		// 	AllowOrigins:     "http://localhost:3000",
		AllowHeaders:     "Origin, Content-Type, Accept",
		AllowMethods:     "GET, POST",
		AllowCredentials: true, //Very important while using a HTTPonly Cookie, frontend can easily get and return back the cookie.
	}))

	s.app.Use(healthcheck.New())

	s.app.Use(recover.New())

	s.app.Use(idempotency.New(idempotency.Config{
		Lifetime:  30 * time.Minute,
		KeyHeader: "X-Idempotency-Key",
		Storage:   storage,
	}))

	// r.Use(auth.IsAuthenticated())

	// logger := log.NewGraylogLogger(conn)
	// loggingMiddleware := middleware.NewLoggingMiddleware(logger)
	// s.app.Use(loggingMiddleware.Logging)

	// s.app.Use(logger.New(
	// 	logger.Config{
	// 		Format:     "${cyan}${time} ${red}[${status}] ${white}${pid} ${blue}${locals:requestid} ${white}${latency} ${blue}[${method}] ${white}${path} Error: ${red}${error}${white}\n",
	// 		TimeFormat: "2006-01-02T15:04:05.00000",
	// 		TimeZone:   "America/Sao_Paulo"},
	// ))
	// s.app.SetLevel(log.LevelWarn) // LevelTrace / LevelDebug / LevelInfo / LevelWarn / LevelError / LevelFatal / LevelPanic

	//logger, _ := zap.NewProduction()
	logger := zap.Must(zap.NewDevelopment()) // config.Build() / zap.NewProduction / zap.NewDevelopment
	// defer logger.Sync()

	s.app.Use(fiberzap.New(fiberzap.Config{
		Logger:   logger,
		Fields:   []string{"ip", "latency", "status", "method", "url"},
		Messages: []string{"Server error", "Client error", "Success"},
		Levels:   []zapcore.Level{zapcore.ErrorLevel, zapcore.WarnLevel, zapcore.InfoLevel},
	}))

	logger.Info("User logged in",
		zap.String("username", "johndoe"),
		zap.Int("userid", 123456),
		zap.String("provider", "google"),
	)

	s.app.Use(func(c *fiber.Ctx) error {
		logger.Info("Middleware: Requisição recebida", zap.String("método", c.Method()), zap.String("caminho", c.Path()))
		return c.Next()
	})

	s.app.Get("/metrics", monitor.New())

	s.app = ConfigRoutes(s.app)

	log.Printf("Server running at port: %v", s.cfg.UriPort)
	log.Fatal(s.app.Listen(s.cfg.UriPort))
}
