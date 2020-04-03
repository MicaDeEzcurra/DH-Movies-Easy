const home = require('./home');
const cartelera = require('./en_cartelera');
const masVotadas = require('./mas_votadas');
const sucursales = require('./sucursales');
const contacto = require('./contacto');
const preg_freq = require('./preg_freq');

const router = {

routes: function(req,res){

        // Route System
        switch (req.url) {
            // Home=> TERMINADO
            case '/': //pregunta: puedo poner todos estos metodos dentro de una variable en el modulo de home? asi no me queda tan largo aca
                res.end(home.titulo() + '\n \n' + home.totalPeliculas() + '\n \n' + home.listadoPeliculas() + '\n \n' + home.pieDePagina());
                break;
            // En cartelera ==> TERMINADO
            case '/en-cartelera':
                res.end(cartelera.titulo() + '\n \n' + cartelera.totalPeliculas() + '\n \n' + cartelera.listadoPeliculas());
                break;
            // mas votadas ==> TERMINADO
            case '/mas-votadas':
                res.end(masVotadas.titulo() + '\n \n' + masVotadas.totalPeliculasMasVotadas() + '\n \n' + masVotadas.ratingPromedio() + '\n \n' + masVotadas.listadoPeliculas());
                break;
            // sucursales ==> TERMINADO
            case '/sucursales':
                res.end(sucursales.titulo() + '\n \n' + sucursales.totalSalas() + '\n \n' + sucursales.listadoSalas());
                break;
            // contacto ==> TERMINADO
            case '/contacto':
                res.end(contacto.titulo());
                break;
            // preg-freq ==> TERMINADO
            case '/preguntas-frecuentes':
                res.end(preg_freq.titulo() + '\n \n' + preg_freq.totalPreguntas() + '\n \n' + preg_freq.listadosPreguntas());
                break;
            default:
                res.end('404 not found')
        }
}

}
module.exports = router ;