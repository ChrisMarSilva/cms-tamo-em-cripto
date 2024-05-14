# -*- coding: utf-8 -*-
from flask import render_template  # make_response, request, render_template, redirect, url_for, jsonify
# from app.models.carteira import Carteira


class CarteiraService:
    def __init__(self):
        pass

    @classmethod
    def index(cls):
        return render_template(template_name_or_list="carteira.html")

    @classmethod
    def consulta(cls):
        # try:
        # data = request.args
        # if not data: data = request.get_json(silent=True)
        # if not data: return make_response(get_json_retorno_grid(msg='Dados não informado!'), 200)
        # dt_ini = data.get('DataIni')

        # rows = Carteira.buscar_todos()
        # lista = [[str(row['DTHRREGISTRO']), str(row['DTENVIO']), str(row['NMUSUARIO']), Alerta.descricao_tipo(tipo=str(row['TIPO'])), str(row['MENSAGEM']), Alerta.descricao_situacao_telegram(situacao_telegram=str(row['SITUACAO_TELEGRAM'])), Alerta.descricao_situacao_email(situacao_email=str(row['SITUACAO_EMAIL'])), str(row['IDUSUARIO']), str(row['ID'])] for row in rows]

        # pessoas = Pessoa.query.all()
        # return render_template("lista.html", pessoas=pessoas)

        return None  # make_response(lista=lista, 200)
        # except:  # Exception as e:
        #    return None  # make_response(get_json_retorno_grid(rslt='FALHA', msg=LogErro.descricao_erro(texto=str(e))), 200)

    @classmethod
    def salvar(cls):
        # try:
        # req_data = request.get_json()
        # email = req_data['email']
        # data = request.form
        # if not data: data = request.get_json(silent=True)
        # if not data: return make_response(get_json_retorno_metodo(msg='Dados não informado!'), 200)
        # tipo = data.get('txtTipo')
        # if not tipo: return make_response(get_json_retorno_metodo(msg='Id. Alerta não informado.'), 200)

        # alerta = Alerta.registrar(id_usuario=int(rows['ID']), tipo=str(tipo), mensagem=str(mensagem))x
        # alerta.excluir()
        # return jsonify({
        #     'status': '422',
        #     'res': 'failure',
        #     'error': 'Invalid email format. Please enter a valid email address'
        # })

        # return jsonify({
        #     # 'error': '',
        #     'res': bk.serialize(),
        #     'status': '200',
        #     'msg': 'Success creating a new book!👍😀'
        # })

        return None  # make_response(get_json_retorno_metodo(rslt='OK'), 200)
        # except:  # Exception as e:
        #    return None  # make_response(get_json_retorno_metodo(rslt='FALHA', msg=LogErro.descricao_erro(texto=str(e))), 200)

    @classmethod
    def excluir(cls):
        # try:
        # data = request.form
        # if not data: data = request.get_json(silent=True)
        # if not data: return make_response(get_json_retorno_metodo(msg='Dados não informado!'), 200)
        # id_alerta = data.get('IdAlerta')
        # if not id_alerta: return make_response(get_json_retorno_metodo(msg='Id. Alerta não informado.'), 200)

        # alerta = Alerta.get_by_id(id=int(id_alerta))
        # if not alerta: return make_response(get_json_retorno_metodo(msg='Alerta não Localizado.'), 200)
        # alerta.excluir()

        return None  # make_response(get_json_retorno_metodo(rslt='OK'), 200)
        # except:  # Exception as e:
        # return None  # make_response(get_json_retorno_metodo(rslt='FALHA', msg=LogErro.descricao_erro(texto=str(e))), 200)
