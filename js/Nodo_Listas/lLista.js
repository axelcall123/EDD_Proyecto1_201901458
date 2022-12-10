import { NodoLL } from './Nodo.js'
export class listaLista {
    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.countId=1;
    }
    insertarUMain(info) {
        /*[primero]
          ant↑↓sig
             []
          ant↑↓sig
          [ultimo]*/
        const nuevo = new NodoLL(info);
        nuevo.id=this.countId;
        if (this.primero == null) {
            this.primero = nuevo;
            this.ultimo = nuevo;
            this.primero.id=1;
        } else {
            this.ultimo.siguiente = nuevo;
            nuevo.anterior = this.ultimo;
            this.ultimo=nuevo;
            
        }
        this.countId++;
    }
    insertarPSub(buscar, info) {
        //<-zn;->zp
        //[aux]->[inicio]<->[]<->[final]
        let aux = this.primero;
        if (this.primero != null) {
            while (aux.info.GetDatos()["name"] != buscar && aux != null) {//BUSCO NODO
                aux = aux.siguiente;
            }
            if (aux!=null) {//insertar sub-nodo
                const nuevo = new NodoLL(info);
                if (aux.zp == null) {
                    aux.zp = nuevo;
                } else {
                    nuevo.zp = aux.zp;
                    aux.zp.zn =nuevo;
                    aux.zp=nuevo;
                }
            }//else{CREA EL NODO} por que ya fueron crados los nodos
        }
    }
}