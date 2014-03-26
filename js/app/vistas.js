var App = App||{};
App.Vistas= (function(){

    "use strict";

    var listaEjemplo = [//{}
        //"listaOrdenes": [
            {"codigoOrden":"o1111","codigoCliente":"c1111","nomServicio":"s1111","estado":"t","direccion":"una calle cualquiera","provincia":"Gipuzkoa","cp":"11111","fInicio":"26-03-2014","fFin":"26-03-2014",
            "empleados":[
                    {'nombre':"Alfredo Castillo",'codEmpleado':"e1111",'fecha':"",'hInicio':"09:30",'hFin':"16:30",'desplazamiento':""},
                    {'nombre':"Enrique Marín",'codEmpleado':"e2222",'fecha':"",'hInicio':"09:30",'hFin':"16:30",'desplazamiento':""},
                    {'nombre':"José Pérez",'codEmpleado':"e3333",'fecha':"",'hInicio':"09:30",'hFin':"10:30",'desplazamiento':""}],
            "ordenPlan":[
                    {'local':"local 11",'area':"",'trabajo':"",'tiempo':""}
                ],
            "observaciones": "una observacion"
            },
            {"codigoOrden":"o2222","codigoCliente":"c2222","nomServicio":"s2222","estado":"p","direccion":"otra calle cualquiera","provincia":"Navarra","cp":"22222","fInicio":"26-03-2014","fFin":"",
            "empleados":[
                    {'nombre':"Anne Salona",'codEmpleado':"e4444",'fecha':"",'hInicio':"",'hFin':"",'desplazamiento':""},
                    {'nombre':"Angela Castro",'codEmpleado':"e5555",'fecha':"",'hInicio':"",'hFin':"",'desplazamiento':""}],
            "ordenPlan":[
                    {'local':"local21",'area':"",'trabajo':"",'tiempo':""},
                    {'local':"local22",'area':"",'trabajo':"",'tiempo':""}
                ],
            "observaciones": "una observacion"
            },
            {"codigoOrden":"o3333","codigoCliente":"c3333","nomServicio":"s3333","estado":"p","direccion":"alguna calle cualquiera","provincia":"Gipuzkoa","cp":"33333","fInicio":"26-03-2014","fFin":"",
            "empleados":[
                    {'nombre':"Fernando Villarejo",'codEmpleado':"e6666",'fecha':"",'hInicio':"",'hFin':"",'desplazamiento':""},
                    {'nombre':"Carmen Astorgano",'codEmpleado':"e7777",'fecha':"",'hInicio':"",'hFin':"",'desplazamiento':""},
                    {'nombre':"Elena Espilla",'codEmpleado':"e8888",'fecha':"",'hInicio':"",'hFin':"",'desplazamiento':""}],
            "ordenPlan":[
                    {'local':"local33",'area':"",'trabajo':"",'tiempo':""}
                ],
            "observaciones": "una observacion"
            }
        //]
    ];//};


    //Pantalla Configuración
    var mostrarConfiguracion = function(){
        var $contenedor = $('#contenedor');
        //vaciar el contenido del contenedor
        $contenedor.empty();
        $contenedor.load('views/vistaConfiguracion.html');

    };

    //Pantalla de la lista
    var crearPantallaLista = function(lista){
        var $contenedor = $('#contenedor');

        //vaciar el contenido del contenedor
        $contenedor.empty();

        //cargar la pantalla con la estruc
        var $listaOrdenes = $('<div/>',{'id' : '#listaOrdenes'});
        var $botones =  $('<div/>',{'id' : '#botones'});

        //crear listado
        var tablaOrdenes = crearHTMLTabla(listaEjemplo);
         //tablaOrdenes = crearHTMLTabla(lista);
        //console.log(tablaOrdenes);
        $listaOrdenes.append(tablaOrdenes);

        //cargar botones
        $botones.load('views/vistaBotones.html');

        //mostrarlo en la pantalla
        $contenedor.append($listaOrdenes);
        $contenedor.append($botones);
    };

    var crearHTMLTabla = function(lista){
        //crear la lista que se va a mostrar
        var $tabla = $('<table/>');
        var $cabeceras = $('<thead/>');
        var $fecha = $('<th/>',{"text" : 'fecha'});
        var $codigo = $('<th/>',{"text" : 'Código'});
        var $denominacion = $('<th/>',{"text" : 'Denominacion'});
        var $estado = $('<th/>',{"text" : 'E'});
        var $observaciones = $('<th/>',{"text" : 'Observaciones'});

        $cabeceras.append($fecha);
        $cabeceras.append($codigo);
        $cabeceras.append($denominacion);
        $cabeceras.append($estado);
        $cabeceras.append($observaciones);

        var arrayFilas = [];
        for(var i in lista){
            var elementosFila =[];
            elementosFila.push('<tr>');
            $fecha = $('<td/>',{'text' : lista[i].fInicio});
            elementosFila.push($fecha.get(0).outerHTML);
            $codigo = $('<td/>',{'text' : lista[i].codigoOrden});
            elementosFila.push($codigo.get(0).outerHTML);
            $denominacion = $('<td/>',{'text' : lista[i].nomServicio});
            elementosFila.push($denominacion.get(0).outerHTML);
            $estado = $('<td/>',{'text' : lista[i].estado});
            elementosFila.push($estado.get(0).outerHTML);
            $observaciones = $('<td/>',{'text' : lista[i].observaciones});
            elementosFila.push($observaciones.get(0).outerHTML);
            elementosFila.push('</tr>');

            arrayFilas.push(elementosFila.join(''));
        }

        $tabla.append($cabeceras);
        $tabla.append($(arrayFilas.join('')));
        return $tabla;
    };

    var cargarBotones = function(){
        //carga la vista con los botones de configuración y actualizar
    };

    //Pantalla Orden de trabajo
    var crearPantallaOrden = function(orden){
        //crea la pantalla

        //muestra la información de la orden
    };

    var mostrarInfo = function(orden){
        //mostrar info
    };

    var mostrarInicio = function(orden){
        //mostrar pantalla con los datos de inicio de la orden
    };

    var mostrarFin = function(orden){
        //mostrar pantalla con los datos de finalizacion de la orden
    };





    return {
        pintaPantallaConfiguracion : mostrarConfiguracion,
        pintarLista : crearPantallaLista,
        pintarInfo : mostrarInfo,
        pintarInicio : mostrarInicio,
        pintarFin : mostrarFin
    };

    /* script llamadas
        var vistas = new App.Vistas();
        vistas.pintarLista();
    */

})();