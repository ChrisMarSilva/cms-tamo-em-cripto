from . import home
from . import carteira

def init_app(app):
    app.register_blueprint(home.main)
    app.register_blueprint(carteira.main)
