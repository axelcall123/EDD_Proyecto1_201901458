const {Nodo} = require("./nodo");
class listaSimple {
    constructor() {
        this.primero = null;
        this.ultimo=null;
    }
    insertarP(info) {
        const nuevo = new Nodo(info);
        if(this.primero==null){
            this.ultimo=nuevo
            this.primero=nuevo
        }
        else{
            nuevo.siguiente = this.primero;
            this.primero=nuevo;
        } 
    }
    insertarU(info) {
        const nuevo = new Nodo(info);
        if (this.primero == null) {
            this.ultimo = nuevo
            this.primero = nuevo
        }
        else {
            this.ultimo.siguiente=nuevo;
            this.ultimo=nuevo;
        }
    }
}
module.exports = listaSimple;