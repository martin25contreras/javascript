//cargo la home
var homePage= Handlebars.templates['homepage'];
var homePageHTML=homePage();
document.getElementById('seccionListado').innerHTML+=homePageHTML;

//cargo los articulos
var listaArticulos= Handlebars.templates['article'];
recargarListaArticulos(data);


function recargarListaArticulos(datos){  
    listaArticulosHTML=listaArticulos(datos);
    document.getElementById('listaArticulos').innerHTML=listaArticulosHTML;
}

//Tienes un evento que tiene lo mismo que esta función en el archivo eventos. Por qué lo repite si ya lo tienes aquí, deberias reutilizarlo
function filtrarPorTexto(datosAFiltrar, texto){
    let datos= new Object();
    datos.productos =datosAFiltrar.productos.filter(item => item.nombre.toUpperCase().includes(texto.toUpperCase()))
    return datos;
  }


function ordenarPorPrecio(datosAOrdenar, orden){
    let datosOrdenados= new Object();
    switch(orden)
    {
        // 1=mayor
        // 2=menor
        case '2':
           
        datosOrdenados.productos = datosAOrdenar.productos.sort((a, b) => 
                Number(a.precio) < Number(b.precio) ? 1 : -1
            )

            break;
        case '1':
            datosOrdenados.productos = datosAOrdenar.productos.sort((a, b) => 
                Number(a.precio) > Number(b.precio) ? 1 : -1
            )
            break;
    }
    return datosOrdenados;
  }
