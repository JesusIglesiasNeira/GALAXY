var App = App||{};
App.control = (function(){
    'use strict';


    var codUsu;
    var liTareas;



///////////Func a realizar cuando se genere el evento////////////
    //al pulsar el boton actualizar
    var actualizar = function(){
        App.ajax.obtenerOrdenes(codUsu);
        inicial();
    };

    //al pulsar el boton enviar datos
    var enviarDatos = function(tareasRealizadas){
        App.ajax.enviarDatos(tareasRealizadas);
    };

    // al pulsar el boton guardar o al volver a visualizar la lista
    //tras haber añadido datos de una tarea
    var guardar = function(datos){
         App.datos.guardarCambios(datos);
    };

    //al haber seleccionado una de las 3 pestañas visualizables
    var mostrarPestañaTarea = function(){
         vistas.mostrarPestaña(/**/);
    };

    //Guardar código de usuario
    var guardaUsuario = function(val){
          App.datos.guardarCodUsu(val);
    };







//////////////////////////////AJAX//////////////////////////////
    var crearLista = function(datos){
         App.datos.guardarCambios(datos);
    };

    var ordenesEnviadas = function(){
        alert('Ordenes enviadas Correctamente');
    };







/////////////////////////////Vistas/////////////////////////////

    var mostrarConfig = function(){
        App.Vistas.pintaPantallaConfiguracion();
    };

    var mostrarListaTareas = function(){
         App.Vistas.pintarLista(liTareas);
    };

    var mostrarTarea = function(){
        //////////////
         App.Vistas.crearPantallaOrden(/**/);
    };












    ////Función inicial que se ejecuta//////

    var inicial = function (){
        codUsu =  App.datos.obtenerCodUsu();
        if (codUsu && codUsu.length > 0){
            liTareas =  App.datos.obtenerListaTareas();    //locales
            if (liTareas && liTareas.length > 0 ){
                vistas.crearPantallaLista(liTareas);
            }
        }
        else {
            //alert('Codigo de usuario incorrecto');
            mostrarConfig();
            //eventos.generaConfig();
        }
    };





        return{
            crearLista : crearLista,
            actualizaLista : actualizar,
            enviarCompletadas : enviarDatos,
            guardarCambios : guardar,
            mostrarPestaña : mostrarPestañaTarea,

            guardarCodigoUsuario : guardaUsuario,
            iniciar : inicial
        };



})();