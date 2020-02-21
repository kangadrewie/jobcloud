from flask import Flask, render_template, request, jsonify
import sys
from jobsearch import *

app = Flask(__name__)

def retrieveClientIP():
	print('client ip', file=sys.stderr)
	return request.environ.get('HTTP_X_REAL_IP', request.remote_addr)

@app.route("/")
def main():
	return render_template('index.html')

@app.route('/getIP', methods=['POST', 'GET'])
def background_process_test():
    if request.method == 'POST':
        jobTitle = request.form['jobTitle'] # suppose you have a email and password field
        location = request.form['location']

        getID(jobTitle, location)

        return wordCloud(summaries)

if __name__ == '__main__':
	app.run(debug=True)