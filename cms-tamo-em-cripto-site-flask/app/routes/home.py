# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request
from app.optimize import flask_optimize


main = Blueprint('home', __name__, url_prefix='/')


@main.get(rule='/')
@flask_optimize.optimize(cache='GET-1')
def index():
    return render_template(template_name_or_list='home.html')


@main.get(rule='/news')
@flask_optimize.optimize(cache='GET-1')
def news():
    return render_template(template_name_or_list='news.html')



@main.get(rule='/search')
@flask_optimize.optimize('json')
def search():
    from app.models.song import Song
    q = request.args.get(key='q')
    if q:
        results = (Song
                   .query
                   .filter(Song.title.icontains(q) | Song.performer.icontains(q))
                   .order_by(Song.peak_position.asc())
                   .order_by(Song.chart_debut.desc())
                   .limit(100)
                   .all())
    else:
        results = Song.query.all()

    return render_template(template_name_or_list='search_results.html', results=results)

