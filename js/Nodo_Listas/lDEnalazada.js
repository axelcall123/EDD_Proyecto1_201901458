import { NodoD } from './Nodo.js'
export class ldEnlazada {
    constructor() {
        this.lc = null;
    }
    insertar(info) {
        const nuevo = new NodoD(info);
        nuevo.setA(nuevo);
        nuevo.setS(nuevo);
        if (this.lc != null) {
            this.lc.siguiente.anterior = nuevo;
            nuevo.siguiente = this.lc.siguiente;
            this.lc.siguiente = nuevo;
            nuevo.anterior = this.lc;
        }
        this.lc = nuevo;
    }
    
    move(nodo,SA){//muevo siguiente anterior
        let sig=null
        let ant=null
        
        if(SA=="->"){
            sig = (nodoA) => { return nodoA.siguiente }
            return sig(nodo)
        }else if(SA=="<-"){
            ant = (nodoA) => { return nodoA.anterior }
            return ant(nodo)
        }else if(SA=="="){
            return nodo
        }
    }
    getHtml(nodo, SA) {//tengo html imp
        if(nodo==null){//por si es la primera vez
            nodo=this.lc
        }
        let Nodo=this.move( nodo,SA)
        var nombre = Nodo.info.GetDatos()["name"]
        var duracion = Nodo.info.GetDatos()["duration"]
        let btnHtml = `
        <div class="d-4-cancion">
        <div class="d-cancion">
            <button class="btn" disabled><i class="bi bi-file-play-fill"></i></button>
            <h4 class="center-text music">PLAYLIST</h4>
            <i class="bi bi-headset i-headset"></i>
            <i class="bi bi-caret-left-fill retroceso"></i>
            <h6 class="duracion">${duracion}</h6>
            <i class="bi bi-caret-right-fill adelantar"></i>
            <h5 class="center-text nombre-cancion">${nombre}</h5>
        </div>
    </div>
    `
    return {html:btnHtml,nodo:Nodo}
    }
}