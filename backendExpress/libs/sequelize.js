//importacion de dependencias para  la conexion a la base de datos y a los modelos
const { Sequelize } = require ('sequelize');
const {config} = require ('../config/config');
const setupModels = require('../db/models/index')

//variables importadas del archivo config estas se asocian a  una url para usarla posteriormente
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

//se inicializa el orm con postgres y con la configuracion de nuestras variables de entorno
const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true,
});

//se asigna la base de datos a los modelos
setupModels(sequelize);
sequelize.sync();

//se exporta la coneccion del orm con los modelos asociados y sincronizados
module.exports = sequelize;
