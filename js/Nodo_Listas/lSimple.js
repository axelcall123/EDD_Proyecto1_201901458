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
    buscar(user,pass,ad){// json
        var aux = this.primero;
        while (aux != null && user != aux.info.GetDatos()["username"]){
            //lista.info.usuario
            aux=aux.siguiente;
        }
        if(aux==null){//LLEGO FINAL
            return false
        } else if (pass == aux.info.GetDatos()["password"] && ad == aux.info.GetDatos()["admin"]){//USUARIO Y CONTRA
            return true
        }//CONTRASEÑA MAL | ES NO ES ADMIN
            return false
    }

    
}