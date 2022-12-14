const btn = document.getElementById('add')
import { t } from "./ft.js";
import { listaSimple } from "../Nodo_Listas/lSimple.js";
btn.addEventListener('click', (e) => {
    let simple=new listaSimple();
    simple.add(0)
    simple.add(1)
    simple.add(2)
    simple.add(3)
    simple.add(4)

    simple.remove()
    simple.remove()
    simple.remove()
    simple.remove()
    simple.remove()
    /*let listaAux = t(10);

    const padre = document.getElementById("d-add")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }

    while (listaAux.vacio()!=true){
        let cont=listaAux.pop()
        document.getElementById('d-add').insertAdjacentHTML('beforeend', `<button id="btn-${cont}">${cont}</button>`)
        let btnTemp = document.getElementById(`btn-${cont}`)
        btnTemp.addEventListener('click', (e) => {
            console.log(`soy boton ${e.target.id}`);
        })
        //console.log(`${cont}+hola`,typeof(add))
        //cont++;
    }

    let codigodot ="digraph {a -> b->c->d->e}"

    d3.select("#lienzo")
    .graphviz()
    .width(900)
    .height(500)
    .renderDot(codigodot)
    console.log("hola")*/
})
