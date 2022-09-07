// Variables Globales
let carrito       = [];
let productos     = [];
let gestor = new GestionarProductos();

//Evento disparador al cargar la pagina
document.addEventListener('DOMContentLoaded', () =>{
    gestor.iniciar();
})

//Cargar carrito
function addCarrito (id){
    const contenedor = document.querySelector('#row_'+id);
    let Producto = new producto( id,
                                contenedor.querySelector('h3').textContent,
                                contenedor.querySelector('.precio').subtring(1.6),
                                contenedor.querySelector('img').src,

                                );

    gestor.addCarrito(Producto);
}



//alert funcion aun no desarrollada
const alerta = document.querySelector ("#btnBusqueda");

alerta.addEventListener('click', (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Esta funcion todavia no se encuentra disponible.',
        width: 600,
        padding: '3em',
        color: '#204135',
        background: '#fff',
        showConfirmButton: false,
        timer: 5000,
        backdrop: `
        rgba(235, 179, 58, 0.4)
        url("./todo/image/alert.gif")
        left top
        no-repeat
        `
    });
})