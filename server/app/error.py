from flask import jsonify
from werkzeug.http import HTTP_STATUS_CODES

def bad_request(message=None):
	payload = {'error': HTTP_STATUS_CODES.get(400)}
	if message:
		payload['message'] = message
	response = jsonify(payload)
	response.states_code = 400
	return response