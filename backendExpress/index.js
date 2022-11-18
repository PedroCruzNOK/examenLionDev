//importamos librerias para arrancar servicios
const express = require('express');
const cors = require ('cors');
const routerApi = require('./routes');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

//end point inicial raiz
app.get('/', (req, res) => {
  res.send('hola express');

})

routerApi(app);

//Escucha de nuestro servidor, se manda puerto
app.listen(port, () => {
  console.log('hola puerto' + port);
});
