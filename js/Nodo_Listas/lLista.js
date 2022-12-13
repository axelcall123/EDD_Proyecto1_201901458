import { NodoLL } from './Nodo.js'
import { listaSimple } from './lSimple.js';
export class listaLista {
    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.countId=1;
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
                if (aux.zp == null) {
                    aux.zp = nuevo;
                } else {
                    nuevo.zp = aux.zp;
                    aux.zp.zn =nuevo;
                    aux.zp=nuevo;
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
}