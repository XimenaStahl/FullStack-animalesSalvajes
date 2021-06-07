import Animal from './animal.js'

export default class Leon extends Animal {
    constructor(nombre, edad, comentarios, img, sonido) {

        super(nombre, edad, comentarios, img, sonido)

        this.setImg('./assets/imgs/Leon.png');
        this.setSonido('./assets/sounds/Rugido.mp3');


    }


}