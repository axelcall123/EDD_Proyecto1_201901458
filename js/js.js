//DIV OCULTO DEFAULT
const ocultoPRegistro = document.getElementById('d-register');
ocultoPRegistro.style.display = 'none';
//FUNCIONES
import { hash } from './func/func.js'
//CREAR ADMIN DEFAULT
//usuarioC(dpi, name, username, password, phone, admin)
import { Usuario } from './Clases/usuario.js'
let usuario = new Usuario(
    "0", "Alex", "GG", hash("1"), "502", true
)
//LISTAS
import { listaSimple } from './Nodo_Listas/lSimple.js'
const ls=new listaSimple();
//BOTONES
    //FORMULARIO-LOGIN
const iUserName = document.getElementById('i_userL')
const iPassWord = document.getElementById('i_passL')
const buttonLogin = document.getElementById('b_login')
let addAdmin=true;
buttonLogin.addEventListener('click',(e)=>{
    e.preventDefault()
    
    if(addAdmin==true){//DEFAULT USER
        ls.insertarP(usuario);
        addAdmin=false
    }
    if (ls.buscar(iUserName, iPassWord)){//COINCIDENCIA
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
})
    //REGISTRARSE

const iUser = document.getElementById('i_userR');
const iName = document.getElementById('i_nombreR');
const iDpi = document.getElementById('i_dpiR');
const iPhone = document.getElementById('i_telR');
const iPass = document.getElementById('i_passR');
const buttonRegistrarse = document.getElementById('b_registroR')

buttonRegistrarse.addEventListener('click', (e) => {
    e.preventDefault()
    //debugger;
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