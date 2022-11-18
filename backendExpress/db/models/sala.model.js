//se importa el orm para definir el modelo
const {Model, DataTypes, Sequelize} = require ('sequelize');

const SALA_TABLE = 'salas';

//esquema que tendra  una sala de juntas en su tabla, aqui iran los campos que fgromaran la tabla sala de juntas
const SalaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  sala: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
  },
  descripcion: {
      allowNull: false,
      type: DataTypes.STRING
  },
  ubicacion: {
    allowNull: false,
    type: DataTypes.STRING
  },
  capacidad: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  identificador: {
    allowNull: false,
    type: DataTypes.STRING
  },
  estado: {
    allowNull: false,
    type: DataTypes.STRING
  },
  fechainicial: {
    allowNull: true,
    type: DataTypes.DATE
  },
  fechafinal: {
    allowNull: true,
    type: DataTypes.DATE
  },
  solicitante: {
    allowNull: true,
    type: DataTypes.STRING
  },
  createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'create_at',
      defaultValue: Sequelize.NOW

  },
}

//la clase sala  estendera de un modelo
class Sala extends Model{
  static associate(){

  }

  static config(sequelize){
      return {
          sequelize,
          tableName: SALA_TABLE,
          modelName: 'Sala',
          timestamps: false
      }
  }
}

//se exporta el schema  y la clase para su uso
module.exports = {SalaSchema, Sala};
