# -*- coding: utf-8 -*-
from flask_caching import Cache


cache = Cache(config={'CACHE_TYPE': 'SimpleCache', 'CACHE_DEFAULT_TIMEOUT': '60'})


CACHE_TIME = 3600  # 60 MINUTOS
CACHE_USER = "TNB-CACHE-USER-"
CACHE_POTF = "TNB-CACHE-POTF-"


def set_cache_user(id_usuario: int, data):
    cache.set(CACHE_USER + str(id_usuario), data, timeout=CACHE_TIME)


def set_cache_portf(id_usuario: int, data):
    cache.set(CACHE_POTF + str(id_usuario), data, timeout=CACHE_TIME)


def get_cache_user(id_usuario: int):
    return cache.get(CACHE_USER + str(id_usuario))


def get_cache_portf(id_usuario: int):
    return cache.get(CACHE_POTF + str(id_usuario) + '-PORTFOLIO')


def del_cache_all(id_usuario: int):
    del_cache_user(id_usuario=id_usuario)
    del_cache_portf(id_usuario=id_usuario)


def del_cache_user(id_usuario: int):
    cache.delete(CACHE_USER + str(id_usuario))


def del_cache_portf(id_usuario: int):
    cache.delete(CACHE_POTF + str(id_usuario) + '-PORTFOLIO')
