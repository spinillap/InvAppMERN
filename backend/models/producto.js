const mongoose = require('mongoose');
const {Schema} = mongoose;

const productoSchema = new Schema({
    numpart: {type:String, require:true},
    descripcion: {type:String, require:true},
    cantidad: {type:Number, require:true},
    precio: {type:Number, require:true},
});

module.exports = mongoose.model('producto', productoSchema);