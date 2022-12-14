import { listaSimple } from "../Nodo_Listas/lSimple.js";

export function t(cont){
    let listaAux = new listaSimple();
    for(var i=0;i<cont;i++){
        listaAux.push(i)
    }
    return listaAux
}