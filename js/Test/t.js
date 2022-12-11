const btn = document.getElementById('add')
let cont=1;
btn.addEventListener('click', (e) => {
    document.getElementById('d-add').insertAdjacentHTML('beforeend', `<button id="btn-${cont}">${cont}</button>`)
    let btnTemp = document.getElementById(`btn-${cont}`)
    btnTemp.addEventListener('click',(e)=>{
        console.log(`soy boton ${e.target.id}`);
    })
    //console.log(`${cont}+hola`,typeof(add))
    cont++;
})