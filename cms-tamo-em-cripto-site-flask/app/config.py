# -*- coding: utf-8 -*-

class Config(object):
    DEBUG = False
    TESTING = False
    SECRET_KEY = 'aa990d82-f4bf-4826-888e-3e2729831cb5'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///banco.sqlite3'  # db # sqlite # sqlite3 # "sqlite:///:memory:"
    SQLALCHEMY_ECHO = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_COMMIT_ON_TEARDOWN = True
    SQLALCHEMY_RECORD_QUERIES = False
    SQLALCHEMY_MAX_OVERFLOW = 100
    SQLALCHEMY_POOL_SIZE = 150
    SQLALCHEMY_POOL_RECYCLE = 120
    SQLALCHEMY_POOL_TIMEOUT = 120
    SQLALCHEMY_POOL_PRE_PING = True
    DATABASE_QUERY_TIMEOUT = 0.0001
    SESSION_PERMANENT = False
    PERMANENT_SESSION_LIFETIME = 86400  # 86.400Seg # 1440Min # 24Hrs # 1D
    TEMPLATES_AUTO_RELOAD = True
    JSONIFY_MIMETYPE = 'application/json'
    JSONIFY_PRETTYPRINT_REGULAR = False
    JSON_AS_ASCII = True
    JSON_SORT_KEYS = False
    CACHE_TYPE = 'SimpleCache'  # simple # SimpleCache  # RedisCache
    CACHE_DEFAULT_TIMEOUT = 60  # 1 minuto
    COMPRESS_MIMETYPES = ['text/html', 'text/css', 'text/xml', 'application/json', 'application/javascript']
    COMPRESS_LEVEL = 6
    COMPRESS_MIN_SIZE = 500
    WERKZEUG_RUN_MAIN = True
    SESSION_COOKIE_SECURE = True
    REMEMBER_COOKIE_SECURE = True



class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = ''


class DevelopmentConfig(Config):
    DEBUG = True
    SESSION_COOKIE_SECURE = False


class TestingConfig(Config):
    TESTING = True
    SESSION_COOKIE_SECURE = False


app_config = {
    'production': ProductionConfig,
    'development': DevelopmentConfig,
    'testing': TestingConfig
}
