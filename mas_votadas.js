// Mostrar todas aquellas películas cuyo rating(vote_average) sea mayor o igual a
// 7.
// b.Total de películas: (total de películas que cumplan la condición)
// c.Rating promedio. ​(promedio de rating de estas películas)
// d.Listados de películas.Para cada película mostrar:
// i.Título(título de la película)
// ii.Rating(rating de la película)
// iii.Reseña(reseña de la película)

const movies = require('./movies');

const masVotadas = {

titulo: function(){
    return 'Mas Votadas:' ;
},

totalPeliculasMasVotadas: function(){
    let arrayPelisMasVotadas = movies.map(function (pelicula) {
        if(pelicula.vote_average >= 7){
        return 'Titulo: ' + pelicula.title + '\n';
        }else{
            return '' ;
        };
    });

    let stringPelisMasVotadas = '';
    arrayPelisMasVotadas.forEach(function (pelicula){ //el param de los callbacks en los metodos de arrays representa cada posicion del array q estas iterando 
     stringPelisMasVotadas = stringPelisMasVotadas + pelicula + '\n';
    }) ;
    return stringPelisMasVotadas ;
},

ratingPromedio: function(){ //aca saque el rating promedio de las peliculas mas votadas
    let arrayRatings = movies.map(function (pelicula){
        return pelicula.vote_average ;
    });
    let sumaRatings = arrayRatings.reduce(function(acum,num){
        return acum + num ;
    }); 

    let stringRatingPromedio = '' ;
    stringRatingPromedio = sumaRatings / arrayRatings.length ;

    return 'Rating Promedio: ' + stringRatingPromedio ;
},

listadoPeliculas: function(){
    let arrayPelisMasVotadas = movies.map(function (pelicula) {
        if (pelicula.vote_average >= 7) {
            return 'Titulo: ' + pelicula.title + '\n' + 'Rating: ' + pelicula.vote_average + '\n' + 'Reseña: ' + pelicula.overview ;
        } else {
            return '';
        };
    });

    let stringPelisMasVotadas = '';
    arrayPelisMasVotadas.forEach(function (pelicula) { //el param de los callbacks en los metodos de arrays representa cada posicion del array q estas iterando 
        stringPelisMasVotadas = stringPelisMasVotadas + pelicula + '\n';
    });
    return stringPelisMasVotadas;

}

};

module.exports = masVotadas ;
