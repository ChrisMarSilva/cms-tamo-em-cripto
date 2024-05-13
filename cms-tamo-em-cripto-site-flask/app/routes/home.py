from flask import Blueprint, render_template, request
from datetime import datetime
from app.models.song import Song


main = Blueprint('home', __name__, url_prefix='/')


@main.route('/')
def home():
    return render_template("home.html", date=str(datetime.now()))


@main.route('/news')
def news():
    return render_template("news.html", date=str(datetime.now()))


@main.route('/messages')
def messages():
    return render_template("messages.html", date=str(datetime.now()))


@main.route('/trigger_delay')
def trigger_delay():
    return render_template("trigger_delay.html", date=str(datetime.now()))


@main.route('/blog')
def blog():
    return render_template("blog.html", date=str(datetime.now()))


@main.route("/search")
def search():
    q = request.args.get("q")
    #print(q)

    if q:
        results = Song.query.filter(Song.title.icontains(q) | Song.performer.icontains(q)).order_by(Song.peak_position.asc()).order_by(Song.chart_debut.desc()).limit(100).all()
    else:
        results = Song.query.all()  # db.execute(select(Song)) # users = results.scalars().all()

    return render_template("search_results.html", results=results)

