//importamos los modelos de nuestra estructura del orm
const { models }= require('../libs/sequelize');

class SalaService{
  constructor() {

  }

  create (){

  }

  async find (){
    const rta = await models.Sala.findAll();
    return rta;
  }

  findOne(){

  }

  update(){

  }

  delete(){

  }
}


module.exports = SalaService;
