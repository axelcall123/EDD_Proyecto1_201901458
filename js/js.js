//DIV OCULTO DEFAULT
const ocultoPRegistro = document.getElementById('d-register');
ocultoPRegistro.style.display = 'none';
//FUNCIONES
import { hash } from './func/func.js'
//CREAR ADMIN DEFAULT
//usuarioC(dpi, name, username, password, phone, admin)
import { Usuario } from './Clases/usuario.js'
let usuario = new Usuario(
    "0", "Alex", "GG", hash("1"), "12345678", true
)
//LISTAS
import { listaSimple } from './Nodo_Listas/lSimple.js'
const lsUsuario=new listaSimple();
//BOTONES
    //FORMULARIO-LOGIN
const iUserL = document.getElementById('i_userL')
const iPassL = document.getElementById('i_passL')
const buttonLogin = document.getElementById('b_login')
const iCheckL = document.getElementById('l_checkbox')
let addAdmin=true;
buttonLogin.addEventListener('click',(e)=>{
    e.preventDefault()
    //console.log(iCheckL.checked);
    if(addAdmin==true){//CREAR DEFAULT USER
        lsUsuario.insertarP(usuario);
        addAdmin=false
    }
    if (lsUsuario.buscar(iUserL, iPassL)){//COINCIDENCIA
        if("A"=="A") true//SI ES ADMIN
    }else{
    }
    /*const data={
        user:userName.value,
        paass:passWord.value
        
    }*/
})
    //INGRESAR-REGISTRO
const buttonIndexRegistro = document.getElementById('b_registroL')//OCULTAR,MOSTRAR{LOGIN,REGISTRO}
const ocultoPLogin = document.getElementById('d-login');
buttonIndexRegistro.addEventListener('click',(e)=>{
    e.preventDefault()
    //debugger;
    ocultoPLogin.style.display = "none";
    ocultoPRegistro.style.display="block";

    if (addAdmin == true) {//CREAR DEFAULT USER
        lsUsuario.insertarP(usuario);
        addAdmin = false
    }
})
    //REGISTRARSE
const iUserR = document.getElementById('i_userR');
const iNameR = document.getElementById('i_nombreR');
const iDpiR = document.getElementById('i_dpiR');
const iPhoneR = document.getElementById('i_telR');
const iPassR = document.getElementById('i_passR');
const buttonRegistrarse = document.getElementById('b_registroR')


buttonRegistrarse.addEventListener('click', (e) => {
    e.preventDefault()
    //usuarioC(dpi, name, username, password, phone, admin)
    let regUsuario = new Usuario(parseInt(iDpiR.value), iNameR.value, iUserR.value, hash(iPassR.value), parseInt(iPhoneR.value),false);
    //debugger;
    lsUsuario.insertarU(regUsuario);
})
/*
    let x = document.getElementById("hide");
    //debugger;
    console.log(data,veces);
    // MOSTRAR Y OCULTAR
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    //veces=veces+1;
*/