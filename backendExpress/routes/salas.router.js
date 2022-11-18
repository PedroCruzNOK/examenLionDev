//importacion de dependencias
const express = require('express');
const SalaService = require('../services/sala.service');

const router = express.Router();
const service = new SalaService();

//end point para obtener listado de salas
router.get('/',async(req,res,next)=> {
  try {
    const users=await service.find();
    res.json(users);
  } catch (error)
  { next(error);
  }
});

//end point para obtener una sala especifica
router.get('/:id',(req,res,next)=> {
  try {
    console.log ('get id salas ');
  } catch (error)
  { next(error);
  }
});

//end point para crear una nueva sala
router.post('/',(req,res,next)=> {
  try {
    console.log ('post salas ');
  } catch (error)
  { next(error);
  }
});

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
