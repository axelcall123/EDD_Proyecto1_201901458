/*NOTAS: e=event
*/

//DIV OCULTO DEFAULT
    //REGISTRO
const ocultoPageRegistro = document.getElementById('d-register');
ocultoPageRegistro.style.display = 'none';
    //MASTER
const ocultoPageMaster = document.getElementById('d-master');
ocultoPageMaster.style.display = 'none';
//FUNCIONES
import { hash } from './func/func.js'
import {funcAsync } from './func/func.js'
//CREAR ADMIN DEFAULT
import { Usuario } from './Clases/usuario.js'
//(dpi, name, username, password, phone, admin) GG;1
var usuario = new Usuario(
    "0", "Alex", "GG", hash("1"), "12345678", true
)
//VAR LET CONST OTRA
var addAdmin = true;
//LISTAS
import { listaSimple } from './Nodo_Listas/lSimple.js'
const lsUsuario=new listaSimple();
//BOTONES
    //FORMULARIO-LOGIN
const iUserL = document.getElementById('i_userL')
const iPassL = document.getElementById('i_passL')
const iCheckL = document.getElementById('l_checkbox')
const buttonLogin = document.getElementById('b_login')
buttonLogin.addEventListener('click',(e)=>{
    e.preventDefault()
    if(addAdmin==true){//crear default user
        lsUsuario.insertarP(usuario);
        addAdmin=false
    }
    if (lsUsuario.buscar(iUserL.value, hash(iPassL.value), iCheckL.checked)){//COINCIDENCIA
        if (iCheckL.checked){//si es admin pagina master
            //ocultar,mostrar
            ocultoPageLogin.style.display = "none";
            ocultoPageMaster.style.display = "block";
        }else{
            
        } 
    } else {//contram,user,admin esta mal
        //agregar html
        document.getElementById('span_menu').insertAdjacentHTML('beforeend', '<p id="ispan_menu"> la contraseña o usuario esta mal, o talvez no es administrador <p>')
        console.log("inicio")
        funcAsync(3000);//3s
        document.getElementById('ispan_menu').remove()
        console.log("final")
    }
    /*const data={
        user:userName.value,
        paass:passWord.value
        
    }*/
})
    //IDEX-REGISTRO
const buttonIndexRegistro = document.getElementById('b_registroL')//OCULTAR,MOSTRAR{LOGIN,REGISTRO}
const ocultoPageLogin = document.getElementById('d-login');
buttonIndexRegistro.addEventListener('click',(e)=>{
    e.preventDefault()
    //debugger;
    //ocultar,mostrar
    ocultoPageLogin.style.display = "none";
    ocultoPageRegistro.style.display="block";

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

    //MASTER
        //USUARIOS
const btnMFUser = document.getElementById('bfM_user')
            //LEER INPUT
let input = document.createElement('input');
input.type = 'file';
//let files = Array.from(input.files);

btnMFUser.addEventListener('click', (e) => {
    input.click();
    input.remove();
})
input.addEventListener('change',function(){//cambia (e)=> a funciont()
    //only input
    /*const fileList = e.target.files;
    console.log(fileList,"->",typeof(fileList));*/
    var fr = new FileReader();
    fr.onload = function () {
        /*document.getElementById('output').textContent = */
        console.log("txt->",fr.result,"->",typeof(fr.result));
        return fr.result
    }
    //se se necesita fr.read...
    fr.readAsText(this.files[0])
    console.log(fr.onload);
})
        //ARTISTAS
        //CANCIONES
        //PODCAST
        //MUSICAP

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