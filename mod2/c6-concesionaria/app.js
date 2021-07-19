const fs = require('fs');

var autos = require('./autos.js', 'utf-8');
/** 
function buscarAuto(patente){
    for(let i = 0; i < autos.length; i++){
        let respuesta = ''
        if(autos[i].patente == patente){
            respuesta = autos[i]
        } else {
            respuesta = null
        }
       return respuesta
    }
}
*/

/** 
function venderAuto(patente){
    let resultadoAuto = this.buscarAuto(patente);
    if (resultadoAuto.vendido == false){
        resultadoAuto.vendido = true
        console.log(resultadoAuto.vendido)
    } else {
        console.log("Error al devolver el auto")
    }
}
*/

let concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
      let autoEncontrado = null;
      autos.forEach(function (auto) {   
         if (auto.patente === patente) {
              autoEncontrado = auto;
         }
      });
      return autoEncontrado;
   },
    venderAuto: function(patente){
        let auto = this.buscarAuto(patente);
        if (auto.vendido == false){
            auto.vendido = true
        }
        console.log(auto)
    },
    autosParaLaVenta: function(){
        let autosParaVenta = autos.filter(function(auto){
            return auto.vendido == false
            }
        )
        return autosParaVenta
    },
    autosNuevos: function(){
        let autosNuevos = this.autosParaLaVenta().filter(function(auto){
            return auto.km < 100
        });
        return autosNuevos;
    }
 
 }


console.log(concesionaria.autosNuevos())