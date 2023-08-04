from flask_restful import Api
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from sqlalchemy import MetaData
# from models import db
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}"
)

app = Flask(__name__)

app.secret_key = "ABC123" # signature for Flask session

app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

bcrypt = Bcrypt(app) # allows for encryption/hashing

CORS(app)