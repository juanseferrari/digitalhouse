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
    },
    listaDeVentas: function(){
        var datos = []
        let autosParaVenta = autos.filter(function(auto){
            return auto.vendido == true
            }
        )
        autosParaVenta.forEach(function(auto){
            datos.push(auto.precio)
        })
        return datos
    },
    totalDeVentas: function(){
        let valores = this.listaDeVentas();
        let totalVentas = valores.reduce(function(acum,num){
            return acum + num            
        },0)           
        //el ,0 sirve para poner el valor como default cuando no hay valores
        return totalVentas
    },
    puedeComprar: function(auto,persona){
        let resultado = ''
        let precioAuto = auto.precio
        let precioXCuotaAuto = precioAuto / auto.cuotas
        if(persona.capacidadDePagoEnCuotas > precioXCuotaAuto && precioAuto < persona.capacidadDePagoTotal){
            resultado = true
        } else {
            resultado = false
        }
    return resultado
    },
    autosQuePuedeComprar: function(persona){
        let autosParaComprar = [];
        let autosParaVender = this.autosParaLaVenta();
        for (let i = 0; i<autosParaVender.length; i++){
            var res = this.puedeComprar(autosParaVender[i],persona)
            if(res == true){
                autosParaComprar.push(autosParaVender[i])
            }
        }
        return autosParaComprar
        }
    }
 
 

 var auto1 = {
    marca: 'Ford',
    modelo: 'Fiesta',
    precio: 120000,
    km: 200,
    color: 'Azul',
    cuotas: 12,
    anio: 2019,
    patente: 'APL123',
    vendido: false
}
var persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 150000
}
//console.log(concesionaria.venderAuto('APL123'));
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());
//console.log(concesionaria.puedeComprar(auto1, persona));

console.log(concesionaria.autosQuePuedeComprar(persona));



