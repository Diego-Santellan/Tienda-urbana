class GestionarProductos{

    addToDOM(producto){
        let contenedor = document.createElement("div");

        let nombre = document.createElement("h2");
        nombre.textContent = producto.nombre;

        let image = document.createElement("img");
        image.setAttribute("src", producto.img);

        let precio = document.createElement("p");
        precio.textContent = producto.precioFinal();

        let btnCarrito = document.createElement("a");
        btnCarrito.classList.add('btn', 'btn-warning');
        btnCarrito.textContent = ("Agregar al carrito");
        
        contenedor.appendChild(image);
        contenedor.appendChild(nombre);
        contenedor.appendChild(precio);
        contenedor.appendChild(btnCarrito);

        catalogo.appendChild(contenedor);

    }

    iniciar(){

        const Productos = [];
        Productos.push(new producto("lomboard", 14000,"./todo/image/lomboard.1.png","1"));
        Productos.push(new producto("lomboard", 14000,"./todo/image/lomboard.2.png","2"));
        Productos.push(new producto("lomboard", 14000,"./todo/image/lomboard.3.png","3"));
        Productos.push(new producto("penny", 3000,"./todo/image/penny1.png","4"));
        Productos.push(new producto("penny", 3000,"./todo/image/penny2.png","5"));
        Productos.push(new producto("penny", 3000,"./todo/image/penny3.png","6"));
        Productos.push(new producto("skate", 9600,"./todo/image/skate1.png","7"));
        Productos.push(new producto("skate", 9600,"./todo/image/skate2.png","8"));
        Productos.push(new producto("skate", 9600,"./todo/image/skate3.png","9"));
        Productos.push(new producto("medias", 300,"./todo/image/mediasMyM.png","10"));
        Productos.push(new producto("medias", 300,"./todo/image/mediasNike.png","11"));
        Productos.push(new producto("medias", 300,"./todo/image/mediasStarWars.png","12"));
        Productos.push(new producto("medias", 300,"./todo/image/mediasStarWars2.png","13"));
        Productos.push(new producto("medias", 300,"./todo/image/mediasStarWars3.png","14"));
        Productos.push(new producto("medias", 300,"./todo/image/mediasVans.png","15"));
        Productos.push(new producto("buzo", 3500,"./todo/image/buzoAngel.png","16"));
        Productos.push(new producto("buzo", 3500,"./todo/image/buzoBarderos.png","17"));
        Productos.push(new producto("buzo", 3500,"./todo/image/buzoFire.png","18"));
        Productos.push(new producto("buzo", 3500,"./todo/image/buzoHappy.png","19"));
        Productos.push(new producto("buzo", 3500,"./todo/image/buzoPokemon.png","20"));
        Productos.push(new producto("buzo", 3500,"./todo/image/buzoRebels.png","21"));
        Productos.push(new producto("casco", 3500,"./todo/image/cascoCaballero.png","22"));
        Productos.push(new producto("casco", 3500,"./todo/image/cascoNegro.png","23"));
        Productos.push(new producto("casco", 3500,"./todo/image/cascoOneal.png","24"));

        Productos.forEach(producto =>{
            producto.precioFinal;
            this.addToDOM(producto);

        });
        
    }

    
}