const joi = require('joi');
const id = joi.number().integer();
const sala = joi.string();
const descripcion = joi.string().min(8);
const ubicacion = joi.string();
const capacidad = joi.number().integer();
const identificador = joi.string();
const estado = joi.string();


const createSalaSchema = joi.object({
    sala: sala.required(),
    descripcion: descripcion.required(),
    ubicacion: ubicacion.required(),
    capacidad: capacidad.required(),
    identificador: identificador.required(),
    estado: estado.required(),
});

const updateSalaSchema = joi.object({
    sala: sala.required(),


})

const getSalaSchema= joi.object({id:id.required(),});

module.exports = {createSalaSchema, updateSalaSchema, getSalaSchema}
