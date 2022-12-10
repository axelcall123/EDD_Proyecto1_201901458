export class Nodo {
    constructor(info) {
        this.info = info;
        this.siguiente = null;
    }
}
export class NodoD extends Nodo {
    constructor(info) {
        super(info);
        this.anterior = null;
    }
    setS(siguiente) {
        this.siguiente = siguiente;
    }
    setA(anterior) {
        this.anterior = anterior;
    }
}
export class NodoLL extends Nodo {
    constructor(info) {
        super(info);
        this.anterior = null;
        this.zp = null;//z+
        this.zn = null;//z-
    }
}