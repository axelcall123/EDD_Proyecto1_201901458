import { NodoD } from './Nodo.js'
export class ldEnlazada {
    constructor() {
        this.lc = null;
    }
    insertar(info) {
        const nuevo = new NodoD(info);
        nuevo.setA(nuevo);
        nuevo.setS(nuevo);
        if (this.lc != null) {
            this.lc.siguiente.anterior = nuevo;
            nuevo.siguiente = this.lc.siguiente;
            this.lc.siguiente = nuevo;
            nuevo.anterior = this.lc;
        }
        this.lc = nuevo;
    }
}