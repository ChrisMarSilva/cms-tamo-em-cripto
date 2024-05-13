
def init_app(app):
    from . import home
    app.register_blueprint(home.main)

