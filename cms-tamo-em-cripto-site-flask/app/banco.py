# -*- coding: utf-8 -*-
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()



def configure(app):
    db.init_app(app=app)
    app.db = db
    # load_data(app=app)
    # db.create_all()
    # db.session.commit()


'''


    # @app.before_first_request
    # def create_table():
    #     db.create_all()
    
def load_data(app):
    with app.app_context():
        ...

    nada
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

    from app.models.song import Song
    with app.app_context():
        db.create_all()
        db.session.add(Song(title='title', performer='performer', chart_debut='chart_debut', peak_position=132, time_on_chart=31))
        db.add(song)
        db.commit()
        b.refresh(song)

    from app.models.song import Song
    from faker import Faker
    with app.app_context():
        db.create_all()
        fake = Faker(['pt_BR', 'en_US'])
        for idx in range(100):
            db.session.add(Song(title=fake.name(), performer=fake.name(), chart_debut=fake.name(), peak_position=idx+1, time_on_chart=idx+10))
        db.session.commit()

    pass
'''