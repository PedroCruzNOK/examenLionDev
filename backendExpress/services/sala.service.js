//importamos los modelos de nuestra estructura del orm
const { models }= require('../libs/sequelize');

class SalaService{
  constructor() {

  }

  async create (data){
    const newSala = await models.Sala.create(data);
    return newSala;
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

  async update(id, changes){
    const sala = await this.findOne(id);
    const rta= await sala.update(changes);
    return rta;
  }

  async delete(id){
    const sala = await this.findOne(id);
    await sala.destroy();
    return sala;
  }
}


module.exports = SalaService;
