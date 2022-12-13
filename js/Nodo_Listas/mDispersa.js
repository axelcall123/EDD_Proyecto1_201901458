import { nodoMD } from './nodoMD.js'
export class matrizDispersa{
    constructor() {
        //dia(x),mes(y),info
        this.raiz=new nodoMD(0,0,Raiz);
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
        while(aux!=null){
            if(aux.dia==x){
                return { nodo: aux, posicion: '=' }
            } else if (x < aux.dia){
                return { nodo: aux, posicion: '-' }
            }
            aux=aux.siguiente
        }
        return { nodo: aux, posicion: '+' }
    }
    buscarY(y,aux){
        while(aux!=null){
            if(aux.mes==y){
                return {nodo:aux,simbolo:'='}
            }else if(y<aux.mes){
                return { nodo: aux, simbolo: '-' }
            }
            aux=aux.abajo
        }
        return { nodo: aux, simbolo: '+' }
    }
    crearX(x){
        return new nodoMD(x,0,1);
    }
    crearY(y){
        return new nodoMD(0, y, getMonthName(y))
    }
    insertarX(auxX,nuevoX,simbolo,nuevo){
        if(simbolo=="+"){
            //eje x
            auxX.siguiente=nuevoX
            nuevoX.anterior=auxX
            if (nuevo != null) {
                //insertando nuevo
                auxX.abajo = nuevo
                nuevo.arriba = auxX
            }
        }else if(simbolo=="-"){
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
                auxY.siguiente = nuevo
                nuevo.anterior = auxY
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
        var auxY = this.buscaY(mes, this.raiz)
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
        if(auxX["posicion"]!="=" && auxY["posicion"]!="="){
            this.insertarX(auxX["nodo"], this.crearX(x), auxX["posicion"], nuevo)//auxXY,nuevoXY,simbolo,nuevo
            this.insertarY(auxY["nodo"], this.crearY(y), auxY["posicion"],nuevo)
        }
        //#2e dia, no e mes
        else if (auxX["posicion"]=="=" && auxY["posicion"] != "="){
            this.insertarY(auxY["nodo"], this.crearY(y), auxY["posicion"], nuevo)//auxXY,nuevoXY,simbolo,nuevo
            auxY = this.buscarY(y, auxX["nodo"])//xy,aux change nodoX
            this.insertarY(auxY["nodo"],nuevo,auxY[1],null);//null para evitar errores
        }
        //#3no e dia,e mes
        else if (auxX["posicion"] != "=" && auxY["posicion"] == "="){
            this.insertarX(auxX["nodo"], this.crearX(x), auxX["posicion"], nuevo)//auxXY,nuevoXY,simbolo,nuevo
            auxX = this.buscarX(x, nodoY[0])//xy,aux
            this.insertarX(auxX["nodo"], nuevo, auxX[1], null);//null para evitar errores
        }
        //#4 e dia, e mes
        else if (auxX["posicion"] == "=" && auxY["posicion"] == "=") {
            auxY = this.buscarY(y, auxX["nodo"])//xy,aux change nodoX
            auxY["nodo"]=info
        }
    }
}