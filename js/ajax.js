var App = App||{};
App.ajax = (function(){

    var crearLista = function(data){
        return data;
    };


    var obtOrdenes = function(usuario){
        $.ajax({
                url : '../servidor/cargaOrdenesJSON.php',
                type : 'POST',
                data : { user : usuario },
                dataType : 'json',
                cache : false,
                success : crearLista,
                error : function(jqXHR, textStatus, errorThrow){
                    alert(errorThrow);
                    console.log(errorThrow);
                }
            });

    };

    var envDatos = function (datos){


    };






    return{
        obtenerOrdenes : obtOrdenes,
        enviarDatos : envDatos
    };

});