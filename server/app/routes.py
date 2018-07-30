from app import app
from flask import Flask, request, jsonify
from app.error import bad_request
from app.models import User

@app.route('/')
@app.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json()
        username, password = data["username"], data["password"]
        user = User.query.filter_by(username=username).first()
        print('\n\n\n----------------------------')
        print(user)
        print('----------------------------\n\n\n')
        if user is None or not user.check_password(password):
            return bad_request("Username or password incorrect")
        print('username', username)
        print('password', password)
        return jsonify({
            "username": username,
            "password": password
        })
    except KeyError:
        return bad_request("Wrong arguments.")
    return bad_request("There is an internal server error. Please contact the IT support.")

@app.route('/adduser')
def adduser():
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
