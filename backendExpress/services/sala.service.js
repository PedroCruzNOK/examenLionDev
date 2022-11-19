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

  async findOne(id){
    const sala = await models.Sala.findByPk(id);
        if(!sala){
          console.log('error findone')
        }
        return sala;
  }

  update(){

  }

  delete(){

  }
}


module.exports = SalaService;
