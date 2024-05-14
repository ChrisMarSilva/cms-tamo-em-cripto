# -*- coding: utf-8 -*-
from flask import Blueprint, render_template
from app.optimize import flask_optimize
from app.services.carteira import CarteiraService

main = Blueprint(name='carteira', import_name=__name__, url_prefix='/carteira')


@main.get(rule='/')
@flask_optimize.optimize(cache='GET-1')
def index():
    return CarteiraService.index()


@main.route('/consulta', methods=['GET', 'POST'])
@flask_optimize.optimize('json')
def grid():
    return CarteiraService.consulta()


@main.post(rule='/salvar')
@flask_optimize.optimize('json')
def salvar():
    return CarteiraService.salvar()


@main.get(rule='/excluir')
@flask_optimize.optimize('json')
def excluir():
    return CarteiraService.excluir()
