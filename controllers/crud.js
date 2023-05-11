
const conexion = require('../database/db');

exports.save = (req, res)=>{
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const categoria = req.body.categoria;
    const precio = req.body.precio;
    conexion.query('INSERT INTO tiendita SET ?',{nombre:nombre, descripcion:descripcion, categoria:categoria, precio:precio}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
              
            res.redirect('/');  
            console.log(`Producto ${nombre} creado`);
                  
        }
});
};

exports.update = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const carrera = req.body.carrera;
    conexion.query('UPDATE registros SET ? WHERE id = ?',[{nombre:nombre, carrera:carrera}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};