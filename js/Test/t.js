const btn = document.getElementById('add')
import { t } from "./ft.js";

btn.addEventListener('click', (e) => {
    //let cont = 0;
    let listaAux = t(10);

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
    console.log("hola")
})
