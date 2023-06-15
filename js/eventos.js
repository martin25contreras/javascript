//ya no será change sino submit, debes cambiar el evento.
// dentro de este evento debes tener el history.pushState
document.addEventListener("change", (e) => {
   if (e.target.id=="buscador"){
    let valorBuscado= e.target.value;
    let datos= new Object();
    datos.productos = filtrarPorTexto(data,valorBuscado);
    let valorOrden=document.getElementById('ordenarpor').value;
    if (valorOrden!=''){ datos.productos=ordenarPorPrecio(datos,valorOrden); }
    recargarListaArticulos(datos);
   }
   else if(e.target.id=="ordenarpor"){
    let datosResultado= new Object();
    let valorBuscado=document.getElementById('buscador').value.trim();

    if (valorBuscado!=''){
        datosResultado.productos=filtrarPorTexto(data,valorBuscado);
        datosResultado=ordenarPorPrecio(datosResultado,e.target.value);
    }else{
        datosResultado=ordenarPorPrecio(data,e.target.value);
    }
    recargarListaArticulos(datosResultado);
   }   
});

document.addEventListener("click", (e) => {    
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
     route(e);
});

