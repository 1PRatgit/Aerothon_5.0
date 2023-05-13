from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
# from app import app, db
import os

# Init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

#Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir,'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']  = False

# Init db
db = SQLAlchemy(app)

#Init marshmalow
ma = Marshmallow(app)



# Product Class/Model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), unique=True)
    description = db.Column(db.String(200))
    price = db.Column(db.Float)
    qty = db.Column(db.Integer)
    
    def __init__(self,name, description, price, qty):
        self.name = name
        self.description = description
        self.price = price
        self.qty = qty

# Product Schema
class ProductSchema(ma.Schema):
    class Meta:
        fields = ('id','name', 'description', 'price', 'qty')

#Init schema
product_schema = ProductSchema()
products_schema = ProductSchema(many=True)

@app.route('/product',methods = ['POST'])
def addProduct():
    name = request.json['name']
    description = request.json['description']
    price = request.json['price']
    qty = request.json['qty']
    
    newProduct = Product(name,description, price, qty)
    db.session.add(newProduct)
    db.session.commit()

    return product_schema.jsonify(newProduct)

@app.route('/product',methods=['GET'])
def getProducts():
    all_products = Product.query.all()
    result = products_schema.dump(all_products)
    return jsonify(result)

@app.route('/', methods = ['GET'])
def get():
    return jsonify({"msg":"Hello Wolrd"})

with app.app_context():
    # Create the necessary database tables
    db.create_all()

#Run Server
if __name__ == '__main__':
    app.run(debug = True)

