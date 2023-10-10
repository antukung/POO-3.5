class Transporte {
    #nombre;
    #roto;
    #ganas = 1;

    constructor(nombre = "estado deafult", roto = 0) {
        this.#nombre = nombre;
        this.#roto = roto;

    }


    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }
    setRoto(roto) {
        this.#roto = roto;
    }
    getRoto() {
        return this.#roto;
    }

    auto(conductor) {

        if ((conductor.getAnimo() === 0) && (this.#roto === 0)) {
            console.log("no encuentro la llave")
            this.#ganas--
        } else {
            if (this.#roto > 0 && this.#ganas === 1) {
                console.log("encendiedo");
                conductor.movimiento(this);
            } if (this.#roto === 0 && (this.#ganas === 1)) {
                console.log("no enciende");
            if (conductor.getAnimo() > 0) {
                    console.log("no puedo ir me quiero matar")
                }
            }
       ; }
    }


}

export { Transporte };