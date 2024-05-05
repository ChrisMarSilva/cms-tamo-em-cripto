package services

// import (
// 	"errors"
// 	"net/http"
// 	"strings"
// 	"time"

// 	"github.com/gin-gonic/gin"
// 	"github.com/gofiber/fiber/v2"
// 	"github.com/gofiber/fiber/v2/log"
// 	"github.com/golang-jwt/jwt/v5"
// 	"github.com/google/uuid"
// 	"golang.org/x/crypto/bcrypt"
// )

// type AuthController interface {
// 	SignUp(ctx *fiber.Ctx) error
// 	SignIn(ctx *fiber.Ctx) error
// 	GetUser(ctx *fiber.Ctx) error
// 	GetUsers(ctx *fiber.Ctx) error
// 	PutUser(ctx *fiber.Ctx) error
// 	DeleteUser(ctx *fiber.Ctx) error
// }

// type authController struct {
// 	usersRepo repository.UsersRepository
// }

// func NewAuthController(usersRepo repository.UsersRepository) AuthController {
// 	return &authController{usersRepo}
// }

// func (c *authController) SignUp(ctx *fiber.Ctx) error {

// type UserService struct {
// 	userRepo UserRepository
// }

// func NewUserService(userRepo UserRepository) *UserService {
// 	return &UserService{userRepo: userRepo}
// }

// /*

//   func Home(c *gin.Context) {

//    cookie, err := c.Cookie("token")
//       if err != nil {
//           c.JSON(401, gin.H{"error": "unauthorized"})
//           return
//       }

//       claims, err := utils.ParseToken(cookie)
//       if err != nil {
//           c.JSON(401, gin.H{"error": "unauthorized"})
//           return
//       }

//       if claims.Role != "user" && claims.Role != "admin" {
//           c.JSON(401, gin.H{"error": "unauthorized"})
//           return
//       }

//       c.JSON(200, gin.H{"success": "home page", "role": claims.Role})

//   }
// 	    func Premium(c *gin.Context) {
//       cookie, err := c.Cookie("token")
//       if err != nil {
//           c.JSON(401, gin.H{"error": "unauthorized"})
//           return
//       }

//       claims, err := utils.ParseToken(cookie)
//      if err != nil {
//           c.JSON(401, gin.H{"error": "unauthorized"})
//           return
//       }

//       if claims.Role != "admin" {
//           c.JSON(401, gin.H{"error": "unauthorized"})
//           return
//       }

//       c.JSON(200, gin.H{"success": "premium page", "role": claims.Role})
//   }

// */

// func (h UserService) Register(c *fiber.Ctx, payload UserRegisterRequest) (UserRegisterResponse, error) {
// 	// Validate user input (username, email, password)
// 	// Hash the password
// 	// Store user data in the database
// 	// Return a success message or error response

// 	// errors := ValidateStruct(payload)
// 	// if errors != nil {
// 	// 	return UserRegisterResponse{}, err // return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "fail", "errors": errors})
// 	// }

// 	// if payload.Password != payload.PasswordConfirm {
// 	// 	return UserRegisterResponse{}, err // return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "fail", "message": "Passwords do not match"})
// 	// }

// 	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(payload.Password), bcrypt.DefaultCost)
// 	if err != nil {
// 		return UserRegisterResponse{}, err // return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "fail", "message": err.Error()})
// 	}

// 	if err != nil {
// 		switch {
// 		case errors.Is(err, ErrUsernameNotFound):
// 			return c.String(http.StatusNotFound, WarnWhenUsernameNotFound)
// 		case errors.Is(err, ErrUsernameOrPasswordInvalid):
// 			return c.String(http.StatusUnauthorized, WarnNonValidCredentials)
// 		default:
// 			return c.String(http.StatusInternalServerError, WarnInternalServerError)
// 		}
// 	}

// 	user := UserModel{
// 		ID:        uuid.New(),
// 		Nome:      payload.Nome,
// 		Email:     strings.ToLower(payload.Email),
// 		Password:  string(hashedPassword),
// 		IsActive:  true,
// 		CreatedAt: time.Now(),
// 	}

// 	response := UserRegisterResponse{
// 		Nome:  user.Nome,
// 		Email: user.Email,
// 	}

// 	models.DB.Where("email = ?", user.Email).First(&existingUser)
// 	if existingUser.ID != 0 {
// 		c.JSON(400, gin.H{"error": "user already exists"})
// 		return
// 	}

