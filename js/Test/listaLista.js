const { NodoLL } = require("./nodo");
class listaL{
    constructor(){
        this.primero=null;
        this.ultimo=null;

        this.inicio=null;
        this.final=null;
    }
    insertarUMain(info){//[primero]<->[]<->[ultimo]
        const nuevo = new NodoLL(info);
        if(this.primero==null){
            this.primero=nuevo;
            this.ultimo=nuevo;
        }else{
            this.ultimo.siguiente=nuevo;
            nuevo.anterior=this.ultimo;
            this.nuevo=this.ultimo;
        }
    }
    insertarFSub(buscar, info) {//[inicio]<->[]<->[final]
        let aux=this.primero;
        if(this.primero!=null){
            while(aux.info!=buscar && aux.siguiente!=null){//BUSCO NODO
                aux=aux.siguiente;
            }
            if(aux.info==buscar){//INSERTAR SUB-NODO
                const nuevo = new NodoLL(info); 
                if (this.inicio == null) {
                    this.inicio = nuevo;
                    this.final = nuevo;
                    this.primero.zp=nuevo;
                    //nuevo.zn=aux;
                } else {
                    this.final.zp=nuevo;
                    nuevo.zn=this.final;
                    this.final=nuevo;
                }
            }//else{CREA EL NODO} por que ya fueron crados los nodos
        }
    }

}
module.exports = listaL;