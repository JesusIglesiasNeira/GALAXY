var App = App||{};
App.control = (function(){
    'use strict';


    var codUsu;




///////////Func a realizar cuando se genere el evento////////////
    //al pulsar el boton actualizar
    var actualizar = function(){
        App.ajax.obtenerOrdenes();
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

    //Al seleccionar una de las ordenes de la tabla se muestra la panta
    var mostrarOrden = function(codigo){
        var orden = App.datos.obtenerOrden(codigo);
        if (orden){
            App.Vistas.pintarOrden(orden);
        }
    };

    //Guardar código de usuario
    var guardaUsuario = function(val){
          App.datos.guardarCodUsu(val);
          var tareas;
          var existe = existeLista();
          if (existe){
            tareas =  App.datos.obtenerListaTareas();
            App.Vistas.pintarLista(tareas);
            //mostrarListaTareas(tareas);
          }
          else{
            App.ajax.obtenerOrdenes();

            ///////////////////////////////////////////////////////////////////////////////



          }
    };


    var existeLista = function(){
        return App.datos.obtenerListaTareas();
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
                App.Vistas.pintarLista(listaTareas);
                //mostrarListaTareas(listaTareas);
            }
            else{alert('Lista de Ordenes vacía por favor actualice la lista');}
        }
        else {
            //alert('Codigo de usuario incorrecto o no existe');
            mostrarConfig();
        }
    };





        return{
            actualizaLista : actualizar,
            crearLista : crearLista,
            enviarCompletadas : enviarDatos,
            guardarCambios : guardar,
            guardarCodigoUsuario : guardaUsuario,
            mostrarOrden : mostrarOrden,
            mostrarPestaña : mostrarPestañaTarea,
            mostrarPantallaConfiguracion : mostrarConfig,
            iniciar : inicial
        };



})();