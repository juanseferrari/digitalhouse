const productosController = {
    listado: function(){},
    crear: function(){},
    detalle: function(req,res){
        let idProducto = req.params.id
        res.send("Bienvenidos al producto: " + idProducto)
        
    },
    detalleComentario: function(req,res){
        let idProducto = req.params.id
        let idComentario = req.params.idComentario
        if(idComentario == undefined){
            res.send("Bienvenidos a los comentarios del producto: " + idProducto)
        } else {
            res.send("Bienvenidos a los comentarios del producto: " + idProducto + " y estas viendo el comentario " + idComentario)
        
        }
    }

};

module.exports = productosController;