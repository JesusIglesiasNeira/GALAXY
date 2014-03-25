var App = App||{};
App.control = (function(){
    var codUsu;
    var liTareas;
///////////Func a realizar cuando se genere el evento////////////
    var actualizar = function(){
        ajax.obtenerOrdenes(codUsu);
        inicial();
    };

    var enviarDatos = function(tareasRealizadas){
        ajax.enviarDatos(tareasRealizadas);
    };

    var guardar = function(datos){
        data.guardarCambios(datos);
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
        vistas.mostrarPantallaConfiguracion();
    };

    var mostrarListaTareas = function(){
         vistas.mostrarPantallaListaTareas(liTareas);
    };

    var mostrarTarea = function(){
         vistas.mostrarTarea(/**/);
    };












    ////Función inicial que se ejecuta al cargar control.js//////

    function inicial(){
        codUsu = data.obtenerCodUsu();
        if (codUsu && codUsu.length > 0){
            liTareas = data.obtenerListaTareas();    //locales
            if (liTareas && liTareas.length > 0 ){
                vistas.mostrarPantallaListaTareas(liTareas);
            }
        }
        else {alert('Codigo de usuario incorrecto');}
    }





        return{
        crearLista : crearLista
    };



});