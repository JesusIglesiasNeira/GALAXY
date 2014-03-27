var App = App||{};
App.eventos= (function(){

    $(document).on('click', '#guardaCodUsu', function(e){
        var $usu = $('#codUsu').val();
        if ($usu && $usu.length> 0){
            App.control.guardarCodigoUsuario($usu);
        }
    });

    //Ejecutado al pulsar el boton configurar para introducir un nuevo usuario
    $(document).on('click', '#configura', function(e){
            App.control.mostrarPantallaConfiguracion();
    });

    //Ejecutado al pulsar el boton de actualizar para obtener las tareas pendientes
    $(document).on('click', '#actualizar', function(e){
            App.control.actualizaLista();
    });

    //Ejecutado al pulsar sobre una de las filas de la tabla que muestra la lista de las tareas
    $(document).on('click', 'tbody tr', function(e){
        var $codigo = $(this).find('.code').data('code');
        App.control.mostrarOrden($codigo);
    });

    //Ejecutado al pulsar sobre la pestaña-boton para volver desde los detalles de la tarea(sin acabar)
    $(document).on('click', '#volver', function(e){
        App.control.obtenerCambios();
        //App.control.guardarCambios($cambios);
         App.control.iniciar();
    });

    //Ejecutado al pulsar el boton filtrar de la vista que muestra la tabla de tareas
    $(document).on('click', '#filtrar', function(e){
        var $filtro = $('#filtro').val();
        var $valor = $('input[type = "text"]').val();
        App.control.ocultarEnTabla($filtro,$valor);
    });



    return{
       // generaConfig : generaEventoConfig
    };
})();