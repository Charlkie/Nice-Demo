from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.http import HTTP_STATUS_CODES

app = Flask(__name__)
CORS(app)

@app.route('/')
@app.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json()
        username = data["username"]
        password = data["password"]
        print('usernam', username)
        print('password', password)
        if username == 'admin':
            return jsonify({
                "username": username,
                "password": password
                })
    except KeyError:
        return bad_request("Wrong arguments.")
    return bad_request("There is an internal server error. Please contact the IT support.")

def bad_request(message=None):
    payload = {'error': HTTP_STATUS_CODES.get(400)}
    if message:
        payload['message'] = message
    response = jsonify(payload)
    response.states_code = 400
    return response

if __name__ == '__main__':
    app.run(debug=True)