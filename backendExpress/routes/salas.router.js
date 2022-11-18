//importacion de dependencias
const express = require('express');
const router = express.Router();

//end point para obtener listado de salas
router.get('/',(req,res,next)=> {
  try {
    console.log ('get salas ');
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
