from flask import Flask, render_template, request, jsonify
import sys
app = Flask(__name__)

def retrieveClientIP():
	print('client ip', file=sys.stderr)
	return request.environ.get('HTTP_X_REAL_IP', request.remote_addr)

@app.route("/")
def main():
	return render_template('index.html')


if __name__ == '__main__':
	app.run(debug=True)