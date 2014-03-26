var App = App||{};
App.eventos= (function(){

    $(document).on('click', '#guardaCodUsu', function(e){
        var $usu = $('#codUsu').val();
        if ($usu && $usu.length> 0){
            App.control.guardarCodigoUsuario($usu);
        }
    });

    return{
       // generaConfig : generaEventoConfig
    };
})();