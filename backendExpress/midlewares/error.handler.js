//funcion para devolver el log completo de errores
function logErrors (err, req, res, next){
  console.log('logErrors');
  console.error(err);
  next(err);
}

//errores status 500 de servidor
function errorHandler(err, req, res,  next){
  console.log('errorHandler')
      res.status(500).json({
      message: err.message,
      stack: err.stack
  });
}

//error manejado por la libreria boom  para manejarlos mas claramente
function boomErrorHandler(err, req, res, next){
  if (err.isBoom) {
      const { output } = err;
      res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

//se exportan las funciones que devuelven los errores
module.exports = {logErrors, errorHandler, boomErrorHandler}