// 	var errHash error
// 	user.Password, errHash = utils.GenerateHashPassword(user.Password)
// 	if errHash != nil {
// 		c.JSON(500, gin.H{"error": "could not generate password hash"})
// 		return
// 	}
// 	// result := initializers.DB.Create(&newUser)

// 	// if result.Error != nil && strings.Contains(result.Error.Error(), "duplicate key value violates unique") {
// 	// 	return err // return c.Status(fiber.StatusConflict).JSON(fiber.Map{"status": "fail", "message": "User with that email already exists"})
// 	// } else if result.Error != nil {
// 	// 	return err // return c.Status(fiber.StatusBadGateway).JSON(fiber.Map{"status": "error", "message": "Something bad happened"})
// 	// }

// 	return response, nil
// }

// func (h UserService) Login(c *fiber.Ctx, payload UserLoginRequest) (string, error) {
// 	// errors := ValidateStruct(payload)
// 	// if errors != nil {
// 	//  log.Error("Erro no repository:", err.Error())
// 	// 	return "", err
// 	// }

// 	user, err := h.userRepo.GetByEmail(c.Context(), strings.ToLower(payload.Email))
// 	if err != nil {
// 		log.Error("Erro no repository:", err.Error())
// 		return "", err
// 	}

// 	// if user.Password != payload.Password {
// 	// 	log.Error("Erro no Password: Senha inválida.")
// 	// 	return "", errors.New("Senha inválida.")
// 	// }

// 	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(payload.Password))
// 	if err != nil {
// 		log.Error("Erro no repository:", err.Error())
// 		return "", err // return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "fail", "message": "Invalid email or Password"})
// 	}

// 	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
// 		"sub":       user.ID,
// 		"nome":      user.Nome,
// 		"email":     user.Email,
// 		"is_active": user.IsActive,
// 		"exp":       time.Now().UTC().Add(time.Hour * 24 * 7).Unix(),
// 		"iat":       time.Now().UTC().Unix(),
// 		"nbf":       time.Now().UTC().Unix(),
// 	})

// 	// now := time.Now().UTC()
// 	// tokenByte := jwt.New(jwt.SigningMethodHS256)
// 	// claims := tokenByte.Claims.(jwt.MapClaims)
// 	// claims["sub"] = user.ID
// 	// claims["exp"] = now.Add(time.Hour * 24 * 7).Unix()
// 	// claims["iat"] = now.Unix()
// 	// claims["nbf"] = now.Unix()

// 	tokenStr, err := token.SignedString([]byte(SecretKey))
// 	if err != nil {
// 		log.Error("Erro no SignedString: ", err.Error())
// 		return "", err // c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"message": err.Error()})
// 	}

// 	sess, err := store.Get(c)
// 	if err != nil {
// 		log.Error("Erro no store: ", err.Error())
// 		return "", err // c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"message": err.Error()})
// 	}

// 	sess.Set("jwt", tokenStr)
// 	if err := sess.Save(); err != nil {
// 		log.Error("Erro no token: ", err.Error())
// 		return "", err // c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"message": err.Error()})
// 	}

// 	sess.SetExpiry(time.Hour * 24)

// 	c.Cookie(&fiber.Cookie{
// 		Name:     "token",
// 		Value:    tokenStr,
// 		Path:     "/",
// 		MaxAge:   60 * 60 * 24 * 7, // config.JwtMaxAge * 60,
// 		Secure:   false,
// 		HTTPOnly: true,
// 		Domain:   "localhost",
// 	})

// 	errHash := utils.CompareHashPassword(user.Password, existingUser.Password)
// 	if !errHash {
// 		c.JSON(400, gin.H{"error": "invalid password"})
// 		return
// 	}
// 	c.SetCookie("token", tokenString, int(expirationTime.Unix()), "/", "localhost", false, true)

// 	return tokenStr, err
// }

// func (h UserService) Logout(c *fiber.Ctx) error {
// 	sess, err := store.Get(c)
// 	if err != nil {
// 		return err // c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"message": err.Error()})
// 	}

// 	sess.Destroy()

// 	if err := sess.Save(); err != nil {
// 		return err // c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"message": err.Error()})
// 	}

// 	c.SetCookie("token", "", -1, "/", "localhost", false, true)

// 	c.Cookie(&fiber.Cookie{
// 		Name:    "token",
// 		Value:   "",
// 		Expires: time.Now().Add(-time.Hour * 24),
// 	})

// 	return nil // c.SendStatus(fiber.StatusOK)
// }

