class Nodo {
    constructor(info) {
        this.info = info;
        this.siguiente = null;
    }
}
class NodoD extends Nodo{
    constructor(info){
        super(info);
        this.anterior=null;
    }
    setS(siguiente){
        this.siguiente=siguiente;
    }
    setA(anterior){
        this.anterior=anterior;
    }
}
class NodoLL extends Nodo {
    constructor(info) {
        super(info);
        this.anterior = null;
        this.zp=null;
        this.zn=null;
    }
}
//module.exports= Nodo;
module.exports= {Nodo,NodoD,NodoLL};