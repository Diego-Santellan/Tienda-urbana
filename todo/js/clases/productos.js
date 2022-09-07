class producto{

    constructor(nombre, precio, img, id,destacado){

        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.id = id;   
        this.destacado = destacado;
        
    }
    precioFinal () {

       return this.precio = "$" + this.precio * 1.21 * 1.40;

    }
}
