const salasRouter = require('./salas.router');
//funcion para esportar a el index de nuestra aplicacion y donde enviaremos el
//arreglo de  end point´s
function routerApi(app){
  app.use('/salas', salasRouter);
}

module.exports = routerApi
