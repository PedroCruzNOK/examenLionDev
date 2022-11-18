//se asocia nuestro objeto config
require('dotenv').config();

//configuracion para viariables de entorno
const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 5000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
}

//se exporta la configuracion
module.exports = { config };
