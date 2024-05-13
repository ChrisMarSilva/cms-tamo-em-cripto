from app.banco import db


class Song(db.Model):
    __tablename__ = 'song'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    performer = db.Column(db.String(100), nullable=False)
    chart_debut = db.Column(db.String(500), nullable=False)
    peak_position = db.Column(db.Integer, nullable=False)
    time_on_chart = db.Column(db.Integer, nullable=False)

    '''
    def __init__(self, id, title, performer, chart_debut, peak_position, time_on_chart):
        self.id = id
        self.title = title
        self.performer = performer
        self.chart_debut = chart_debut
        self.peak_position = peak_position
        self.time_on_chart = time_on_chart
    '''

    def __repr__(self):
        return '<Song %r>' % self.title
