var App = App||{};
App.datos = (function(){
    'use strict';

    var guardarCodUsu = function(codigo){
        if (window.localStorage) {
            //almacenamos en BD el codigo de usuario
            localStorage.setItem('codUsuario', codigo);
        }
    };

    var obtCodUsu = function(){
        return localStorage.getItem('codUsuario');
    };

    var obtListaTareas = function(){
        return JSON.parse(localStorage.getItem('listaOrdenes'));
    };


    var obtOrden = function(codOrden){
        var listaOrdenes = JSON.parse(localStorage.getItem('listaOrdenes'));

        for(var i in listaOrdenes) {
            if(listaOrdenes[i].codigoOrden === codOrden) {
                return listaOrdenes[i];
            }
        }
    };

    var guardarLista = function(lista){
        if (window.localStorage) {
            //eliminamos el objeto que esta guardado en BD
            localStorage.removeItem('listaOrdenes');
            //añadimos el nuevo objeto
            localStorage.setItem('listaOrdenes', JSON.stringify(lista));
        }

    };

    var guardarEstado = function(codOrden, estado){
        var listaOrdenes = JSON.parse(localStorage.getItem('listaOrdenes'));

        for(var i in listaOrdenes) {
            if(listaOrdenes[i].codigoOrden === codOrden) {

                //modificar el estado de la orden
                listaOrdenes[i].estado = estado;

            }
        }
        //volver a guardar la lista con los cambios
        localStorage.setItem('listaOrdenes', JSON.stringify(listaOrdenes));

    };

    var guardarOrden = function(orden){
        var listaOrdenes = JSON.parse(localStorage.getItem('listaOrdenes'));

        for(var i in listaOrdenes) {
            if(listaOrdenes[i].codigoOrden === orden.codigoOrden) {

                //modificar la orden
                listaOrdenes[i]  = orden;
                break;
            }
        }
        //volver a guardar la lista con los cambios
        localStorage.setItem('listaOrdenes', JSON.stringify(listaOrdenes));

    };

return{
        guardarCodUsu : guardarCodUsu,
        obtenerCodUsu : obtCodUsu,
        obtenerListaTareas : obtListaTareas,
        guardarLista : guardarLista,
        obtenerOrden : obtOrden,
        guardarCambios : guardar,
        guardarEstado : guardarEstado
    };

});