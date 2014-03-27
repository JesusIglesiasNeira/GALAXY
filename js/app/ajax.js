var App = App||{};
App.ajax = (function(){



    var obtOrdenes = function(usuario){
        $.ajax({
                url : 'servidor/cargaTareasJSON.json',
                type : 'GET',
                //data : { user : usuario },
                dataType : 'text',
                cache : false,
                success : function(data){
                    var lis = jQuery.parseJSON(data);
                    App.control.crearLista(lis);},
                error : function(jqXHR, textStatus, errorThrow){
                    //alert(errorThrow);
                    console.log(errorThrow);
                }
            });
    };

    var envDatos = function (datos){
        $.ajax({
                url : 'servidor/enviaResultadosJSON.json',
                type : 'POST',
                data : { ordenesCompletadas : datos },
                dataType : 'json',
                cache : false,
                success : App.control.ordenesEnviadas,
                error : function(jqXHR, textStatus, errorThrow){
                    alert(errorThrow);
                    console.log(errorThrow);
                }
        });
    };


    return{
        obtenerOrdenes : obtOrdenes,
        enviarDatos : envDatos
    };

})();