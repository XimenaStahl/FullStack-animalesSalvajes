import Animal from './animal.js'

export default class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, sisear) {

        super(nombre, edad, img, comentarios, sonido);

        this.setImg('./assets/imgs/Serpiente.jpg');
        this.setSonido('./assets/sounds/Siseo.mp3');
    }
}