//importacion de dependencias
const express = require('express');
const SalaService = require('../services/sala.service');
const  validatorHandler = require('../midlewares/validator.handlre');
const{getSalaSchema, updateSalaSchema,createSalaSchema}=require('../schemas/sala.schema');

const router = express.Router();
const service = new SalaService();

//end point para obtener listado de salas
router.get('/',async(req,res,next)=>{
  try{
    const salas=await service.find();
    res.json(salas);
  }
  catch(error)
  {
    next(error);

  }});

//end point para obtener una sala especifica
router.get('/:id',validatorHandler(getSalaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const sala = await service.findOne(id);
      res.json(sala);
    } catch (error) {
      next(error);
    }
  }
);

//end point para crear una nueva sala
router.post('/', validatorHandler(createSalaSchema, 'body'),
  async(req,res,next)=>{
    try{
      const body= req.body;
      const newSala = await service.create(body);

      res.status(201).json(newSala);
    }
    catch(error){
      next(error);

    }
  }
);

//end point para editar una sala
router.patch('/:id',
  validatorHandler(getSalaSchema, 'params'),
  validatorHandler(updateSalaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const sala = await service.update(id, body);
      res.json(sala);
    } catch (error) {
      next(error);
    }
  }
);

//end point para eliminar una sala por id
router.delete('/:id',validatorHandler(getSalaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
