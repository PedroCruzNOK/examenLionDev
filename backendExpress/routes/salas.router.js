//importacion de dependencias
const express = require('express');
const SalaService = require('../services/sala.service');

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
router.get('/:id',
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
router.post('/', 'body',
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
router.patch('/:id',(req,res,next)=> {
  try {
    console.log ('update salas ');
  } catch (error)
  { next(error);
  }
});

//end point para eliminar una sala por id
router.delete('/:id',(req,res,next)=> {
  try {
    console.log ('delete salas ');
  } catch (error)
  { next(error);
  }
});

module.exports = router;
