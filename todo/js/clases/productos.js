class producto{

    constructor(nombre, precio, img, id){

        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        
    }
    precioFinal () {

       return this.precio = "$" + this.precio * 1.21 * 1.40;

    }
}
