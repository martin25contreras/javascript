
//PUEDES QUITAR LOS DEBUGGER QUE TIENES
function renderPage(url,urldatos,templatedatos){
    debugger;
    const template= Handlebars.templates[url];
    var templateHTML=template();
    document.getElementById('seccionListado').innerHTML=templateHTML;

    if(urldatos||urldatos!=''){
        cargarDatos(urldatos,templatedatos);
    }

}

function cargarDatos(urldatos,templatedatos){

    // 1. Crea un nuevo objeto XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // 2. Configuración: solicitud GET para la URL /article/.../load
    xhr.open('GET', urldatos);

    // 3. Envía la solicitud a la red
    xhr.send();

    // 4. Esto se llamará después de que la respuesta se reciba
    xhr.onload = function() {
    if (xhr.status != 200) { // analiza el estado HTTP de la respuesta
         alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
    } else { // muestra el resultado
        data.productos=JSON.parse(xhr.response);
        var listaArticulos= Handlebars.templates[templatedatos];
        listaArticulosHTML=listaArticulos(data);
        document.getElementById('listaArticulos').innerHTML=listaArticulosHTML; 
    }
    };
    xhr.onerror = function() {
     alert("Solicitud fallida");
    };

   
}


function recargarListaArticulos(datos){  
    debugger;
    var listaArticulos= Handlebars.templates['article'];
    listaArticulosHTML=listaArticulos(datos);
    document.getElementById('listaArticulos').innerHTML=listaArticulosHTML;
}

function filtrarPorTexto(datosAFiltrar, texto){
    let datos= new Object();
    datos =datosAFiltrar.productos.filter(item => item.nombre.toUpperCase().includes(texto.toUpperCase()))
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

const route = (event) => {
    debugger;
    event = event || window.event; // get window.event if event argument not provided
     event.preventDefault();
    // window.history.pushState(state, unused, target link);
    window.history.pushState({}, "", event.target.href);
    locationHandler();
};

const locationHandler = () => {    
    const location = window.location.pathname; //  url path
    // si el  path length es 0 voy al route
    if (location.length == 0) {
        location = "/";
    }
    // get al router
    const route = routes[location] || routes["404"];
    // render
    renderPage(route.template,route.urldatos,route.templatedatos);
    // cambio el titulo de la pagina
    document.title = route.title;
    // cambio la descripcion del meta
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};

var data = new Object();
// event listener para los url change
window.onpopstate = locationHandler;
// ruteo inicial
window.route = route;
// llamo al ruteo inicial
locationHandler();
