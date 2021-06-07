import Animal from './animal.js'

export default class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, aullar) {

        super(nombre, edad, img, comentarios, sonido);

        this.setImg('./assets/imgs/Lobo.jpg');
        this.setSonido('./assets/sounds/Aullido.mp3');
    }

}