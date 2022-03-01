from flask import Flask, render_template, request, jsonify
from werkzeug.utils import secure_filename
import os
from datetime import datetime
 
app = Flask(__name__)
         
app.secret_key = "caircocoders-ednalan"
         
app.config['UPLOAD_FOLDER'] = 'static/uploads'
   
ALLOWED_EXTENSIONS = set(['txt', 'dos','png', 'jpg', 'jpeg', 'gif'])
   
def allowed_file(filename):
 return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
 
@app.route('/')
def index(): 
    return render_template('index.html')
 
@app.route("/upload",methods=["POST","GET"])
def upload():
    file = request.files['uploadFile']
    filename = secure_filename(file.filename)
    if file and allowed_file(file.filename):
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        filenameimage = file.filename
 
        msg  = 'File successfully uploaded ' + file.filename 
    else:
        msg  = 'Invalid Uplaod only png, jpg, jpeg, gif'
    return jsonify({'htmlresponse': render_template('response.html', msg=msg, filenameimage=filenameimage)})
 
if __name__ == "__main__":
    app.run(debug=True)