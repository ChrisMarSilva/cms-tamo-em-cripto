
def load_data(app):
    '''
    from app.models.song import Song
    import csv
    song_data = {}
    with open("./data.csv") as f:
        reader = csv.DictReader(f)
        for row in reader:
            if (row["song"], row["performer"]) not in song_data:
                song_data[(row["song"], row["performer"])] = {"chart_debut": row["chart_debut"], "peak_position": int(row["peak_position"]), "time_on_chart": int(row["time_on_chart"])}
            else:
                song_data[(row["song"], row["performer"])]["peak_position"] = min(song_data[(row["song"], row["performer"])]["peak_position"], int(row["peak_position"]))
                song_data[(row["song"], row["performer"])]["time_on_chart"] = max(song_data[(row["song"], row["performer"])]["time_on_chart"], int(row["time_on_chart"]))

    for s in song_data:
        song = Song(
            title=s[0],
            performer=s[1],
            chart_debut=song_data[s]["chart_debut"],
            peak_position=song_data[s]["peak_position"],
            time_on_chart=song_data[s]["time_on_chart"])
        db.session.add(song)

    db.session.commit()
    '''

    '''
    with app.app_context():
        db.create_all()
    '''

    '''
    from app.models.song import Song
    with app.app_context():
        db.create_all()
        db.session.add(Song(title='title', performer='performer', chart_debut='chart_debut', peak_position=132, time_on_chart=31))
        db.add(song)
        db.commit()
        b.refresh(song)
    '''

    '''
    from app.models.song import Song
    from faker import Faker
    with app.app_context():
        db.create_all()
        fake = Faker(['pt_BR', 'en_US'])
        for idx in range(100):
            db.session.add(Song(title=fake.name(), performer=fake.name(), chart_debut=fake.name(), peak_position=idx+1, time_on_chart=idx+10))
        db.session.commit()
    '''
    pass

def create_app():
    from flask import Flask
    app = Flask(__name__, template_folder='templates', static_folder="static")

    import os
    basedir = os.path.abspath(os.path.dirname(__file__))
    app.config['SECRET_KEY'] = 'aa990d82-f4bf-4826-888e-3e2729831cb5'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'banco.sqlite3')  # 'sqlite:///banco.sqlite3' # db # sqlite # sqlite3 # "sqlite:///:memory:"
    #app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
    #app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
    #app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    from app.banco import db
    db.init_app(app=app)
    app.db = db

    load_data(app=app)

    from app import routes
    routes.init_app(app=app)

    return app
