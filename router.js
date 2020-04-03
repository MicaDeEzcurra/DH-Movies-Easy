const home = require('./home');
const cartelera = require('./en_cartelera');
const masVotadas = require('./mas_votadas');

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
            // mas votadas ==>
            case '/mas-votadas':
                res.end(masVotadas.titulo() + '\n \n' + masVotadas.totalPeliculasMasVotadas());
                break;
            // sucursales ==>
            case '/sucursales':
                res.end('Sucursales');
                break;
            case '/contacto':
                res.end('Contacto');
                break;
            case '/preguntas-frecuentes':
                res.end('Preguntas Frecuentes');
                break;
            default:
                res.end('404 not found')
        }
}

}
module.exports = router ;