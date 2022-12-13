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
            return {TF:false,nodo:null}
        } else if (pass == aux.info.GetDatos()["password"] && ad == aux.info.GetDatos()["admin"]){//USUARIO Y CONTRA
            return {TF:true,nodo:aux}
        }//CONTRASEÑA MAL | ES NO ES ADMIN
            return {TF:false,nodo:aux}
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
    //SOLO PARA EL DPI
    buscarDPI(dpi){
        aux=this.primero
        while(aux!=null && aux.info.GetDatos()["DPI"]!=dpi){
            aux=aux.siguiente
        }
        return aux
    }
    getHTML(){
        let elementoL = new listaSimple()
        let idL =new listaSimple()
        let aux=this.primero
        while(aux!=null){
            var user = aux.info.GetDatos()["username"]
            var dpi = aux.info.GetDatos()["dpi"]
            var elementoT=`
            <div class="d-artista-persona" id="d-Mamigo-user-${dpi}">
                <h5 class="center-text">${user}</h5>
                <button class="b-a-persona" id="b-Mamigo-user-${dpi}">
                    <i class="bi bi-person-circle i-a-persona"></i>
                </button>
            </div>`
            var idT = `b-Mamigo-user-${dpi}`
            elementoL.insertarP(elementoT)
            idL.insertarP(idT)
            aux=aux.siguiente
        }
        return {elemento:elementoL,id:idL}
    }

    push(info) {
        this.insertarP(info)
    }
    pop() {
        if (this.primero != null) {
            var temp = this.primero
            this.primero = temp.siguiente
            this.tamano--
            return temp.info
        } else {
            return null
        }
    }
    add(info){
        this.insertarU(info)
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