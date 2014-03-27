var App = App||{};
App.Vistas= (function(){

    "use strict";



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
        //$contenedor.load('views/vistaListado.html', rellenarVistaListado());

        //cargar la pantalla con la estruc
        var $listaOrdenes = $('<div/>',{'id' : '#listaOrdenes'});
        var $botones =  $('<div/>',{'id' : '#botones'});

        //crear listado
        //var tablaOrdenes = crearHTMLTabla(listaEjemplo);
        var tablaOrdenes = crearHTMLTabla(lista);
        //console.log(tablaOrdenes);
        $listaOrdenes.append(tablaOrdenes);

        var $filtroText = $('<input/>', {
            'type': 'text',
        });

        var $deplegableFiltro = $('<select>', {
            'id' : 'filtro'
        });

        var $optionFecha = $('<option/>',{
            'text' : 'Fecha',
            'value' : 'fInicio'
        }).appendTo($deplegableFiltro);

        var $optionCodigo = $('<option/>',{
            'text' : 'Código',
            'value' : 'codigoOrden'
        }).appendTo($deplegableFiltro);

        var $optionDenominacion = $('<option/>',{
            'text' : 'Denominación',
            'value' : 'nomServicio'
        }).appendTo($deplegableFiltro);

        var $optionEstado = $('<option/>',{
            'text' : 'Estado',
            'value' : 'estado'
        }).appendTo($deplegableFiltro);

        var $optionObservaciones = $('<option/>',{
            'text' : 'Observaciones',
            'value' : 'observaciones'
        }).appendTo($deplegableFiltro);


        var $botonFiltro = $('<button/>',{
            'text' : 'Filtrar',
            'id' : 'filtrar'
        });

        //cargar botones
        $botones.load('views/vistaBotones.html');

        //mostrarlo en la pantalla
        $contenedor.append($listaOrdenes);
        $contenedor.append($filtroText);
        $contenedor.append($deplegableFiltro);
        $contenedor.append($botonFiltro);
        $contenedor.append($botones);
    };

    var rellenarVistaListado = function(){
        //cargar la pantalla con la estruc
        var $listaOrdenes = $('#listaOrdenes');
        var $botones =  $('#botones');

        //crear listado
        var tablaOrdenes = crearHTMLTabla(listaEjemplo);
         //tablaOrdenes = crearHTMLTabla(lista);
        //console.log(tablaOrdenes);
        $listaOrdenes.append(tablaOrdenes);

        //cargar botones
        $botones.load('views/vistaBotones.html');

        //mostrarlo en la pantalla
        //$contenedor.append($listaOrdenes);
        //$contenedor.append($botones);
    };

    var crearHTMLTabla = function(lista){
        //crear la lista que se va a mostrar
        var $tabla = $('<table/>');
        var $cabeceras = $('<thead/>');
        var $fecha = $('<th/>',{'text' : 'fecha'});
        var $codigo = $('<th/>',{'text' : 'Código'});
        var $denominacion = $('<th/>',{'text' : 'Denominacion'});
        var $estado = $('<th/>',{'text' : 'E'});
        var $observaciones = $('<th/>',{'text' : 'Observaciones'});

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
            $codigo = $('<td/>',{
                'text' : lista[i].codigoOrden,
                'class':'code',
                'data-code' : lista[i].codigoOrden
             });
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
        var $contenedor = $('#contenedor');
        $contenedor.empty();
        $contenedor.load('views/vistaOrden.html');
        //muestra la información de la orden
        //crea la pantalla

        //muestra la información de la orden
    };

    var ocultarFilas= function(lista){
        var $filas= $('tr');
        $filas.show();

        /*$filas.each(function(idx, element, lista ){
            for(var i in)
            $element[]


        }*/
    };

    var mostrarInfo = function(pestaña){
        $(pestaña).tab('show');


    };

    var mostrarInicio = function(){
        //mostrar pantalla con los datos de inicio de la orden
    };

    var mostrarFin = function(){
        //mostrar pantalla con los datos de finalizacion de la orden
    };





    return {
        pintaPantallaConfiguracion : mostrarConfiguracion,
        pintarLista : crearPantallaLista,
        pintarOrden: crearPantallaOrden,
        pintarInfo : mostrarInfo,
        pintarInicio : mostrarInicio,
        pintarFin : mostrarFin
    };

    /* script llamadas
        var vistas = new App.Vistas();
        vistas.pintarLista();
    */

})();