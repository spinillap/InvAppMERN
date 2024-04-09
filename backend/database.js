
// PARA CONECTAR CON LA BASE DE DATOS MONGODBATLAS
 /**   */
const mongoose = require('mongoose');
const URI = 'mongodb+srv://spinillapsena:3ssBoHKGpF641QD0@cluster0.oe0xpq9.mongodb.net/INVAPP?retryWrites=true&w=majority';
 mongoose.connect(URI)
     .then(db => console.log('BaseDatos conectada MongoDBCompass!'))
     .catch(err => console.error(err));  

 module.exports = mongoose; 

//PARA CONECTAR CON LA BASE DE DATOS LOCAL POR MONGODBCOMPASS
 /**   
 const URIL = 'mongodb://localhost/productos'; 
 mongoose.connect(URIL)
     .then(db => console.log('BaseDatos conectada local'))
     .catch(err => console.error(err));  
 module.exports = mongoose;
*/ 