// func (h *handler) Logout(c echo.Context) error {
// 	cookie := new(http.Cookie)
// 	cookie.Name = "token"
// 	cookie.Value = ""
// 	cookie.MaxAge = 0
// 	c.SetCookie(cookie)
// 	return c.String(http.StatusOK, "You have successfully logout")
// }

// /*
// if err != nil {
// 			if errors.Is(err, trip.ErrTripNotFound) {
// 				return ErrTripNotFound
// 			}
// 			return err
// 		}

// */

// func (h UserService) Refresh(c *fiber.Ctx) (jwt.MapClaims, error) {
// 	sess, err := store.Get(c)
// 	if err != nil {
// 		return nil, err // c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"message": err.Error()})
// 	}

// 	tokenStr := sess.Get("jwt")
// 	if tokenStr == nil {
// 		return nil, err // c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"message": "No token found"})
// 	}

// 	token, err := jwt.Parse(tokenStr.(string), func(token *jwt.Token) (interface{}, error) {
// 		return []byte(SecretKey), nil
// 	})

// 	if err != nil {
// 		return nil, err // c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"message": "Invalid token"})
// 	}

// 	claims, ok := token.Claims.(jwt.MapClaims)
// 	if !ok || !token.Valid {
// 		return nil, errors.New("Invalid token.") // c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"message": "Invalid token"})
// 	}

// 	//sess.SetExpiry(time.Second * 2)
// 	// if err := sess.Save(); err != nil {
// 	//     return nil, err // c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"message": err.Error()})
// 	// }

// 	return claims, nil
// }

// func (h UserService) Verify(c *fiber.Ctx) error {
// 	sess, err := store.Get(c)
// 	if err != nil {
// 		return err // c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"message": err.Error()})
// 	}

// 	tokenStr := sess.Get("jwt")
// 	if tokenStr == nil {
// 		return err // c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"message": "No token found"})
// 	}

// 	token, err := jwt.Parse(tokenStr.(string), func(token *jwt.Token) (interface{}, error) {
// 		return []byte(SecretKey), nil
// 	})

// 	if err != nil || !token.Valid {
// 		return err // c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"message": "Invalid token"})
// 	}

// 	return nil
// }

// type AuthService struct {
// 	repo   auth.AuthRepository
// 	config *config.Config
// }

// func NewAuthService(repo auth.AuthRepository, config *config.Config) *AuthService {
// 	return &AuthService{repo, config}
// }

// func (s *AuthService) Authenticate(username, password string) (string, error) {
// 	user, err := s.repo.GetUserByUsername(username)
// 	if err != nil {
// 		return "", err
// 	}

// 	if user == nil || user.Password != password {
// 		return "", errors.New("invalid username or password")
// 	}

// 	claims := JWTClaims{
// 		jwt.StandardClaims{},
// 		user.Username,
// 	}
// 	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
// 	tokenString, err := token.SignedString([]byte(s.config.JWTSecret))
// 	if err != nil {
// 		return "", err
// 	}
// 	return tokenString, nil
// }

// func (s *AuthService) Register(username, password string) error {
// 	user, err := s.repo.GetUserByUsername(username)
// 	if err != nil {
// 		return err
// 	}

// 	if user != nil {
// 		return errors.New("username already taken")
// 	}

// 	user = &auth.User{
// 		Username: username,
// 		Password: password,
// 	}

// 	err = s.repo.SaveUser(user)
// 	if err != nil {
// 		return err
// 	}

// 	return nil
// }

// func Login(c *fiber.Ctx) error {
//     var data map[string]string

//     if err := c.BodyParser(&data); err != nil {
//         return err
//     }

//     var user models.User

//     database.DB.Where("email = ?", data["email"]).First(&user) //Check the email is present in the DB

//     if user.ID == 0 { //If the ID return is '0' then there is no such email present in the DB
//         c.Status(fiber.StatusNotFound)
//         return c.JSON(fiber.Map{
//             "message": "user not found",
//         })
//     }

//     if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err != nil {
//         c.Status(fiber.StatusBadRequest)
//         return c.JSON(fiber.Map{
//             "message": "incorrect password",
//         })
//     } // If the email is present in the DB then compare the Passwords and if incorrect password then return error.

//     claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
//         Issuer:    strconv.Itoa(int(user.ID)), //issuer contains the ID of the user.
//         ExpiresAt: time.Now().Add(time.Hour * 24).Unix(), //Adds time to the token i.e. 24 hours.
//     })

