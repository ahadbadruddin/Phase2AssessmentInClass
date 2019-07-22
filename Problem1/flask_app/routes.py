from flask import jsonify, request
from .app import app

@app.route('/', methods=["GET"])
def returnHello():
    return jsonify({"message":"hello"})

@app.route("/longest", methods=["POST"])
def longest():
    strings = request.json['strings']
    longest= ""
    for string in strings:
        if len(string)>len(longest):
            longest=string
        if len(string) == len(longest):
            if string[0] < longest[0]:
                longest = longest
            else:
                longest = string
    return jsonify({"longest": longest}) 
