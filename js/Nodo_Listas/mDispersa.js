import { nodoMD } from './Nodo.js'
import { listaSimple } from './lSimple.js';
export class matrizDispersa{
    constructor() {
        //dia(x),mes(y),info
        this.raiz=new nodoMD(0,0,"Raiz");
        this.months = {
            1:"january",
            2:"february",
            3:"march",
            4:"april",
            5:"may",
            6:"june",
            7:"july",
            8:"august",
            9:"september",
            10:"october",
            11:"november",
            12:"december"
        }
    }
    
    /*
    [H]<->[]<->[] dias(x)
    ↓↑         ↓↑
    []<   -   >[]
    ↓↑
    []
    meses(y)
    */
    buscarX(x,aux){
        while(aux.siguiente!=null){
            if (aux.dia == x) {
                return { nodo: aux, posicion: '=' }
            }
            else if (x < aux.dia){
                return { nodo: aux, posicion: '-' }
            }
            aux=aux.siguiente
        }
        if (aux.dia == x) {
            return { nodo: aux, posicion: '=' }
        }
        else if (x < aux.dia) {
            return { nodo: aux, posicion: '-' }
        }
        return { nodo: aux, posicion: '+' }
    }
    buscarY(y,aux){
        while(aux.abajo!=null){
            if (aux.mes == y) {
                return { nodo: aux, posicion: '=' }//[]-"[nodo]"-[]
            }
            else if(y<aux.mes){
                return { nodo: aux, posicion: '-' }//[nodo]-""-[]
            }
            aux=aux.abajo
        }
        if (aux.mes == y) {
            return { nodo: aux, posicion: '=' }
        }
        else if (y < aux.mes) {
            return { nodo: aux, posicion: '-' }
        }
        return { nodo: aux, posicion: '+' }//[nodo]-""
    }
    crearX(x){
        return new nodoMD(x,0,x);
    }
    crearY(y){
        return new nodoMD(0, y, this.months[y])
    }
    insertarX(auxX,nuevoX,simbolo,nuevo){
        if(simbolo=="+"){//llego final
            //eje x
            auxX.siguiente=nuevoX
            nuevoX.anterior=auxX
            if (nuevo != null) {
                //insertando nuevo
                nuevoX.abajo = nuevo
                nuevo.arriba = nuevoX
            }
        }else if(simbolo=="-"){//en medio de 2 nodos
            //eje x
            nuevoX.anterior=auxX.anterior
            nuevoX.siguiente=auxX
            auxX.anterior=nuevoX
            nuevoX.anterior.siguiente=nuevoX
            if (nuevo != null) {
                //insertando nuevo
                nuevoX.abajo = nuevo
                nuevo.arriba = nuevoX
            }
        }
    }
    insertarY(auxY,nuevoY,simbolo,nuevo){
        if (simbolo == "+") {
            //eje y
            auxY.abajo=nuevoY
            nuevoY.arriba=auxY
            if(nuevo!=null){
                //insertando nuevo
                nuevoY.siguiente = nuevo
                nuevo.anterior = nuevoY
            }
        } else if (simbolo == "-") {
            //eje y
            nuevoY.arriba = auxY.arriba
            nuevoY.abajo = auxY
            auxY.arriba = nuevoY
            nuevoY.arriba.abajo = nuevoY
            if (nuevo != null) {
                //insertando nuevo
                nuevoY.siguiente = nuevo
                nuevo.anterior = nuevoY
            }
        }
    }
    insertarNodo(dia,mes,info){
        const nuevo=new nodoMD(dia,mes,info)
        var auxX = this.buscarX(dia, this.raiz)
        var auxY = this.buscarY(mes, this.raiz)
        //↑y(arr,abaj)
        //->x(sig,ant)
        //[ ][4][ ] [6]
        //[ ][ ][5] [6] [7]
        //      rt6;rt6;rt6
        //      5>6;6=6;null
        //       - ; = ; +
        //      n e; e ;n e
        //      aux=ultimo piscion se quedo,nuevo crear nuevo nodo
        //e=existe
        //dia(x),mes(y)
        //creo nuevo(x|y)->inserto(x|y)
        //{nodo,simbolo}
        //#1 no e dia,no e mes
        //busarXY busca el nodo::[dia,0]->[dia,mes,nodo]
        if(auxX["posicion"]!="=" && auxY["posicion"]!="="){
            this.insertarX(auxX["nodo"], this.crearX(dia), auxX["posicion"], nuevo)//auxXY,nuevoXY,simbolo,nuevo
            this.insertarY(auxY["nodo"], this.crearY(mes), auxY["posicion"],nuevo)
        }
        //#2e dia, no e mes
        else if (auxX["posicion"]=="=" && auxY["posicion"] != "="){
            this.insertarY(auxY["nodo"], this.crearY(mes), auxY["posicion"], nuevo)//auxXY,nuevoXY,simbolo,nuevo
            auxY = this.buscarY(mes, auxX["nodo"])//xy,aux change nodoX
            this.insertarY(auxY["nodo"],nuevo,auxY["posicion"],null);//null para evitar errores, ya existe entonces(null)
        }
        //#3no e dia,e mes
        else if (auxX["posicion"] != "=" && auxY["posicion"] == "="){
            this.insertarX(auxX["nodo"], this.crearX(dia), auxX["posicion"], nuevo)//auxXY,nuevoXY,simbolo,nuevo
            auxX = this.buscarX(dia, auxY["nodo"])//xy,aux
            this.insertarX(auxX["nodo"], nuevo, auxX["posicion"], null);//null para evitar errores, ya existe entonces(null)
        }
        //#4 e dia, e mes
        else if (auxX["posicion"] == "=" && auxY["posicion"] == "=") {
            let auxYT = this.buscarY(mes, auxX["nodo"])//xy,aux change nodoX
            let auxXT = this.buscarX(dia, auxY["nodo"])//xy,aux change nodoX
            
            this.insertarY(auxYT["nodo"], nuevo, auxYT["posicion"], null);//null para evitar errores, ya existe entonces(null)
            this.insertarX(auxXT["nodo"], nuevo, auxXT["posicion"], null);//null para evitar errores, ya existe entonces(null)
            /*auxY["nodo"]=info*/
        }
    }
    graphviz(){

        let contNodo = ""//nodo_1[]
        let unionNodo = ""//nodo_1->nodo->2
        let rank = "{rank=same"//{rank=same;nodo_1;nodo_2}
        let box = "shape=box"
        let pFila=true;//primera fila, no bug
        let pilaUNodo = new listaSimple()//sig->sig->
        let pilaRank = new listaSimple()//rank=same

        let aux=this.raiz
        ///RECORRIDO[]->[]->[] siguietnes
        while(aux!=null){//abajos   
            contNodo = contNodo + `nodo_${aux.dia}_${aux.mes} [${box} label="${aux.info}"]\n`
            rank = rank + `;nodo_${aux.dia}_${aux.mes}`
            if (aux.siguiente != null) {
                unionNodo = unionNodo + `nodo_${aux.dia}_${aux.mes}->`//siguiente
            } else {
                unionNodo = unionNodo + `nodo_${aux.dia}_${aux.mes}`//evitar errores
            }
            if(aux.siguiente!=null){
                let temp=aux.siguiente
                while (temp!=null) {//siguientes
                    //primera opcion
                        
                    
                    if (pFila == true) {//no error de primera fila, primera columna
                        contNodo = contNodo + `nodo_${temp.dia}_${temp.mes} [${box} label="${temp.dia}"]\n`
                    }
                    else{  
                        let song = temp.info.GetDatos()["song"]
                        let artist=temp.info.GetDatos()["artist"]
                        contNodo = contNodo + `nodo_${temp.dia}_${temp.mes} [${box} label="${song}\n${artist}"]\n`
                    }
                    rank = rank + `;nodo_${temp.dia}_${temp.mes}`
                    if (temp.siguiente != null) {
                        unionNodo = unionNodo + `nodo_${temp.dia}_${temp.mes}->`//der
                    } else {
                        unionNodo = unionNodo + `nodo_${temp.dia}_${temp.mes}`//der
                    }
                    temp=temp.siguiente
                }
            }
            rank = rank + "}"
            pilaUNodo.push(unionNodo + "\n")
            pilaRank.push(rank + "\n")
            aux=aux.abajo
            pFila=false

            //default
            rank = "{rank=same"
            unionNodo = ""
        }
        ///RECORRIDO abajos
        unionNodo = ""
        aux = this.raiz
        while (aux != null) {//siguiente  
            if (aux.abajo != null) {
                unionNodo = unionNodo + `nodo_${aux.dia}_${aux.mes}->`//abajo
            } else {
                unionNodo = unionNodo + `nodo_${aux.dia}_${aux.mes}`//evitar errores
            }
            if (aux.abajo != null) {
                let temp = aux.abajo
                while (temp != null) {//abajo
                    if (temp.abajo != null) {
                        unionNodo = unionNodo + `nodo_${temp.dia}_${temp.mes}->`//abajo
                    } else {
                        unionNodo = unionNodo + `nodo_${temp.dia}_${temp.mes}`//abajo
                    }
                    temp = temp.abajo
                }
            }
            pilaUNodo.push(unionNodo + "\n")
            aux = aux.siguiente
            unionNodo = ""
        }
        var union1 = ""
        while (pilaRank.vacio() != true) {
            union1 = union1 + pilaRank.pop()
        }
        while (pilaUNodo.vacio() != true) {
            union1 = union1 + pilaUNodo.pop()
        }
        let contenido = contNodo + union1
        let codigodot = `digraph {
            ${contenido}
        }`
        return codigodot
    }
    getHTML(){
        let aux = this.raiz.abajo
        let elementoL = new listaSimple()//<>
        while (aux != null) {//abajos
            
            if (aux.siguiente != null) {//abajo
                let temp = aux.siguiente
                if(temp!=null){//siguiente->siguiente
                    while (temp != null) {
                        let song=temp.info.GetDatos()["song"]
                        let artist=temp.info.GetDatos()["artist"]
                        var elementoT=`
                        <div class="d-4-cancion">
                        <div class="d-cancion">
                            <button class="btn"><i class="bi bi-plus addP"></i></button>
                            <h4 class="center-text music">MUSICA</h4>
                            <i class="bi bi-headset i-headset"></i>
                            <i class="bi bi-caret-left-fill retroceso"></i>
                            <h6 class="duracion">${artist}</h6>
                            <i class="bi bi-caret-right-fill adelantar"></i>
                            <h5 class="center-text nombre-cancion">${song}</h5>
                        </div>
                    </div>`
                        elementoL.push(elementoT)
                        temp=temp.siguiente
                    }
                }
                
            }
            aux=aux.abajo
        }
        return {elemento:elementoL}
    }
    buscarXY(dia,mes){
        var temp=this.buscarX(dia,this.raiz)//busca->[]->[]
        temp = this.buscarY(mes, temp["nodo"])//NODO
        let song = temp["nodo"].info.GetDatos()["song"]
        let artist = temp["nodo"].info.GetDatos()["artist"]
        var elementoT = `
        <div class="d-4-cancion">
        <div class="d-cancion">
            <button class="btn"><i class="bi bi-plus addP"></i></button>
            <h4 class="center-text music">MUSICA</h4>
            <i class="bi bi-headset i-headset"></i>
            <i class="bi bi-caret-left-fill retroceso"></i>
            <h6 class="duracion">${artist}</h6>
            <i class="bi bi-caret-right-fill adelantar"></i>
            <h5 class="center-text nombre-cancion">${song}</h5>
        </div>
    </div>`
        return elementoT
    }
}