//     token, err := claims.SignedString([]byte(SecretKey))

//     if err != nil {
//         c.Status(fiber.StatusInternalServerError)
//         return c.JSON(fiber.Map{
//             "message": "could not login",
//         })
//     }

//     cookie := fiber.Cookie{
//         Name:     "jwt",
//         Value:    token,
//         Expires:  time.Now().Add(time.Hour * 24),
//         HTTPOnly: true,
//     } //Creates the cookie to be passed.

//     c.Cookie(&cookie)

//     return c.JSON(fiber.Map{
//         "message": "success",
//     })
// }

// func User(c *fiber.Ctx) error {
//     cookie := c.Cookies("jwt")

//     token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
//         return []byte(SecretKey), nil //using the SecretKey which was generated in th Login function
//     })

//     if err != nil {
//         c.Status(fiber.StatusUnauthorized)
//         return c.JSON(fiber.Map{
//             "message": "unauthenticated",
//         })
//     }

//     claims := token.Claims.(*jwt.StandardClaims)

//     var user models.User

//     database.DB.Where("id = ?", claims.Issuer).First(&user)

//     return c.JSON(user)

// }

// func Logout(c *fiber.Ctx) error {
//     cookie := fiber.Cookie{
//         Name:     "jwt",
//         Value:    "",
//         Expires:  time.Now().Add(-time.Hour), //Sets the expiry time an hour ago in the past.
//         HTTPOnly: true,
//     }

//     c.Cookie(&cookie)

//     return c.JSON(fiber.Map{
//         "message": "success",
//     })

// }

// err = dbRepo.Transaction(ctx, func(ctx context.Context, tx *sql.Tx) error {
// 	id, err = userRepo.CreateAUser(ctx, tx, user)
// 	if err != nil {
// 		return err
// 	}

// 	userRepo.UpdateAUsersName(ctx, tx, id, body.FirstName, "test")
// 	if err != nil {
// 		return err
// 	}

// 	return nil
// })

// var id int

// err = dbRepo.Transaction(ctx, func(ctx context.Context, tx *sql.Tx) error {
// 	id, err = userRepo.CreateAUser(ctx, tx, user)
// 	if err != nil {
// 		return err
// 	}

// 	userRepo.UpdateAUsersName(ctx, tx, id, body.FirstName, "test")
// 	if err != nil {
// 		return err
// 	}

// 	return nil
// })

// if err != nil {
// 	w.Header().Set("Content-Type", "application/json")
// 	w.WriteHeader(http.StatusInternalServerError)
// 	return
// }

// transacaoResponse, err := services.CreateTransacao(clienteId, &transacao)
// if err != nil {
// 	if errors.Is(err, services.ErroClienteNaoExiste) {
// 		return c.Status(http.StatusNotFound).JSON(&fiber.Map{"erro": "Cliente não existe."})
// 	}
// 	if errors.Is(err, services.ErroValorDaTransacao) {
// 		return c.Status(http.StatusBadRequest).JSON(&fiber.Map{"erro": "O valor da transação deve ser maior que zero."})
// 	}
// 	if errors.Is(err, services.ErroTipoDaTransacao) {
// 		return c.Status(http.StatusBadRequest).JSON(&fiber.Map{"erro": "A transação deve ser do tipo 'c' (crédito) ou 'd' (débito)."})
// 	}
// 	if errors.Is(err, services.ErroDescricao) {
// 		return c.Status(http.StatusBadRequest).JSON(&fiber.Map{"erro": "A descrição deve ter de 1 a 10 caractéres."})
// 	}
// 	if errors.Is(err, services.ErroTransacaoDebito) {
// 		return c.Status(http.StatusUnprocessableEntity).JSON(&fiber.Map{"erro":       "A transação do tipo 'd' (débito) nunca pode deixar o saldo do cliente menor que seu limite disponível.", "observacao": "Transações do tipo 'c' (crédito) ainda serão processadas."})
// 	}
// 	return c.Status(http.StatusBadRequest).JSON(&fiber.Map{"erro": err.Error()})
// }

// TransactionQuery(db *sql.DB, baseQuery string) (rows *sql.Rows, code int, err error) {
// 	tx, txErr := db.Begin()
// 	if txErr != nil {
// 		return nil, -1, txErr
// 	}

// 	selectStmt, prepErr := tx.Prepare(baseQuery)
// 	if prepErr != nil {
// 		return nil, -1, fmt.Errorf("Failed to prepare statment: %s Error: %v", baseQuery, prepErr)
// 	}

