/**
 * Vamos a crear rutas del servidor
 * creamos un módulo por eso utilizamos express
 * vamos a utilizar como nuestra rest api para 
 * enviar y recibir datos en formato json
 */

 const express = require('express');
 const router = express.Router();
 const productoCtrl=require('../controllers/producto.controller');
 

 router.get('/',productoCtrl.getProductos);    //rutas limpias obtener productos
 router.post('/',productoCtrl.createProductos);    //guardar productos
 router.get('/:id',productoCtrl.getProducto);    //obtiene un unico producto
 router.put('/:id',productoCtrl.editProducto);    //actualiza datos de un producto
 router.delete('/:id', productoCtrl.deleteProducto); // elimina un producto con el id
  


 /**
  router.get('/', (req, res) => {  
  res.json({
  status: 'API REST funcionando'        
  });
})
*/

module.exports = router;