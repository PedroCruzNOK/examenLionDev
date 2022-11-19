//importamos los modelos de nuestra estructura del orm
const { models }= require('../libs/sequelize');

//clase sala, aqui se definen los metodos
class SalaService{
  constructor() {

  }

  //metodo para crear una nueva sala
  async create (data){
    const newSala = await models.Sala.create(data);
    return newSala;
  }

  //metodo para obtener todas las salas
  async find (){
    const rta = await models.Sala.findAll();
    return rta;
  }

  //metodo para obtener una sola sala por id
  async findOne(id){
    const sala = await models.Sala.findByPk(id);
        if(!sala){
          console.log('error findone')
        }
        return sala;
  }

  //metodo para actualizar la informacion de una sala
  async update(id, changes){
    const sala = await this.findOne(id);
    const rta= await sala.update(changes);
    return rta;
  }

  //metodo para eliminar una sala
  async delete(id){
    const sala = await this.findOne(id);
    await sala.destroy();
    return sala;
  }

}

//se esportan los los metodos  del servicio de sala
module.exports = SalaService;
