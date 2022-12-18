import { NodoLL } from './Nodo.js'
import { listaSimple } from './lSimple.js';
import { ordenAlfa } from '../func/func.js';
export class listaLista {
    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.countId=1;
        this.subCId=1;
        this.tamM=0;
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
        this.tamM++;
    }
    insertarPSub(buscar, info) {
        //<-zn;->zp
        //[aux]->[inicio]<->[]<->[final]
        let aux = this.primero;
        if (this.primero != null) {
            while (aux != null) {//BUSCO NODO
                if (aux.info.GetDatos()["name"] == buscar){
                    break
                }
                aux = aux.siguiente;
            }
            if (aux!=null) {//insertar sub-nodo
                if (aux.info.GetDatos()["name"] == buscar) {
                    const nuevo = new NodoLL(info);
                    nuevo.id = this.subCId
                    if (aux.zp == null) {
                        aux.zp = nuevo;
                    } else {
                        nuevo.zp = aux.zp;
                        aux.zp.zn = nuevo;
                        aux.zp = nuevo;
                    }
                    this.subCId++
                }
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
        let pilaUNodoS = new listaSimple()//sig->sig->
        let pilaRank = new listaSimple()//rank=same
        while (aux != null) {//abajo
            let nombre = aux.info.GetDatos()["name"]
            contNodo = contNodo + `nodo_${cont1} [${box} label="${nombre}"]\n`
            rank=rank+`;nodo_${cont1}`
            
            if (aux.zp != null) {
                unionNodoSig = unionNodoSig + `nodo_${cont1}->`//der
            }else{
                unionNodoSig = unionNodoSig + `nodo_${cont1}`//evitar errores
            }
            if(aux.zp!=null){//derecha
                let temp=aux.zp
                cont2=0
                while(temp!=null){
                    nombre = temp.info.GetDatos()["name"]
                    contNodo = contNodo + `nodo_${cont1}_${cont2} [${box} label="${nombre}"]\n`
                    rank = rank + `;nodo_${cont1}_${cont2}`
                    if(temp.zp!=null){
                        unionNodoSig = unionNodoSig + `nodo_${cont1}_${cont2}->`//der
                    }else{
                        unionNodoSig = unionNodoSig + `nodo_${cont1}_${cont2}`//der
                    }   
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
            if(aux.siguiente!=null){
                unionNodoAb = unionNodoAb + `nodo_${cont1}->`
            }else{//evitar errores
                unionNodoAb = unionNodoAb + `nodo_${cont1}`
            }
            
            aux=aux.siguiente
            cont1++
        }
        var union1=""
        while (pilaUNodoS.vacio()!=true){
            union1 = union1 + pilaUNodoS.pop()
        }
        while (pilaRank.vacio() != true) {
            union1 = union1 + pilaRank.pop()
        }
        let contenido=contNodo+union1+unionNodoAb
        let codigodot = `digraph {
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
                                <i class="addP">+</i>
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
        while (aux.id != id2) {
            aux=aux.zp
        }
        return aux.info
    }
    ordenAZ(){
        aux=this.primero
        aux2=null
        if(aux.sig!=null){
            aux2=this.primero.siguiente
        }
        while(aux!=null){
            while(aux2!=null){   
                let comparacion=ordenAlfa(
                    aux.info.GetDatos()["name"],
                    aux2.info.GetDatos()["name"]
                )
                if (comparacion["stru"] > comparacion["strd"]){
                    let temp = new NodoLL(aux.info)
                    aux.info=aux2.info
                    aux2.info=temp.info
                }
                aux2=aux2.siguiente
            }
            aux=aux.siguiente
        }
    }
    ordenZA(){//https://codigojava.online/ordenacion-quicksort/
        let GetNodo=(pos)=>{
            aux=this.primero
            for(var i=0;i<pos;i++){
                aux=aux.siguiente
            }
            return aux
        }
        let quickSort=(izq,der)=>{
            let pivote=new NodoLL(GetNodo(izq))
            let i=iz
            let j=der
            let aux=null;
            while(i<j){
                let comparacion = ordenAlfa(
                    GetNodo[i].info.GetDatos()["name"],
                    pivote.info.GetDatos()["name"]
                )
                while (comparacion ["strd"]<=comparacion["stru"] && i<j) i++;
                comparacion = ordenAlfa(
                    GetNodo[j].info.GetDatos()["name"],
                    pivote.info.GetDatos()["name"]
                )
                while (comparacion["stru"] > comparacion["strd"]) j--;
                if(i<j){
                    aux = new NodoLL(GetNodo(i))
                    GetNodo[i].info=GetNodo[j].info
                    GetNodo[j].info=aux.info;
                }
                GetNodo[izq].info=GetNodo[j].info;
                GetNodo[j].info=pivote.info
                if(izq<j-1){
                    quickSort(izq, j - 1)
                }if(j+1<der){
                    quickSort(j+1,der)  
                }
            }
        }
    }
}