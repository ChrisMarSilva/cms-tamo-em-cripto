# -*- coding: utf-8 -*-
from flask import session, current_app
from datetime import timedelta


SESSION_USER = "TAMO-EM-CRIPTO-"


def set_sessao_user_portfolio(id_usuario: int, data):
    try:
        session.permanent = True
        current_app.permanent_session_lifetime = timedelta(minutes=60)
        session.modified = True
        session[SESSION_USER + str(id_usuario) + '-PORTFOLIO'] = data
    except:
        pass

def get_sessao_user_portfolio(id_usuario: int):
    try:
        return session.get(SESSION_USER + str(id_usuario) + '-PORTFOLIO')
    except:
        return None

def del_sessao_user_portfolio(id_usuario: int):
    try:
        session.pop(SESSION_USER + str(id_usuario) + '-PORTFOLIO', None)
    except:
        pass