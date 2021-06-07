import Animal from './animal.js'

export default class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, chillar) {

        super(nombre, edad, img, comentarios, sonido);

        this.setImg('./assets/imgs/Aguila.png');
        this.setSonido('./assets/sounds/Siseo.mp3');
    }

}