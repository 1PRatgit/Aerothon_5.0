from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import pandas as pd
from datetime import datetime
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



@app.route('/importProductData', methods=['GET','POST'])
def import_product_data():
    df = pd.read_excel('venv\\files\\name_trial.xlsx')
    data = df.to_dict(orient='records')
    for row in data:
        row_data = Product(name=row['name'],
                           description = row['description'],
                           price = row['price'],
                           qty = row['qty'])
        db.session.add(row_data)
    db.session.commit()
    return jsonify({"message":"Data imported successfully"}),200



@app.route('/importSubAssemblyData', methods=['GET','POST'])
def import_subAssembly_data():
    df = pd.read_excel('venv\\excel files\\sub-assembly.xlsx')
    data = df.to_dict(orient='records')
    for row in data:
        row_data = SubAssembly(assemblyId=row['assemblyId'],
                            processs = row['processs'],
                           itemId = row['itemId'],
                           machineId = row['machineId'],
                           startDate = row['startDate'],
                            endDate = row['endDate'])
        db.session.add(row_data)
    db.session.commit()
    return jsonify({"message":"Sub-Assembly Data imported successfully"}),200


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

    return product_schema.jsonify(newProduct),200

@app.route('/product',methods=['GET'])
def getProducts():
    all_products = Product.query.all()
    result = products_schema.dump(all_products)
    return jsonify(result),200

