
const movies = require('./movies');


const cartelera = {

titulo: function(){
    return 'En Cartelera' ;
},

totalPeliculas: function(){
    return 'Total de películas: ' + movies.length ;
},

listadoPeliculas: function(){
    let arrayTitulosResenas = movies.map(function (pelicula) {
        return 'Titulo: ' + pelicula.title + '\n' + 'Reseña: ' + pelicula.overview + '\n'  ;
    });

    let stringTitulosyResenas = '';
    arrayTitulosResenas.forEach(function (titulosyResenas) { //el param de los callbacks en los metodos de arrays representa cada posicion del array q estas iterando 
        stringTitulosyResenas = stringTitulosyResenas + titulosyResenas + '\n';
    })  

    return 'Listados de películas:' + '\n' + stringTitulosyResenas ;

}


};

module.exports = cartelera ;