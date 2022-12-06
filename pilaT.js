const Nodo=require("./nodoT");
class pila{
    constructor(){
        this.primero=null;
    }
    insertar(info){
        const nuevo = new Nodo(info);
        this.primero=nuevo;
    }
    mirar(){
        console.log(this.primero.info)
    }
}
module.exports = pila;
