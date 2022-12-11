console.log("holis");

/*const per=require("./clase")
const P1=new per("axel",22,1.72)
const P2 = new per("Diego", 15, 1.72)
//const aa= new persona("Axel",22,1.72);
console.log(P1.datos());
console.log(P1.datos()["nombre"]," <-nombre es");


if (P1.datos()["nombres"]!=undefined){
    console.log("SIII")
}else{
    console.log("NOOO")
}
for (var key in P1.datos()) {
    console.log(key);
    console.log(P1.datos()[key]);
}*/

/*const pila = require("./pilaT");
const PilaI= new pila(null);
PilaI.insertar("a");
PilaI.mirar();*/

//LISTA SIMPLE
/*const ls=require("./listaSimple");
const listaS=new ls();
listaS.insertarP(P1);
listaS.insertarP(P2);*/

/*listaS.insertarP(0);
listaS.insertarP(1);
listaS.insertarP(2);
listaS.insertarP(3);
listaS.insertarU(10);
listaS.insertarU(20);
listaS.insertarU(30);*/

//LISTA DOBLE CIRCULA
/*const lde = require("./listaDobleEnlazada");
const circular = new lde();
circular.insertar("a");
circular.insertar("b");
circular.insertar("c");
circular.insertar("d");
circular.insertar("e");*/

//LISTA LISTA
import { listaLista } from"./listaLista";

listaLista.insertarUMain("A1");
listaLista.insertarUMain("A2");
listaLista.insertarUMain("A3");
listaLista.insertarUMain("A4");
listaLista.insertarUMain("A5");
listaLista.insertarUMain("A6");

listaLista.insertarPSub("A5","1A5");
listaLista.insertarPSub("A5", "2A5");
listaLista.insertarPSub("A5", "3A5");

listaLista.insertarPSub("A3", "1A3");
listaLista.insertarPSub("A3", "2A3");
listaLista.insertarPSub("A3", "3A3");