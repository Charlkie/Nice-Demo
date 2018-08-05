from app import db
from werkzeug.security import generate_password_hash, check_password_hash
from hashlib import md5

class User(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(64), index=True, unique=True)
	password_hash= db.Column(db.String(128))

	def set_password(self, password):
		self.password_hash = generate_password_hash(password)

	def check_password(self, password):
		return check_password_hash(self.password_hash, password)

	def avatar(self, size):
		hex_digest = md5(self.username.lower().encode('utf-8')).hexdigest()
		return 'https://www.gravatar.com/avatar/{}?d=identicon&s={}'.format(hex_digest, size)

	def __repr__(self):
		return '<User {}>'.format(self.username)