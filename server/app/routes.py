from app import app
from flask import Flask, request, jsonify
from app.error import bad_request
from app.models import User
from config import secret_key
import jwt
from smtplib import SMTP
from time import time

@app.route("/login", methods=["POST"])
def login():
	try:
		print('\n\n\n')
		print('sfsdfgsgsdfgfdgsgsdfgsdgsd')
		print('\n\n\n')
		data = request.get_json()
		username, password = data["username"], data["password"]
		user = User.query.filter_by(username=username).first()
		if user is None or not user.check_password(password):
			return bad_request("Username or password incorrect")
		payload = {'username': username, 'id': user.id, 'exp': time() + 300}
		token = jwt.encode(payload, secret_key, algorithm='HS256').decode('utf-8')
		print(token)
		print(type(token))
		return jsonify({
			"token": token,
			"avatar": user.avatar(128)
		})
	except KeyError:
		return bad_request("Wrong arguments.")
	return bad_request("There is an internal server error. Please contact the IT support.")

@app.route('/manage')
def manage():

	data = request.get_json()
	username, password = data["username"], data["password"]
	user = User(username=form.username.data)
	user.set_password(form.password.data)
	db.session.add(user)
	db.session.commit()
	return jsonify({
		"username": username,
		"password": password
	})

def check_token(data):
	token = data['token']
	token.decode('utf-8')

@app.route('/dashboard', methods=['POST'])
def dashboard():
	print('entered dashboard')
	try:
		data = request.get_json()
		token = data['token']
		if token:
			if jwt.decode(token, secret_key, algorithm='HS256'):
				return jsonify({"auth": True})
			return jsonify({"auth": False})
		return jsonify({"auth": False})
	except KeyError:
		return bad_request("Wrong arguments.")
	return bad_request("There is an internal server error. Please contact the IT support.")
