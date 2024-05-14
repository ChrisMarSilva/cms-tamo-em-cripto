from app.banco import db
import uuid


class Carteira(db.Model):
    __tablename__ = 'carteira'

    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)  # db.BINARY(16)
    nome = db.Column(db.String(150), nullable=False)
    chave = db.Column(db.String(150), nullable=False, index=True)
    situacao = db.Column(db.String(1), nullable=False)

    def __init__(self, id, nome, chave, situacao):
        self.id = id  # uuid.uuid4()
        self.nome = nome
        self.chave = chave
        self.situacao = situacao

    def salvar(self):
        try:
            db.session.add(self)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            raise

    def excluir(self):
        try:
            db.session.delete(self)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            raise

    def serialize(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'chave': self.chave,
            'situacao': self.situacao
        }

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, exc_traceback):
        pass

    def __repr__(self):
        return f'<Carteira {str(self.id)} - {self.nome} - {self.chave} - {self.situacao}>'
