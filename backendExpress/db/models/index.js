//se importa la clase sala y el esquema  de su modelo
const { Sala, SalaSchema} = require('./sala.model');

//funcion para inicializar los esquemas de los modelos
function setupModels (){
  User.init(SalaSchema, Sala.config(sequelize));
}

//se exportan los modelos creados
module.exports = setupModels;
