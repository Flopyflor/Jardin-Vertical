from flask import Flask
from flask import render_template, request, redirect
from flaskext.mysql import MySQL
import os
from flask import send_from_directory


app = Flask(__name__)

mysql = MySQL()
mysql.init_app(app)

app.config["MYSQL_DATABASE_HOST"] = "localhost"
app.config["MYSQL_DATABASE_USER"] = "root"
app.config["MYSQL_DATABASE_PASSWORD"] = ""
app.config["MYSQL_DATABASE_DB"] = "jardinvertical"
app.config["CARPETA"] = os.path.join("imgs/")

@app.route("/imgs/<path:nombreFoto>")
def imgs(nombreFoto):
    return send_from_directory(app.config["CARPETA"], nombreFoto)

DIVISOR = "-"

def to_link(name):
    return DIVISOR.join(name.split())

def from_link(link):
    return " ".join(link.split(DIVISOR))

@app.route('/')
def index():
    return render_template("/main/index.html")


@app.route('/contacto')
def contacto():
    return render_template("/main/contacto.html")

@app.route('/productos')
def productos():
    query = "SELECT * from productos" #the query
    conn = mysql.connect() #connect
    cursor = conn.cursor() #controller
    cursor.execute(query)
    conn.commit()

    productos = cursor.fetchall()

    return render_template("/main/productos.html", productos=productos, to_link=to_link)

@app.route('/producto/<string:nombre>')
def producto(nombre):
    nombre = from_link(nombre)
    query = "SELECT * from productos where nombre = %s" #the query
    conn = mysql.connect() #connect
    cursor = conn.cursor() #controller
    cursor.execute(query, nombre)
    conn.commit()

    productos = cursor.fetchall()

    return render_template("/main/producto.html", producto=productos[0])

if __name__ == "__main__":
    app.run(debug=True)