// 	defer func() {
// 		if stmtErr := selectStmt.Close(); stmtErr != nil {
// 			rows = nil
// 			code = -2
// 			err = fmt.Errorf("Failed to close statement: %v.", stmtErr)
// 		}
// 	}()

// 	rows, err = selectStmt.Query()
// 	if err != nil {
// 		fmt.Errorf("Failed to retrieve data: %v", err)
// 		return nil, -1, err
// 	}
// 	if txCloseErr := tx.Commit(); txErr != nil {
// 		rows = rows
// 		code = -3
// 		err = txCloseErr
// 	}
// 	return rows, 0, nil
// }

// type Service struct {
// 	db   *sqlx.DB
// 	repo *srepo
//   }

//   func NewService(db *sqlx.DB, repo *srepo) *Service {
// 	return &Service{repo: repo, db: db}
//   }

//   func (s *Service) CancelSubscription(ctx context.Context, id int64) (*Subscription, error) {
// 	tx, err := s.db.BeginTxx(ctx, nil)
// 	if err != nil {
// 	  return nil, err
// 	}

// 	defer func() {
// 	  // !!! This would not work if the subscriptions is already canceled
// 	  // and the error is not returned
// 	  if err != nil {
// 		_ = tx.Rollback()
// 		return
// 	  }
// 	}()

// 	sub, err := s.repo.GetSubscription(tx, id)
// 	if err != nil {
// 	  return nil, err
// 	}

// 	if sub.Status != "active" {
// 	  return &sub, nil
// 	}

// 	if sub.CanceledAt.Valid {
// 	  return &sub, nil
// 	}

// 	sub, err = s.repo.CancelSubscription(tx, id)
// 	if err != nil {
// 	  return nil, err
// 	}

// 	err = tx.Commit()

// 	return &sub, err
//   }

//   user, err := h.iDao.GetByCondition(ctx, condition)
//     if err != nil {
//         if errors.Is(err, model.ErrRecordNotFound) {
//             logger.Warn("Login not found", logger.Err(err), logger.Any("form", req), middleware.GCtxRequestIDField(c))
//             response.Error(c, ecode.ErrLoginUsers)
//         } else {
//             logger.Error("Login error", logger.Err(err), logger.Any("form", req), middleware.GCtxRequestIDField(c))
//             response.Output(c, ecode.InternalServerError.ToHTTPCode())
//         }
//         return
//     }

//     if !gocrypto.VerifyPassword(req.Password, user.Password) {
//         logger.Warn("password error", middleware.CtxRequestIDField(ctx))
//         response.Error(c, ecode.ErrLoginUsers)
//     }

//     token, err := jwt.GenerateToken(utils.Uint64ToStr(user.ID), user.Username)
//     if err != nil {
//         logger.Error("jwt.GenerateToken error", logger.Err(err), middleware.CtxRequestIDField(ctx))
//         response.Output(c, ecode.InternalServerError.ToHTTPCode())
//     }

//     // TODO: save token to cache

//     response.Success(c, gin.H{
//         "id":    user.ID,
//         "token": token,
//     })


//given
//when
//them


prometheus.yml

# my global config to replace job without these values
global:
  scrape_interval:     15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.

# Alertmanager configuration
# alerting:
#   alertmanagers:
#     - static_configs:
#         - targets:
#           # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself. Where we define our jobs
scrape_configs:
  # prometheus monitoring itself;
  - job_name: 'prometheus'
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:9090']
  
  - job_name: cadvisor
    scrape_interval: 5s
    static_configs:
    - targets:
      - cadvisor:8080

  - job_name: goapp
    scrape_interval: 5s
    static_configs:
    - targets:
      - app:8181


docker-compose.yaml


version: '3'

services:
  prometheus:
    image: prom/prometheus
    container_name: prometheus
    depends_on: 
      - cadvisor
    ports:
      - 9090:9090
    command:
      - --config.file=/etc/prometheus/prometheus.yml
    volumes:
    # overwrite the prometheus.yml file with our root file
      - ./prometheus.yml:/etc/prometheus/prometheus.yml:ro

  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
    container_name: grafana
    depends_on:
      - prometheus


  cadvisor:
    image: gcr.io/cadvisor/cadvisor:latest
    container_name: cadvisor
    user: root
    ports:
    - 8080:8080
    volumes:
    - /:/rootfs:ro
    - /var/run:/var/run:rw
    - /sys:/sys:ro
    - /var/run/docker.sock:/var/run/docker.sock
    depends_on:
    - redis
    
  redis:
    image: redis:latest
    container_name: redis
    ports:
    - 6379:6379

  app:
    build: .
    container_name: app
    volumes:
    - .:/go/src
    ports:
    - 8181:8181