# Fabrication Class/Model
class Fabrication(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    item = db.Column(db.String(100))
    itemId = db.Column(db.String(200))
    rawMaterial = db.Column(db.String(200))
    Quantity = db.Column(db.String(200))
    inDate = db.Column(db.String(200))
    outDate = db.Column(db.String(200))

    def __init__(self, item, itemId, rawMaterial, Quantity, inDate, outDate):
        self.item = item
        self.itemId = itemId
        self.rawMaterial = rawMaterial
        self.Quantity = Quantity
        self.inDate = inDate
        self.outDate = outDate

# Fabrication Schema
class FabricationSchema(ma.Schema):
    class Meta:
        fields = ('id', 'item', 'itemId', 'rawMaterial', 'Quantity', 'inDate', 'outDate')

#Init schema
fabrication_schema = FabricationSchema()
fabrications_schema = FabricationSchema(many=True)

@app.route('/fabrication',methods = ['POST'])
def addFabrication():
    item = request.json['item']
    itemId = request.json['itemId']
    rawMaterial = request.json['rawMaterial']
    Quantity = request.json['Quantity']
    inDate = request.json['inDate']
    outDate = request.json['outDate']
    
    newFabrication = Fabrication(item,itemId,rawMaterial,Quantity,inDate,outDate)
    db.session.add(newFabrication)
    db.session.commit()

    return fabrication_schema.jsonify(newFabrication)

@app.route('/fabrication',methods=['GET'])
def getFabrications():
    all_fabrications = Fabrication.query.all()
    result = fabrications_schema.dump(all_fabrications)
    return jsonify(result),200

@app.route('/importFabricationData', methods=['GET','POST'])
def import_fabrication_data():
    df = pd.read_excel('venv\\excel files\\fabrication.xlsx')
    data = df.to_dict(orient='records')
    for row in data:
        row_data = Fabrication(item=row['item'], itemId = row['itemId'],
                           rawMaterial = row['rawMaterial'],
                           Quantity = row['Quantity'],
                           inDate = row['inDate'],
                           outDate = row['outDate'])
        db.session.add(row_data)
    db.session.commit()
    return jsonify({"message":"Fabrication Data imported successfully"}),200

# Sub Assembly Class/Model
class SubAssembly(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    assemblyId = db.Column(db.String(100),default=None)
    processs = db.Column(db.String(200),default=None)
    itemId = db.Column(db.String(200),default=None)
    machineId = db.Column(db.String(200),default=None)
    startDate = db.Column(db.String(100),default=None)
    endDate = db.Column(db.String(100),default=None)

    def __init__(self, assemblyId=None, processs=None, itemId=None, machineId=None, startDate=None, endDate=None):
        self.assemblyId = assemblyId
        self.processs = processs
        self.itemId = itemId
        self.machineId = machineId        
        self.startDate = startDate
        self.endDate = endDate

# subAssembly Schema
class subAssemblySchema(ma.Schema):
    class Meta:
        fields = ('id', 'assemblyId', 'processs', 'itemId', 'machineId', 'startDate', 'endDate')

#Init schema
subAssembly_schema = subAssemblySchema()
subAssemblys_schema = subAssemblySchema(many=True)

@app.route('/subAssembly',methods = ['POST'])
def addsubAssembly():
    assemblyId = request.json['assemblyId']
    processs = request.json['processs']
    itemId = request.json['itemId']
    machineId = request.json['machineId']
    startDate = request.json['startDate']
    endDate = request.json['endDate']
    
    newsubAssembly = SubAssembly(assemblyId, processs, itemId, machineId, startDate, endDate)
    db.session.add(newsubAssembly)
    db.session.commit()

    return subAssembly_schema.jsonify(newsubAssembly),200

@app.route('/subAssembly',methods=['GET'])
def getsubAssemblys():
    all_subAssemblys = SubAssembly.query.all()
    result = subAssemblys_schema.dump(all_subAssemblys)
    return jsonify(result),200

# Assembly Class/Model
class Assembly(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    assemblyProcess = db.Column(db.String(100))
    processsId = db.Column(db.String(200))
    assemblyMachineId = db.Column(db.String(200))
    assemblyStartDate = db.Column(db.String(200))
    assemblyEndDate = db.Column(db.String(200))

    def __init__(self, assemblyProcess, processsId, assemblyMachineId, assemblyStartDate,  assemblyEndDate):
        self.assemblyProcess = assemblyProcess
        self.processsId = processsId
        self.assemblyMachineId = assemblyMachineId       
        self.assemblyStartDate = assemblyStartDate
        self. assemblyEndDate =  assemblyEndDate

# Assembly Schema
class AssemblySchema(ma.Schema):
    class Meta:
        fields = ('id', 'assemblyProcess', 'processsId', 'assemblyMachineId', 'assemblyStartDate', 'assemblyEndDate')

#Init schema
Assembly_schema = AssemblySchema()
Assemblys_schema = AssemblySchema(many=True)

@app.route('/Assembly',methods = ['POST'])
def addAssembly():
    assemblyProcess = request.json['assemblyProcess']
    processsId = request.json['processId']
    assemblyMachineId = request.json['assemblyMachineId']
    assemblyStartDate = request.json['assemblyStartDate']
    assemblyEndDate = request.json['assemblyEndDate']
    
    newAssembly = Assembly(assemblyProcess,processsId,assemblyMachineId, assemblyStartDate,assemblyEndDate)
    db.session.add(newAssembly)
    db.session.commit()

    return Assembly_schema.jsonify(newAssembly),200

@app.route('/Assembly',methods=['GET'])
def getAssemblys():
    all_Assemblys = Assembly.query.all()
    result = Assemblys_schema.dump(all_Assemblys)
    return jsonify(result),200

@app.route('/importAssemblyData', methods=['GET','POST'])
def import_assembly_data():
    df = pd.read_excel('venv\\excel files\\assembly.xlsx')
    data = df.to_dict(orient='records')
    for row in data:
        row_data = Assembly(assemblyProcess = row['assemblyProcess'],
                           processsId = row['processsId'],
                           assemblyMachineId = row['assemblyMachineId'],
                           assemblyStartDate = row['assemblyStartDate'],
                           assemblyEndDate = row['assemblyEndDate'])
        db.session.add(row_data)
    db.session.commit()
    return jsonify({"message":"Assembly Data imported successfully"}),200

@app.route('/login', methods = ['GET','POST'])
def login():
    username = request.json['username']
    password = request.json['password']

    if username == "fabUser@123" and password == "fab@123":
        return jsonify({"result":"success","role":"Fabrication"}),200
    elif username == "subUser@123" and password == "sub@123":
        return jsonify({"result":"success","role":"SubAssembly"}),200
    elif username == "assembUser@123" and password == "assemb@123":
        return jsonify({"result":"success","role":"Assembly"}),200
    else:
        return jsonify({"result":"Username and password do not match"}),401
    
@app.route('/', methods = ['GET'])
def get():
    return jsonify({"msg":"Hello Wolrd"}),200

with app.app_context():
    # Create the necessary database tables
    db.create_all()

#Run Server
if __name__ == '__main__':
    app.run(debug = True)

