document.getElementById('ordenarpor').addEventListener('change', (e) =>
        {
            let datosResultado= new Object();
            let valorBuscado=document.getElementById('buscador').value.trim();
//POR QUE NO SACAS EL ordenarPorPrecio de la condicion?? ya que estas repitiendo 2 instrucciones
        // puedes usar una condicion ternaria para poder guardar la información de de data o datosResultados en una variable y esa enviarla al parametro que necesitas
        // puedes aplicar la misma opción que hiciste en la parte de abajo
            if (valorBuscado!=''){
                datosResultado=filtrarPorTexto(data,valorBuscado);
                datosResultado=ordenarPorPrecio(datosResultado,e.target.value);
            }else{
                datosResultado=ordenarPorPrecio(data,e.target.value);
            }
            recargarListaArticulos(datosResultado);
        });

document.getElementById('buscador').addEventListener('change', (e) =>
        {
        //Si el usuario ingresa puros espacios en blancos?? debes tener la validacion de ello con la expresion regular
           let valorBuscado= e.target.value;
           let datos= new Object();
           datos.productos =data.productos.filter(item => item.nombre.toUpperCase().includes(valorBuscado.toUpperCase()))
           let valorOrden=document.getElementById('ordenarpor').value;
           if (valorOrden!=''){
            datos=ordenarPorPrecio(datos,valorOrden);
           }
           recargarListaArticulos(datos);

        });



