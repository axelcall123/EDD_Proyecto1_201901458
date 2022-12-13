/*NOTAS: e=event*/
//DIV OCULTO DEFAULT
    //REGISTRO
const ocultoPageRegistro = document.getElementById('d-register');
ocultoPageRegistro.style.display = 'none';
    //MASTER
const ocultoPageMaster = document.getElementById('d-master');
ocultoPageMaster.style.display = 'none';
    //CARGA MASIVA CANCIONES OCULTO
const btnMFSong = document.getElementById('bfM_song');
btnMFSong.style.display = 'none';
    //NAV
const ocultoNav = document.getElementById('nav');
ocultoNav.style.display = 'none';
    //PAGINA PRINCIPAL
const ocultoPageMain = document.getElementById('d-main-page');
ocultoPageMain.style.display = 'none';
//FUNCIONES
import { hash } from './func/func.js'
import {funcAsync } from './func/func.js'
//CLASES
    //CREAR ADMIN DEFAULT dpi, name, username, password, phone, admin) GG;1
import { Usuario } from './Clases/usuario.js'
    //ARTISTA
import { Artista } from './Clases/artista.js'
    //CANCION
import { Cancion } from './Clases/cancion.js';
var usuario = new Usuario(
    "0", "Alex", "GG", hash("1"), "12345678", true
)
//VAR LET CONST
var addAdmin = true;
//LISTAS
import { listaSimple } from './Nodo_Listas/lSimple.js'
const lsUsuario=new listaSimple();
import { listaLista } from './Nodo_Listas/lLista.js'
const llArtista=new listaLista();
//BOTONES
   //FORMULARIO-LOGIN
const iUserL = document.getElementById('i_userL')
const iPassL = document.getElementById('i_passL')
const iCheckL = document.getElementById('l_checkbox')
const btnLogin = document.getElementById('b_login')
btnLogin.addEventListener('click',(e)=>{
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
        }else{//no admin main page
            ocultoPageLogin.style.display = "none";
            ocultoNav.style.display = 'block';
        }
    } else {//contram,user,admin esta mal
        //agregar html
        document.getElementById('span_menu').insertAdjacentHTML('beforeend', '<p id="ispan_menu"> la contraseña o usuario esta mal, o talvez no es administrador <p>')
        //console.log("inicio")
        //funcAsync(3000);//3s
        document.getElementById('ispan_menu').remove()
        //console.log("final")
    }
    // const data={
    //     user:userName.value,
    //     paass:passWord.value
    // }
})
    //REGISTRARSE
        //INDEX-REGISTRO
const btnIndexRegistro = document.getElementById('b_registroL')//OCULTAR,MOSTRAR{LOGIN,REGISTRO}
const ocultoPageLogin = document.getElementById('d-login');
btnIndexRegistro.addEventListener('click',(e)=>{
    e.preventDefault()
    ocultoPageLogin.style.display = "none";
    ocultoPageRegistro.style.display="block";
    if (addAdmin == true) {//CREAR DEFAULT USER
        lsUsuario.insertarP(usuario);
        addAdmin = false
    }
}) 
        //REG
const iUserR = document.getElementById('i_userR');
const iNameR = document.getElementById('i_nombreR');
const iDpiR = document.getElementById('i_dpiR');
const iPhoneR = document.getElementById('i_telR');
const iPassR = document.getElementById('i_passR');
const btnRegistrarse = document.getElementById('b_registroR')

btnRegistrarse.addEventListener('click', (e) => {
    e.preventDefault()
    //dpi, name, username, password, phone, admin
    let regUsuario = new Usuario(parseInt(iDpiR.value), iNameR.value, iUserR.value, hash(iPassR.value), parseInt(iPhoneR.value),false);
    lsUsuario.insertarU(regUsuario);
    ocultoPageRegistro.style.display = 'none';
    ocultoPageLogin.style.display = "block";
})
    //SALIR
const btnROut = document.getElementById("b_cancelarR")
btnROut.addEventListener('click', (e) => {
    ocultoPageRegistro.style.display = 'none';
    ocultoPageLogin.style.display = "block";
})
    //MASTER CARGAR ARCHIVOS
        //USUARIOS
const btnMFUser = document.getElementById('bfM_user')
let inpMFUser = document.createElement('input'); inpMFUser.type = 'file';
btnMFUser.addEventListener('click', (e) => {
    inpMFUser.click();
    inpMFUser.remove();
})
inpMFUser.addEventListener('change',function(){//cambia (e)=> a funciont()
    var fr = new FileReader();
    fr.onload = function () {
        //document.getElementById('output').textContent = 
        const jsonObj = JSON.parse(fr.result)
        jsonObj.forEach(element => {
            //usuarioC(dpi, name, username, password, phone, admin)
            let reg = new Usuario(
                parseInt(element["dpi"]), 
                element["name"], 
                element["username"], 
                hash(element["password"]), 
                parseInt(element["phone"]), 
                Boolean(element["admin"]));  
            lsUsuario.insertarU(reg);
        });
    }
    fr.readAsText(this.files[0])
})
       //ARTISTAS 
const btnMFArtist = document.getElementById('bfM_artis')
let inpMArtist = document.createElement('input'); inpMArtist.type = 'file';
btnMFArtist.addEventListener('click', (e) => {
    inpMArtist.click();
    inpMArtist.remove();
})
inpMArtist.addEventListener('change', function () {//cambia (e)=> a funciont()
    var fr = new FileReader();
    fr.onload = function () {
        const jsonObj = JSON.parse(fr.result)
        jsonObj.forEach(element => {
            //name, age, country
            let reg = new Artista(
                element["name"],
                parseInt(element["age"]),
                element["country"]
            );
            llArtista.insertarUMain(reg);
            btnMFSong.style.display = 'block';
        });
    }
    fr.readAsText(this.files[0])
})
        //CANCIONES
let inpMSong = document.createElement('input'); inpMSong.type = 'file';
btnMFSong.addEventListener('click', (e) => {
    inpMSong.click();
    inpMSong.remove();
})
inpMSong.addEventListener('change', function () {//cambia (e)=> a funciont()
    var fr = new FileReader();
    fr.onload = function () {
        const jsonObj = JSON.parse(fr.result)
        jsonObj.forEach(element => {
            //artist, name, duration,gender
            let reg = new Cancion(
                element["artist"],
                element["name"],
                parseFloat(element["duration"]),
                element["gender"]
            )
            //name[arista]==artist[cancion]
            llArtista.insertarPSub(element["artist"],reg);
        });
    }
    fr.readAsText(this.files[0])
}) 
        //PODCAST
        //MUSICAP
    //MASTER GRAPHIZ
        //USUARIOS
const bgM_user = document.getElementById("bgM_user")
bgM_user.addEventListener('click', (e) => {
    //lsUsuario
})
        //ARTISTAS
        //MUSICA
        //PODCAST
    //MASTER SALIR
const btnMOut = document.getElementById('b-m-out');
btnMOut.addEventListener('click', (e) => {
    ocultoPageMaster.style.display = 'none';
    ocultoPageLogin.style.display = "block";
})
    //MAIN PAGE
        //ARTISTA
        
            //AZ
            //ARTISTA MOSTRAR
            //AGREGAR
//alert (document.getElementsByClassName('.col1').style.backgroundColor);