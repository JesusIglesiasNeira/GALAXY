﻿var App = App||{};
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
                success : control.crearLista,
                error : function(jqXHR, textStatus, errorThrow){
                    alert(errorThrow);
                    console.log(errorThrow);
                }
            });
    };

    var envDatos = function (datos){
        $.ajax({
                url : '../servidor/enviaResultadosJSON.php',
                type : 'POST',
                data : { ordenesCompletadas : datos },
                dataType : 'json',
                cache : false,
                success : control.ordenesEnviadas,
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

});