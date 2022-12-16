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
            return {AD:false,TF:false,nodo:null}
        } else if (pass == aux.info.GetDatos()["password"]){//USUARIO Y CONTRA
            if (ad == aux.info.GetDatos()["admin"]){//SI ES ADMIN
                return {AD:true, TF: true, nodo: aux }
            }else{//NO ES ADMIN
                return {AD:false, TF: true, nodo: aux }
            }
            
        }//CONTRASEÑA MAL | ES NO ES ADMIN
            return {TF:false,nodo:aux}
    }
    //SOLO PARA USUARIO
    graphviz(){
        let aux=this.primero

        let box="shape=box"

        let contNodo=""//nodo_1[]
        let unionNodo=""//nodo_1->nodo->2
        let cont=0
        while(aux!=null){
            let dpi=aux.info.GetDatos()["dpi"]
            let user=aux.info.GetDatos()["username"]

            contNodo = contNodo + `nodo_${cont} [${box} label="${dpi}\n${user}"]\n`
            if(cont<this.tamano-1){
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
        let aux=this.primero
        while (aux != null && aux.info.GetDatos()["dpi"]!=dpi.toString()){
            aux=aux.siguiente
        }
        return aux
    }
    getHTML(idBoton){//bloqueados o amigos
        let elementoL = new listaSimple()
        let idL =new listaSimple()
        let aux=this.primero
        while(aux!=null){
            var user = aux.info.GetDatos()["username"]
            var dpi = aux.info.GetDatos()["dpi"]
            var elementoT=`
            <div class="d-artista-persona" id="d-M${idBoton}-user-${dpi}">
                <h5 class="center-text">${user}</h5>
                <button class="b-a-persona" id="b-M${idBoton}-user-${dpi}">
                    <i class="bi bi-person-circle i-a-persona"> </i>
                </button>
            </div>`
            var idT = `b-M${idBoton}-user-${dpi}`
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
            if (this.tamano == 0) { this.ultimo = this.primero }
            return temp.info
        } else {
            return null
        }
    }
    add(info){
        this.insertarP(info)
    }
    remove(){
        
        if (this.primero != null) {
            const temp = new Nodo(this.ultimo.info);
            let aux=this.primero
            for(var x=1;x<this.tamano-1;x++){
                aux=aux.siguiente
            }
            aux.siguiente=null
            this.ultimo=aux
            this.tamano--
            if (this.tamano==0){
                this.ultimo=null
                this.primero=null
            }
            return temp.info
        }else{
            return null
        }
    }
    vacio(){
        if(this.primero==null) return true
        return false
    }
    tam(){
        return this.tamano
    }

}