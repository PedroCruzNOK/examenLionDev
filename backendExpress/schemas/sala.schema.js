const joi = require('joi');
const id = joi.number().integer();
const sala = joi.string();
const descripcion = joi.string().min(8);
const ubicacion = joi.string();
const capacidad = joi.number().integer();
const identificador = joi.string();
const estado = joi.string();
const fechainicial = joi.date();
const fechafinal = joi.date();
const solicitante = joi.string();


const createSalaSchema = joi.object({
  sala: sala.required(),
  descripcion: descripcion.allow(),
  ubicacion: ubicacion.allow(),
  capacidad: capacidad.allow(),
  identificador: identificador.allow(),
  estado: estado.allow(),
  fechainicial: fechainicial.allow(),
  fechafinal: fechafinal.allow(),
  solicitante: solicitante.allow(),

});

const updateSalaSchema = joi.object({
  id: id.allow(),
  sala: sala.allow(),
  descripcion: descripcion.allow(),
  ubicacion: ubicacion.allow(),
  capacidad: capacidad.allow(),
  identificador: identificador.allow(),
  estado: estado.allow(),
  fechainicial: fechainicial.allow(),
  fechafinal: fechafinal.allow(),
  solicitante: solicitante.allow(),



})
const getSalaSchema= joi.object({id:id.required(),});

module.exports = {createSalaSchema, updateSalaSchema, getSalaSchema}
