import os
import sys


# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask, render_template, url_for, request, jsonify

# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)




# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.

@app.route('/')
def hello_world():
    return render_template("home.html")


@app.route('/solve', methods=['POST', 'GET'])
# ‘/’ URL is bound with hello_world() function.
def sum1():
    c="nothing !"
    name ="Yavar"
    if request.method == "POST":
        mydata=request.get_json()
        #a = int(mydata["numb1"])
        #b = int(mydata["numb"])
        #c=a+b
        c=2000
        name ="Solved"
        print(mydata)

    results ={"res":c, "firstname":name}
    return jsonify(results)
        



@app.route('/secpage')
def newact():
    return render_template("page2.html") 

# main driver function
if __name__ == '__main__':

	# run() method of Flask class runs the application
	# on the local development server.
	app.run(debug = True)

