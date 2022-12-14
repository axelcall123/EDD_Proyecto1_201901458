import { NodoLL } from './Nodo.js'
import { listaSimple } from './lSimple.js';
export class listaLista {
    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.countId=1;
        this.subCId=1;
    }
    insertarUMain(info) {
        /*[primero]
          ant↑↓sig
             []
          ant↑↓sig
          [ultimo]*/
        const nuevo = new NodoLL(info);
        nuevo.id=this.countId;
        if (this.primero == null) {
            this.primero = nuevo;
            this.ultimo = nuevo;
            this.primero.id=1;
        } else {
            this.ultimo.siguiente = nuevo;
            nuevo.anterior = this.ultimo;
            this.ultimo=nuevo;
            
        }
        this.countId++;
    }
    insertarPSub(buscar, info) {
        //<-zn;->zp
        //[aux]->[inicio]<->[]<->[final]
        let aux = this.primero;
        if (this.primero != null) {
            while (aux.info.GetDatos()["name"] != buscar && aux != null) {//BUSCO NODO
                aux = aux.siguiente;
            }
            if (aux!=null) {//insertar sub-nodo
                const nuevo = new NodoLL(info);
                nuevo.id = this.subCId
                if (aux.zp == null) {
                    aux.zp = nuevo;
                } else {
                    nuevo.zp = aux.zp;
                    aux.zp.zn =nuevo;
                    aux.zp=nuevo;
                }
                this.subCId++
            }//else{CREA EL NODO} por que ya fueron crados los nodos
        }
    }
    graphviz() {
        let aux=this.primero
        let box = "shape=box"

        let contNodo = ""//nodo_1[]
        let unionNodoSig = ""//nodo_1->nodo->2
        let unionNodoAb=""
        let rank="{rank=same"//{rank=same;nodo_1;nodo_2}
        let cont1 = 0
        let cont2=0
        let pilaUNodoS = new listaSimple()
        let pilaRank = new listaSimple()
        while (aux != null) {//abajo
            let nombre = aux.info.GetDatos()["name"]
            contNodo = contNodo + `nodo_${cont1} [${box} label="${nombre}"]\n`
            rank=rank+`;nodo_${cont1}`
            
            
            unionNodoSig = unionNodoSig + `nodo_${cont}->`//der
            if(aux.zp!=null){//derecha
                temp=aux.zp
                cont2=0
                while(temp!=null){
                    nombre = temp.info.GetDatos()["name"]
                    contNodo = contNodo + `nodo_${cont1}_${cont2} [${box} label="${nombre}"]\n`
                    rank = rank + `;nodo_${cont1}_${cont2}`
                    unionNodoSig = unionNodoSig + `nodo_${cont1}_${cont2}->`//der

                    temp=temp.zp
                    cont2++
                }
            }
            rank = rank + "}"
            pilaUNodoS.push(unionNodoSig+"\n")
            pilaRank.push(rank+"\n")
            
            //default
            rank = "{rank=same"
            unionNodoSig = ""

            unionNodoAb = unionNodoAb + `nodo_${cont}->`
            aux=aux.siguiente
            cont1++
        }
        var union1=""
        while (pilaUNodo.vacio()!=true){
            union1 = union1 + pilaUNodo.pop()
        }
        while (pilaRank.vacio() != true) {
            union1 = union1 + pilaRank.pop()
        }
        contenido=contNodo+union1+unionNodoAb
        let codigodot = `digraph {
            rankdir=LR
            ${contenido}
        }`
        return codigodot
    }
    getHTML() {
        //artista
        let elementoL = new listaSimple()//<>
        let elmentoOcultar=new listaSimple()
        let idL = new listaSimple()//id
        let aux = this.primero
        
        while (aux != null) {//abajo
            //id musica
            let idMus = new listaSimple()//id
            //musica
            let elementoMus = new listaSimple()//<>
            
            var nombre1 = aux.info.GetDatos()["name"]
            var elementoT1=`
                <div class="d-artista-persona">
                    <h5 class="center-text">${nombre1}</h5>
                    <button class="b-a-persona" id="b-MArt-art-${aux.id}">
                        <i class="bi bi-person-circle i-a-persona"></i>
                    </button>
                </div>
            `
            var elmentoTOcultar=`
                <div class="row" id="d-MArt-art-${aux.id}">
                </div>
            `
            elmentoOcultar.insertarP(elmentoTOcultar)
            var id1T = `b-MArt-art-${aux.id}`//se puede reutilzar con replace
            
            if (aux.zp != null) {//derecha
                let temp = aux.zp
                while (temp != null) {
                    var nombre2 = temp.info.GetDatos()["name"]
                    var duracion = temp.info.GetDatos()["duration"]
                    var elementoT2 = `
                        <div class="d-4-cancion">
                        <div class="d-cancion">
                            <button class="btn" id="b-MArt-mus-${aux.id}-${temp.id}">
                                <i class="bi bi-plus addP"></i>
                            </button>
                            <h4 class="center-text music">MUSICA</h4>
                            <i class="bi bi-headset i-headset"></i>
                                <i class="bi bi-caret-left-fill retroceso"></i>
                                <h6 class="duracion">${duracion}</h6>
                                <i class="bi bi-caret-right-fill adelantar"></i>
                            <h5 class="center-text nombre-cancion" >${nombre2}</h5>
                        </div>
                    </div>
                    `
                    var id2T = `b-MArt-mus-${aux.id}-${temp.id}`
                    elementoMus.insertarP(elementoT2)
                    idMus.insertarP(id2T)
                    temp = temp.zp
                }
            }
            idL.insertarP({ idp: id1T, ids: idMus })
            elementoL.insertarP({ ep: elementoT1, es: elementoMus })
            aux = aux.siguiente
        }
        return {
            elemento: elementoL, 
            id: idL,//se puede reutilizar
            eOc: elmentoOcultar
        }
    }
    buscarIDS(id1,id2){//imposible null
        let aux = this.primero

        while (aux.id != id1) {//abajo
            aux=aux.siguiente
        }
        aux = aux.zp
        while (aux != id2) {
            aux=aux.zp
        }
        return aux
    }
}