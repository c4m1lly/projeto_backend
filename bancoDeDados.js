const mongoose = require('mongoose');
require ('dotenv').config()
async function conectaBancoDeDados(){
 try{
    console.log("A Conexão com o banco de dados se iniciou")

    await mongoose.connect(process.env.MONGO_URL)
   
  console.log(" Conexão com o banco de dados feita com sucesso!")
 }catch (erro){
    console.log(erro)
 }
 
}

module.exports = conectaBancoDeDados