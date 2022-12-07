import { Nodo } from './Nodo.js'
export class listaSimple {
    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.tamano=0;
    }

    insertarP(info) {
        const nuevo = new Nodo(info);
        if (this.primero == null) {
            this.ultimo = nuevo
            this.primero = nuevo
        }
        else {
            nuevo.siguiente = this.primero;
            this.primero = nuevo;
        }
        this.tamano++;
    }

    insertarU(info) {
        const nuevo = new Nodo(info);
        if (this.primero == null) {
            this.ultimo = nuevo
            this.primero = nuevo
        }
        else {
            this.ultimo.siguiente = nuevo;
            this.ultimo = nuevo;
        }
        this.tamano++;
    }
    //SOLO PARA EL LOGIN
    buscar(user,pass){// json
        var aux = this.primero;
        while (aux != null && user != aux.info.datos()["username"]){
            //lista.info.usuario
            aux=aux.siguiente;
        }

        if(aux==null){//LLEGO FINAL
            return false
        } else if (pass == aux.info.datos()["password"]){//USUARIO Y CONTRA
            return true
        }else{//CONTRA MAL
            return false
        }
    }
}