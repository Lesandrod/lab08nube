require('dotenv').config()
const mysql = require('mysql2')
const conexion = mysql.createConnection(process.env.DATABASE_URL)

conexion.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Se estableció la conexión a la base de datos!');

  });module.exports = conexion;

