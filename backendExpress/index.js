//importamos librerias para arrancar servicios
const express = require('express');
const cors = require ('cors');
const routerApi = require('./routes');
const {logErrors, errorHandler, boomErrorHandler} = require('./midlewares/error.handler')

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

//end point inicial raiz
app.get('/', (req, res) => {
  res.send('hola express');

})

routerApi(app);

//midlewares para cachar los errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//Escucha de nuestro servidor, se manda puerto
app.listen(port, () => {
  console.log('hola puerto' + port);
});
