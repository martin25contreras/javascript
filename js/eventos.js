//ese documento será para toda la SPA o para una variable con funcionalidad en particular??
//Aquí ya no va el change sino el submit que lo alimenta un formulario de tipo get
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

