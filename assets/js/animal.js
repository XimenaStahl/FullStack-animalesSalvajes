// Clase Padre
export default class Animal {
    constructor(nombre, edad, comentarios, img, sonido) {
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;
        this.getNombre = () => _nombre;
        this.setNombre = (nombre) => _nombre = nombre;
        this.getEdad = () => _edad;
        this.setEdad = (edad) => _edad = edad;
        this.getComentarios = () => _comentarios;
        this.setComentarios = (comentarios) => _comentarios = comentarios;
        this.getImg = () => _img;
        this.setImg = (img) => _img = img;
        this.getSonido = () => _sonido;
        this.setSonido = (sonido) => _sonido = sonido;
    }

    get nombre() {
        return this.getNombre();
    }
    set nombre(nombre) {
        this.setNombre(nombre);
    }

    get edad() {
        return this.getEdad();
    }
    set edad(edad) {
        this.setEdad(edad);
    }


    get comentarios() {
        return this.getComentarios();
    }
    set comentarios(comentarios) {
        this.setComentarios(comentarios);
    }

    get img() {
        return this.getImg();
    }
    set img(img) {
        this.setImg(img);
    }

    get sonido() {
        return this.getSonido();
    }
    set sonido(sonido) {
        this.setSonido(sonido);
    }

    setInicio() {
        return (`Este método es para realizar un cambio en la URL del video`)
    }
}