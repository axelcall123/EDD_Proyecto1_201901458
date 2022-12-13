import { Nodo } from './Nodo.js'
import {graphviz} from '../../d3-graphviz/index.js'
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
    //SOLO PARA USUARIO
    graphviz(){
        let aux=this.ultimo

        let box="shape=box"

        let contNodo=""//nodo_1[]
        let unionNodo=""//nodo_1->nodo->2
        let cont=0
        while(aux!=null){
            let dpi=aux.info.GetDatos()["dpi"]
            let user=aux.info.GetDatos()["username"]

            contNodo = contNodo + `nodo_${cont} [${box} label="${dpi}\n${user}"]\n`
            if(cont<=this.tamano){
                unionNodo = unionNodo + `nodo_${cont}->`
            }else{
                unionNodo = unionNodo + `nodo_${cont}\n`
            }
            cont++
            aux = aux.siguiente
        }
        let contenido = contNodo+unionNodo
        let codigodot = `digraph {
            rankdir=LR
            ${contenido}
        }`
        return codigodot
    }
    add(info){
        this.insertarU(info)
    }
    push(info){
        this.insertarP(info)
    }
    pop(){           
        if (this.primero!=null){
            var temp=this.primero
            this.primero=temp.siguiente
            this.tamano--
            return  temp.info
        }else{
            return null
        }   
    }
    remove(){
        
        if (this.primero != null) {
            const temp = new Nodo(this.ultimo.info);
            aux=this.primero
            for(var x=1;x<this.tamano;x++){
                aux=aux.siguiente
            }
            this.ultimo=aux
            this.tamano--
            return temp.info
        }else{
            return null
        }
    }

    vacio(){
        if(this.primero==null) return true
        return false
    }

}