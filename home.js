//aca voy a poner todo lo que va en el home
//Home(/)
const movies = require('./movies');

const home = {
titulo: function(){
   return 'Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.' ;
},

totalPeliculas: function(){
 // b.Total de películas en cartelera​: (total de películas) 
    return 'Total de películas en cartelera​: ' + movies.length ;
   
},

listadoPeliculas: function(){
// c.Listados de películas:
// i.Mostrar el listado de películas organizadas alfabéticamente por título.
let arrayTitulos = movies.map(function(pelicula){
return pelicula.title ;
});
arrayTitulos.sort();

let peliculasOrdenadas = '' ;
arrayTitulos.forEach(function(titulos){ //el param de los callbacks en los metodos de arrays representa cada posicion del array q estas iterando 
      peliculasOrdenadas = peliculasOrdenadas + titulos + '\n' ;
})  

return 'Listado de peliculas: ' + peliculasOrdenadas ;
},

pieDePagina: function(){
    return 'Recordá que podés visitar las secciones:' + '\n' + 'En Cartelera' + '\n' + 'Más Votadas' + '\n' + 'Sucursales' + '\n' + 'Contacto' + '\n' + 'Preguntas Frecuentes';
}
};


module.exports = home ;
    







