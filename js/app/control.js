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
          var tareas;
          var existe = existeLista();
          if (existe){
            tareas =  App.datos.obtenerListaTareas();
            mostrarListaTareas(tareas);
          }
          else{
            App.ajax.obtenerOrdenes();

            ///////////////////////////////////////////////////////////////////////////////



          }
    };


    var existeLista = function(){
        var existe = false;
        var lisTareas;
        lisTareas =  App.datos.obtenerListaTareas();
        if (lisTareas && lisTareas.length > 0 ){
            existe = true;
        }
        return existe;
    };




//////////////////////////////AJAX//////////////////////////////
    var crearLista = function(datos){
        App.datos.guardarLista(datos);
        inicial();
    };

    var ordenesEnviadas = function(){
        alert('Ordenes enviadas Correctamente');
    };







/////////////////////////////Vistas/////////////////////////////

    var mostrarConfig = function(){
        App.Vistas.pintaPantallaConfiguracion();
    };

    var mostrarListaTareas = function(liTareas){
         App.Vistas.pintarLista(liTareas);
    };

    var mostrarTarea = function(){
        //////////////
         App.Vistas.crearPantallaOrden(/**/);
    };












    ////Función inicial que se ejecuta//////

    var inicial = function (){
        codUsu =  App.datos.obtenerCodUsu();
        var listaTareas;
        if (codUsu && codUsu.length > 0){
            var existe = existeLista();
            if (existe){
                listaTareas =  App.datos.obtenerListaTareas();
                mostrarListaTareas(listaTareas);
            }
            else{alert('Lista de Ordenes vacía por favor actualice la lista');}
        }
        else {
            alert('Codigo de usuario incorrecto o no existe');
            mostrarConfig();
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