main.go



package main

import (
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"log"
	"math/rand"
	"net/http"
	"time"
)

/*
	Gauge Metric => variable values 1, 100, 4, 23, 17,...
	This metric will be responsible for check the online users
*/
var onlineUsers = prometheus.NewGauge(prometheus.GaugeOpts{
	Name: "goapp_online_users", // identifier
	Help: "Online users", // description
	ConstLabels: map[string]string{
		"course": "fullcycle", // tags
	},
})

/*
	total of http request that was made, incremental value
	1 - 10
	2 - 15 
	3 - 16
	from value 1 to 2 was executed 5 requests, from 2 - 3 just one request
*/
var httpRequestsTotal = prometheus.NewCounterVec(prometheus.CounterOpts{
	Name: "goapp_http_requests_total", // identifier 
	Help: "Count of all HTTP requests for goapp", // description
}, []string{})

/*

*/
var httpDuration = prometheus.NewHistogramVec(prometheus.HistogramOpts{
	Name: "goapp_http_request_duration",
	Help: "Duration in seconds of all HTTP requests",
	// handler is the tag we will use on the MustCurryWith function
}, []string{"handler"})

func main() {
	r := prometheus.NewRegistry()
	r.MustRegister(onlineUsers) // registry our metric
	r.MustRegister(httpRequestsTotal) // registry metric
	r.MustRegister(httpDuration)

	// this function will be executed in another thread
	go func() {
		for {
			// infinity loop to change the online users all the time from 1 - 2000
			onlineUsers.Set(float64(rand.Intn(2000)))
		}
	}()

	// function to handle the root function
	home_response := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		time.Sleep(time.Duration(rand.Intn(8))*time.Second) // mock to the page take longer to execute
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Hello Full Cycle"))
	})

	contact_response := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		time.Sleep(time.Duration(rand.Intn(5))*time.Second)
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Contact"))
	})


	// InstrumentHandlerDuration => how long it's taking to execute this function
	home_with_duration := promhttp.InstrumentHandlerDuration(
		httpDuration.MustCurryWith(prometheus.Labels{"handler": "home"}),
		// function to increase the counter on the / page
		promhttp.InstrumentHandlerCounter(httpRequestsTotal, home_response),
	)

	contact_with_duration := promhttp.InstrumentHandlerDuration(
		httpDuration.MustCurryWith(prometheus.Labels{"handler": "contact"}),
		// function to increase the counter on the /contact page
		promhttp.InstrumentHandlerCounter(httpRequestsTotal, contact_response),
	)


	http.Handle("/", home_with_duration)
	http.Handle("/contact", contact_with_duration)
	http.Handle("/metrics", promhttp.HandlerFor(r, promhttp.HandlerOpts{})) // route where the metrics will be available for prometheus
	log.Fatal(http.ListenAndServe(":8181", nil)) // initializate app
}





// exeutada por padrao primeiro
func init() {
	govalidator.SetFieldsRequiredByDefault(true)
}

type IProduct interface {
	IsValid() (bool, error)
	Enable() error
	Disable() error
	GetID() string
	GetName() string
	GetStatus() string
	GetPrice() float64
}

type IProductService interface {
	GetById(id string) (IProduct, error)
	Create(name string, price float64) (IProduct, error)
	Enable(product IProduct) (IProduct, error)
	Disable(product IProduct) (IProduct, error) 
}

type IProductReader interface {
	GetById(id string) (IProduct, error)
}

type IProductWriter interface {
	Save(product IProduct) (IProduct, error)
}

// composição de interface
type IProductPersistance interface {
	IProductReader
	IProductWriter
}


version: '3'

services:
  api:
    build:
      context: .
      dockerfile: Dockerfile.dev
    container_name: categories-api
    volumes:
      - ./:/app
    ports:
      - 8080:8080

  categories-db:
    image: postgres:13.1-alpine
    container_name: categories-db
    restart: always
    tty: true
    ports:
      - '5432:5432'
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password123
      - POSTGRES_DB=meetup
    volumes:
      - .docker/db:/var/lib/postgresql/data
      
	  
	  
	  
package utils

import (
	"strconv"
)

