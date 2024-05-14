
def create_app(config_name: str = 'development'):
    from flask import Flask
    app = Flask(import_name=__name__, template_folder='templates', static_folder="static")

    from flask_cors import CORS
    CORS(app=app, resources={r'/*': {'origins': '*'}})

    with app.app_context():
        from app import config
        app.config.from_object(obj=config.app_config[config_name])  # app.app_context().push()

        from app import banco  # from app.banco import db
        banco.configure(app=app)

        from app import migrate
        migrate.configure(app=app)

        from flaskext.autoversion import Autoversion
        app.autoversion = True
        Autoversion(app)

        from app import routes
        routes.init_app(app=app)

        app.jinja_env.cache = {}
        app.jinja_env.auto_reload = True

    return app
