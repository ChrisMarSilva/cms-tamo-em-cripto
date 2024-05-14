# -*- coding: utf-8 -*-
from flask_migrate import Migrate

migrate = Migrate()


def configure(app):
    migrate.init_app(app, app.db)
