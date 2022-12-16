import { NodoB } from "./Nodo.js";
import { ordenAlfa } from "../func/func.js";
import { listaSimple } from "./lSimple.js";
export class ABB {
    constructor() {
        this.raiz = null;
        this.id=1;
    }
    //metodo insertar
    insertar(info) {
        this.raiz = this.add(info, this.raiz);
    }
    //metodo insertar recursivo
    add(info, nodo) {
        if (nodo == null) {
            let nuevo = new NodoB(info);
            nuevo.id=this.id
            this.id++
            return nuevo
        } else {
            let aux = ordenAlfa(info.GetDatos()["name"], nodo.info.GetDatos()["name"])
            if (aux["stru"] > aux["strd"]) {
                nodo.derecha = this.add(info, nodo.derecha);
            } else {
                nodo.izquierda = this.add(info, nodo.izquierda);
            }
        }
        return nodo;
    }
    //preorden
    preorden() {
        this.pre_orden(this.raiz);
    }
    pre_orden(nodo) {
        if (nodo != null) {
            console.log("Valor:", nodo.info);
            this.pre_orden(nodo.izquierda);
            this.pre_orden(nodo.derecha);
        }
    }
    //inorden
    inorden() {
        this.in_orden(this.raiz);
    }
    in_orden(nodo) {
        if (nodo != null) {
            this.in_orden(nodo.izquierda);
            console.log("Valor:", nodo.info);
            this.in_orden(nodo.derecha);
        }
    }
    //postorden
    posorden() {
        this.pos_orden(this.raiz);
    }
    pos_orden(nodo) {
        if (nodo != null) {
            this.pos_orden(nodo.izquierda);
            this.pos_orden(nodo.derecha);
            console.log("Valor:", nodo.info);
        }
    }
    //
    graphviz(){
        let pilaNodo = new listaSimple()//
        let pilaUnion = new listaSimple()//
        function gNPre_orden(nodoAnt,nodo){
            if (nodo != null) {
                let nombre = nodo.info.GetDatos()["name"]
                let topic = nodo.info.GetDatos()["topic"]
                pilaNodo.push(`nodo_${nodo.id} [label="${nombre}\n${topic}"]\n`)
                if (nodoAnt != "") {//dif primer nodo
                    pilaUnion.push(`${nodoAnt}->nodo_${nodo.id}\n`)
                }
                //console.log("Valor:", nodo.info);
                gNPre_orden(`nodo_${nodo.id}`,nodo.izquierda);
                gNPre_orden(`nodo_${nodo.id}`,nodo.derecha);
                
            }
        }
        gNPre_orden("",this.raiz)
        let contNodo = ""//nodo_1[]
        let unionNodo = ""//nodo_1->nodo->2
        while (pilaNodo.vacio() != true) {
            contNodo = contNodo + pilaNodo.pop()
        }
        while (pilaUnion.vacio() != true) {
            unionNodo = unionNodo + pilaUnion.pop()
        }
        let contenido = contNodo + unionNodo
        let codigodot = `digraph {
            ${contenido}
        }`
        return codigodot
    }
    getHTML(){
        let elementoL = new listaSimple()//<>
        function gNIn_orden(nodo) {
            if (nodo != null) { 
                gNIn_orden(nodo.izquierda);
                let nombre = nodo.info.GetDatos()["name"]
                let topic = nodo.info.GetDatos()["topic"]
                let duracion = nodo.info.GetDatos()["duration"]
                var elementoT1 = `
                <div class="d-4-cancion">
                        <div class="d-cancion">
                            <button class="btn" disabled><i class="bi bi-file-play-fill"></i></button>
                            <h4 class="center-text music">PODCAST</h4>
                            <i class="bi bi-mic-fill i-headset"></i>
                            <i class="bi bi-caret-left-fill retroceso"></i>
                            <h6 class="duracion">${duracion}</h6>
                            <i class="bi bi-caret-right-fill adelantar"></i>
                            <h5 class="center-text nombre-cancion">${nombre}::${topic}</h5>
                        </div>
                    </div>
            `
                elementoL.insertarP(elementoT1)
                //console.log("Valor:", nodo.info);
                gNIn_orden(nodo.derecha);
            }
        }
        gNIn_orden(this.raiz)
        return {elemento:elementoL}
    }
}
