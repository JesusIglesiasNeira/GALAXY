﻿var App = App||{};
App.eventos= (function(){

    $(document).on('click', '#guardaCodUsu', function(e){
        var $usu = $('#codUsu').val();
        if ($usu && $usu.length> 0){
            App.control.guardarCodigoUsuario($usu);
        }
    });
    $(document).on('click', '#configura', function(e){
            App.control.mostrarPantallaConfiguracion();
    });

    $(document).on('click', '#actualizar', function(e){
            App.control.actualizaLista();
    });

    return{
       // generaConfig : generaEventoConfig
    };
})();