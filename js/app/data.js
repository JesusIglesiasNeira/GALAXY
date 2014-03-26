var App = App||{};
App.data = (function(){

    var guardarCodUsu = function(codigo){
        if (window.localStorage) {
            //almacenamos en BD el codigo de usuario
            localStorage.setItem('codUsuario', codigo);
        }

    };

    var obtCodUsu = function(){
        localStorage.getItem('codUsuario');
    };

    var obtListaTareas = function(){
        var listaTareas = JSON.parse(localStorage.getItem('listaOrdenes');
    };

    var guardarLista = function(lista){
        if (window.localStorage) {
            //eliminamos el objeto que esta guardado en BD
            localStorage.removeItem('listaOrdenes');
            //añadimos el nuevo objeto
            localStorage.setItem('listaOrdenes', JSON.stringify(lista));
        }

    };

    var guardarCambios = function(datos){
        if (window.localStorage) {
          localStorage.setItem('listaOrdenes', datos);

    };



return{
        guardarCodUsu : guardarCodUsu,
        obtenerCodUsu : obtCodUsu,
        obtenerListaTareas : obtListaTareas,
        guardarLista : guardarLista,
        guardarCambios : guardar
    };

});