/**
 * Se coloca el controlador como un objeto y luego se exporta como
 * se requiere primero el modelo producto
 */

 const Producto = require('../models/producto');
 const productoCtrl = {};
 
 /**
  * DEFINO LOS MÉTODOS  */
 
 //Obtener todos los productos
 productoCtrl.getProductos = async (req, res) => {
     const productos = await Producto.find();
     res.json(productos);   
}                    
 
 // Crear productos
 productoCtrl.createProductos = async (req, res) => { 
    const producto = new Producto({
        numpart: req.body.numpart,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad,
        precio: req.body.precio
    });
    await producto.save();    
    res.json({
        'status': 'Producto guardado'
    });
 }
 //Conseguir un único producto 
 productoCtrl.getProducto = async (req, res) => {     
    const productoUnico = await Producto.findById(req.params.id); 
     res.json('getProducto ');
 }
 //Actualizar producto
 productoCtrl.editProducto = async (req, res) =>  {
     const { id } = req.params; 
     const productoEdit = {  
         numpart: req.body.numpart,
         descripcion: req.body.descripcion,
         cantidad: req.body.cantidad,
         precio: req.body.precio
     };
     await Producto.findByIdAndUpdate(id, {$set: productoEdit}, {new:  true});   //findByIdAndUpdate
     res.json({status: 'Producto Actualizado'});
 }

 // Eliminar producto 
 productoCtrl.deleteProducto = async (req, res) => {
     await Producto.findByIdAndDelete(req.params.id);
     res.json({status: 'Producto Eliminado'});
 }
  
 //exporto el módulo
 module.exports = productoCtrl;