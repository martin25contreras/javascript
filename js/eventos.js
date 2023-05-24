document.getElementById('ordenarpor').addEventListener('change', (e) =>
        {
            let datosResultado= new Object();
            let valorBuscado=document.getElementById('buscador').value.trim();

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
           let valorBuscado= e.target.value;
           let datos= new Object();
           datos.productos =data.productos.filter(item => item.nombre.toUpperCase().includes(valorBuscado.toUpperCase()))
           let valorOrden=document.getElementById('ordenarpor').value;
           if (valorOrden!=''){
            datos=ordenarPorPrecio(datos,valorOrden);
           }
           recargarListaArticulos(datos);

        });



