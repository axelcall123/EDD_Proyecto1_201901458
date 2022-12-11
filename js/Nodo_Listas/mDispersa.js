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
                return {nodo:aux,posicion:'='}
            }else if(y<aux.mes){
                return { nodo: aux, posicion: '-' }
            }
            aux=aux.abajo
        }
        return { nodo: aux, posicion: '+' }
    }
    crearX(x){
        return new nodoMD(x,0,1);
    }
    crearY(y){
        return new nodoMD(0, y, getMonthName(y))
    }
    insertarX(auxX,){
        
    }
    insertarY(auxY,){

    }
    insertarNodo(dia,mes,info){
        const nuevo=new nodoMD(dia,mes,info)
        var auxX = this.buscarX(dia, this.raiz)
        var auxY = this.buscaY(mes, this.raiz)
        //e=existe
        //#1 no e dia,no e mes
        if(auxX[1]=="+" && auxY[1]=="+"){
            this.insertarX(this.crearX(x))
            this.insertarX(this.crearY(y))

        }
        //#2e dia, no e mes
        //#3no e dia,e mes
        //#4 e dia, e mes
    }
}