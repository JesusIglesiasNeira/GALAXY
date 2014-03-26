var App = App||{};
App.Vistas= (function(){

    "use strict"

    //Pantalla Configuración
    var mostarConfiguracion = function(){};

    //Pantalla de la lista
    var crearPantallaLista = function(lista){
        //crear listado

        //cargar botones

        //mostrarlo en la pantalla
    };

    var crearListado = function(lista){
        //crear la lista que se va a mostrar
    };

    var cargarBotones = function(){
        //carga la vista con los botones de configuración y actualizar
    };

    //Pantalla Orden de trabajo
    var crearPantallaOrden = function(orden){
        //crea la pantalla

        //muestra la información de la orden
    };

    var mostrarInfo = function(orden){
        //mostrar info
    };

    var mostrarInicio = function(orden){
        //mostrar pantalla con los datos de inicio de la orden
    };

    var mostrarFin = function(orden){
        //mostrar pantalla con los datos de finalizacion de la orden
    };





    return {
        pintaPantallaConfiguracion : mostarConfiguracion,
        pintarLista : crearPantallaLista,
        pintarInfo : mostrarInfo,
        pintarInicio : mostrarInicio,
        pintarFin : mostrarFin
    };

});