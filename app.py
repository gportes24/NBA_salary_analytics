from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

app.config["MONGO_URI"]= "mongodb://localhost:27017/horse"
mongo =PyMongo(app)


@app.route("/", methods=['GET'])
def index():
    # find one record of the data from the mongo db
    hoops = mongo.db.hoops
    output = []
    for h in hoops.find():
        output.append({"Player": h['Player'], "tm": h["tm"], "yr2019_20": h["yr2019_20"]})
    return jsonify({"result" : output})
    print(h)
        
                    

    return render_template("index.html", hoops=hoops)

@app.route("/locations", methods=['GET'])
def location():
   
    locations = mongo.db.location
    output= []
    for l in locations.find():
        output.append({"team": l['team'], "2019-29": l['2019-20'], "city" : l["city"], "coordinates":l["coordinates"]})
    return jsonify({"result" : output})
    print (l)


    return render_templace("index.html", locations=locations)
    
if __name__ == "__main__":
    app.run(debug=True)
