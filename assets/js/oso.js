import Animal from './animal.js'

export default class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, grunir) {

        super(nombre, edad, img, comentarios, sonido);

        this.setImg('./assets/imgs/Oso.jpg');
        this.setSonido('./assets/sounds/Gruñido.mp3');
    }
}