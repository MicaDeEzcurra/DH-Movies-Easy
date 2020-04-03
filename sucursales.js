// a.Título: Nuestras Salas.
// b.Total de salas: (total de salas)
// c.Listados de salas.Para cada sala mostrar:
// i.Nombre(nombre de la sala)
// ii.Dirección(ubicación de la sala)
// iii.Descripción(descripción de la sala)

const theaters = require('./theaters');

const sucursales = {

titulo: function(){
    return 'Nuestras Salas:' ;
},

totalSalas: function(){ //aca no se si es el total de lugares o la cantidad de salas que suman entre todas las sucursales.
return 'Total de Salas: ' + theaters.length ;
},

listadoSalas: function(){
    let arrayListadoSalas = theaters.map(function(salas){
        return 'Nombre: ' + salas.name + '\n' + 'Direccion: ' + salas.address + '\n' + 'Descripcion: ' + salas.description + '\n' ;
    });

    let stringListadoSalas = '' ;
    arrayListadoSalas.forEach(function(salas){
        stringListadoSalas = stringListadoSalas + salas + '\n' ;
    });
    return stringListadoSalas;

}


};

module.exports = sucursales ;