// Título: Preguntas Frecuentes.
//     b.Total de preguntas: (total de preguntas)
// c.Listados de preguntas.Para cada preguntas mostrar:
// i.Pregunta(título de la pregunta)
// ii.Respuesta(texto de la respuesta)

const faqs = require('./faqs');

const preg_freq = {

titulo: function(){
    return 'Preguntas Frecuentes';
},

totalPreguntas: function(){
    return 'Total de Preguntas: ' + faqs.length ; 
},

listadosPreguntas: function(){
    let arrayListadoPregs = faqs.map(function (pregs) {
        return 'Pregunta: ' + pregs.faq_title + '\n' + 'Respuesta: ' + pregs.faq_answer + '\n' ;
    });

    let stringListadoPregs = '';
    arrayListadoPregs.forEach(function (pregs) {
        stringListadoPregs = stringListadoPregs + pregs + '\n';
    });
    return stringListadoPregs;
}


};

module.exports = preg_freq ;