func StringToUint(str string) (i uint, err error) {
	u64, err := strconv.ParseUint(str, 10, 64)

	if err != nil {
		return 0, err
	}

	return uint(u64), nil
}


package database

import (
	c_models "github.com/GabrielBrotas/go-categories-msvc/internal/categories/models"
	"gorm.io/gorm"
)

func MigrateModels(db *gorm.DB) {
	db.AutoMigrate(&c_models.Category{})
}



package database

import (
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DBConfig struct {
	Host     string
	Port     int
	User     string
	DBName   string
	Password string
}

func InitDb() (*gorm.DB, error) {
	config := &DBConfig{
		Host:     "categories-db",
		Port:     5432,
		User:     "postgres",
		Password: "password123",
		DBName:   "meetup",
	}

	connectionString := fmt.Sprintf("host=%s port=%d user=%s dbname=%s password=%s",
		config.Host, config.Port, config.User, config.DBName, config.Password)

	db, err := gorm.Open(postgres.Open(connectionString), &gorm.Config{})

	if err != nil {
		log.Println(err)
		panic("failed to connect database")
	}

	return db, nil
}


func NewCategory(name string) (*Category, error) {
	category := &Category{
		Name:      name,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	err := category.IsValid()

	if err != nil {
		return nil, err
	}

	return category, nil
}

func (c *Category) IsValid() error {
	ec := error_pkg.NewErrorCollection()

	if len(c.Name) < 5 {
		ec.Add(fmt.Errorf("name must be greater than 5. Got %d", len(c.Name)))
	}

	if ec.HasErrors() {
		return ec.Throw()
	}

	return nil
}



package repository

import (
	"errors"

	c_models "github.com/GabrielBrotas/go-categories-msvc/internal/categories/models"
	"gorm.io/gorm"
)

type CategoryRepository struct {
	db *gorm.DB
}

func NewCategoryRepository(db *gorm.DB) *CategoryRepository {
	return &CategoryRepository{db}
}

func (r *CategoryRepository) FindById(id uint) (*c_models.Category, error) {
	var category c_models.Category
	result := r.db.First(&category, id)

	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, nil
		}

		return nil, result.Error
	}

	return &category, nil
}

func (r *CategoryRepository) FindByName(name string) (*c_models.Category, error) {
	var category c_models.Category

	result := r.db.Where("name = ?", name).First(&category)

	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, nil
		}

		return nil, result.Error
	}

	return &category, nil
}

// TODO: Pagination
func (r *CategoryRepository) FindAll() ([]*c_models.Category, error) {
	var categories []*c_models.Category
	result := r.db.Find(&categories)
	if result.Error != nil {
		return nil, result.Error
	}
	return categories, nil
}

func (r *CategoryRepository) Create(category *c_models.Category) error {
	result := r.db.Create(category)

	if result.Error != nil {
		return result.Error
	}

	return nil
}

func (r *CategoryRepository) Update(category *c_models.Category) error {
	result := r.db.Save(category)

	if result.Error != nil {
		return result.Error
	}

	return nil
}

func (r *CategoryRepository) Delete(id uint) error {
	var category c_models.Category
	result := r.db.First(&category, id)
	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil
		}
		return result.Error
	}
	result = r.db.Delete(&category)
	if result.Error != nil {
		return result.Error
	}
	return nil
}


package config

import (
	"fmt"
	"os"
	"strconv"
)

type Config struct {
	PublicHost              string
	Port                    string
	DBUser                  string
	DBPassword              string
	DBAddress               string
	DBName                  string
	CookiesAuthSecret       string
	CookiesAuthAgeInSeconds int
	CookiesAuthIsSecure     bool
	CookiesAuthIsHttpOnly   bool
	DiscordClientID         string
	DiscordClientSecret     string
	GithubClientID          string
	GithubClientSecret      string
}

const (
	twoDaysInSeconds = 60 * 60 * 24 * 2
)

var Envs = initConfig()

