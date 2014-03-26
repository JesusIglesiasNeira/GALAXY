var App = App||{};
App.control = (function(){
    'use strict';
    var codUsu;
    var liTareas;



///////////Func a realizar cuando se genere el evento////////////
    //al pulsar el boton actualizar
    var actualizar = function(){
        ajax.obtenerOrdenes(codUsu);
        inicial();
    };

    //al pulsar el boton enviar datos
    var enviarDatos = function(tareasRealizadas){
        ajax.enviarDatos(tareasRealizadas);
    };

    // al pulsar el boton guardar o al volver a visualizar la lista
    //tras haber añadido datos de una tarea
    var guardar = function(datos){
        data.guardarCambios(datos);
    };

    //al haber seleccionado una de las 3 pestañas visualizables
    var mostrarPestañaTarea = function(){
         vistas.mostrarPestaña(/**/);
    };







//////////////////////////////AJAX//////////////////////////////
    var crearLista = function(datos){
        data.guardarCambios(datos);
    };

    var ordenesEnviadas = function(){
        alert('Ordenes enviadas Correctamente');
    };







/////////////////////////////Vistas/////////////////////////////

    var mostrarConfig = function(){
        vistas.pintaPantallaConfiguracion();
    };

    var mostrarListaTareas = function(){
         vistas.pintarLista(liTareas);
    };

    var mostrarTarea = function(){
        //////////////
         vistas.crearPantallaOrden(/**/);
    };












    ////Función inicial que se ejecuta//////

    var inicial = function (){
        codUsu = data.obtenerCodUsu();
        if (codUsu && codUsu.length > 0){
            liTareas = data.obtenerListaTareas();    //locales
            if (liTareas && liTareas.length > 0 ){
                vistas.crearPantallaLista(liTareas);
            }
        }
        else {alert('Codigo de usuario incorrecto');}
    };





        return{
        crearLista : crearLista,
        actualizaLista : actualizar,
        enviarCompletadas : enviarDatos,
        guardarCambios : guardar,
        iniciar : inicial
    };



});