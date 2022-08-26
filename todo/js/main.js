let productos =[];

let gestor = new GestionarProductos();

document.addEventListener('DOMContentLoaded', () =>{
    gestor.iniciar();
})



const alerta = document.querySelector ("#btnBusqueda");

alerta.addEventListener('click', () => {

    Swal.fire({
        title: 'Esta funcion todavia no se encuentra disponible.',
        width: 600,
        padding: '3em',
        color: '#204135',
        background: '#fff',
        showConfirmButton: false,
        timer: 2500,
        backdrop: `
        rgba(235, 179, 58, 0.4)
        url("./todo/image/alert.gif")
        left top
        no-repeat
        `
    });
})