func initConfig() Config {
	return Config{
		PublicHost:              getEnv("PUBLIC_HOST", "http://localhost"),
		Port:                    getEnv("PORT", "8080"),
		DBUser:                  getEnv("DB_USER", "root"),
		DBPassword:              getEnv("DB_PASSWORD", "mypassword"),
		DBAddress:               fmt.Sprintf("%s:%s", getEnv("DB_HOST", "127.0.0.1"), getEnv("DB_PORT", "3306")),
		DBName:                  getEnv("DB_NAME", "cars"),
		CookiesAuthSecret:       getEnv("COOKIES_AUTH_SECRET", "some-very-secret-key"),
		CookiesAuthAgeInSeconds: getEnvAsInt("COOKIES_AUTH_AGE_IN_SECONDS", twoDaysInSeconds),
		CookiesAuthIsSecure:     getEnvAsBool("COOKIES_AUTH_IS_SECURE", false),
		CookiesAuthIsHttpOnly:   getEnvAsBool("COOKIES_AUTH_IS_HTTP_ONLY", false),
		DiscordClientID:         getEnvOrError("DISCORD_CLIENT_ID"),
		DiscordClientSecret:     getEnvOrError("DISCORD_CLIENT_SECRET"),
		GithubClientID:          getEnvOrError("GITHUB_CLIENT_ID"),
		GithubClientSecret:      getEnvOrError("GITHUB_CLIENT_SECRET"),
	}
}

func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}

	return fallback
}

func getEnvOrError(key string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}

	panic(fmt.Sprintf("Environment variable %s is not set", key))

}

func getEnvAsInt(key string, fallback int) int {
	if value, ok := os.LookupEnv(key); ok {
		i, err := strconv.Atoi(value)
		if err != nil {
			return fallback
		}

		return i
	}

	return fallback
}

func getEnvAsBool(key string, fallback bool) bool {
	if value, ok := os.LookupEnv(key); ok {
		b, err := strconv.ParseBool(value)
		if err != nil {
			return fallback
		}

		return b
	}

	return fallback
}



package auth

import "github.com/gorilla/sessions"

const (
	SessionName = "session"
)

type SessionOptions struct {
	CookiesKey string
	MaxAge     int
	HttpOnly   bool // Should be true if the site is served over HTTP (development environment)
	Secure     bool // Should be true if the site is served over HTTPS (production environment)
}

func NewCookieStore(opts SessionOptions) *sessions.CookieStore {
	store := sessions.NewCookieStore([]byte(opts.CookiesKey))

	store.MaxAge(opts.MaxAge)
	store.Options.Path = "/"
	store.Options.HttpOnly = opts.HttpOnly
	store.Options.Secure = opts.Secure

	return store
}



package auth

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/sessions"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/discord"
	"github.com/markbates/goth/providers/github"
	"github.com/sikozonpc/fullstackgo/config"
)

type AuthService struct{}

func NewAuthService(store sessions.Store) *AuthService {
	gothic.Store = store

	goth.UseProviders(
		github.New(
			config.Envs.GithubClientID,
			config.Envs.GithubClientID,
			buildCallbackURL("github"),
		),
		discord.New(
			config.Envs.DiscordClientID,
			config.Envs.DiscordClientSecret,
			buildCallbackURL("discord"),
		),
	)

	return &AuthService{}
}

func (s *AuthService) GetSessionUser(r *http.Request) (goth.User, error) {
	session, err := gothic.Store.Get(r, SessionName)
	if err != nil {
		return goth.User{}, err
	}

	u := session.Values["user"]
	if u == nil {
		return goth.User{}, fmt.Errorf("user is not authenticated! %v", u)
	}

	return u.(goth.User), nil
}

func (s *AuthService) StoreUserSession(w http.ResponseWriter, r *http.Request, user goth.User) error {
	// Get a session. We're ignoring the error resulted from decoding an
	// existing session: Get() always returns a session, even if empty.
	session, _ := gothic.Store.Get(r, SessionName)

	session.Values["user"] = user

	err := session.Save(r, w)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return err
	}

	return nil
}

func (s *AuthService) RemoveUserSession(w http.ResponseWriter, r *http.Request) {
	session, err := gothic.Store.Get(r, SessionName)
	if err != nil {
		log.Println(err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	session.Values["user"] = goth.User{}
	// delete the cookie immediately
	session.Options.MaxAge = -1

	session.Save(r, w)
}

func RequireAuth(handlerFunc http.HandlerFunc, auth *AuthService) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		session, err := auth.GetSessionUser(r)
		if err != nil {
			log.Println("User is not authenticated!")
			http.Redirect(w, r, "/login", http.StatusTemporaryRedirect)
			return
		}

		log.Printf("user is authenticated! user: %v!", session.FirstName)

		handlerFunc(w, r)
	}
}

func buildCallbackURL(provider string) string {
	return fmt.Sprintf("%s:%s/auth/%s/callback", config.Envs.PublicHost, config.Envs.Port, provider)
}