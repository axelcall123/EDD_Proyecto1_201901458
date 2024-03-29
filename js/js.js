/*NOTAS: e=event*/
//CLONAR
let logUser=null
//DIV OCULTO DEFAULT
    //REGISTRO
const ocultoPageRegistro = document.getElementById('d-register');
ocultoPageRegistro.style.display = 'none';
    //MASTER
const ocultoPageMaster = document.getElementById('d-master');
ocultoPageMaster.style.display = 'none';
    //CARGA MASIVA CANCIONES OCULTO
const btnMFSong = document.getElementById('b-f-Msong');
btnMFSong.style.display = 'none';
    //NAV
const ocultoNav = document.getElementById('nav');
ocultoNav.style.display = 'none';
    //PAGINA PRINCIPAL
const ocultoPageMain = document.getElementById('d-main-page');
ocultoPageMain.style.display = 'none';
    //OCULTO MAIN
        //MUSICA
const ocultoPMusica = document.getElementById('d-m-musica')
ocultoPMusica.style.display = 'none';
        //PLAY-LIST
const ocultoPPL = document.getElementById('d-m-playlist')
ocultoPPL.style.display = 'none';
        //ARTISTA
const ocultoPArtista = document.getElementById('d-m-artista')
ocultoPArtista.style.display = 'none';
        //AMIGOS
const ocultoPAmigo = document.getElementById('d-m-amigos')
ocultoPAmigo.style.display = 'none';
        //BLOQUEADOS
const ocultoPBloqueado = document.getElementById('d-m-bloqueados')
ocultoPBloqueado.style.display = 'none';
        //PODCAST
const ocultoPPodC = document.getElementById('d-m-podcast')
ocultoPPodC.style.display = 'none';
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
    //MUSICA
import { Musica } from './Clases/musica.js';
    //PODCAST
import { PodCast } from './Clases/podcast.js';
var usuario = new Usuario(
    "2654568452521", 
    "Oscar Armin", 
    "EDD", 
    hash("123"), 
    "1234567", 
    true
)
//VAR LET CONST
var addAdmin = true;
//LISTAS
import { listaSimple } from './Nodo_Listas/lSimple.js'
const lsUsuario=new listaSimple();
import { listaLista } from './Nodo_Listas/lLista.js'
const llArtista=new listaLista();
import { matrizDispersa } from './Nodo_Listas/mDispersa.js';
const matrizM=new matrizDispersa()
import { ABB } from './Nodo_Listas/binario.js';
const abPod=new ABB()
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
    let log = lsUsuario.buscar(iUserL.value, hash(iPassL.value), iCheckL.checked)
    logUser=log["nodo"]
    if (log["TF"]){//COINCIDENCIA
        if (iCheckL.checked && log["AD"]){//si es admin pagina master
            //ocultar,mostrar
            ocultoPageLogin.style.display = "none";
            ocultoPageMaster.style.display = "block";
        }else{//no admin main page
            ocultoPageLogin.style.display = "none";
            ocultoNav.style.display = 'block';
            ocultoPageMain.style.display = 'block';

            
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
const btnMFUser = document.getElementById('b-f-Muser')
let inpMFUser = document.createElement('input'); inpMFUser.type = 'file';
btnMFUser.addEventListener('click', (e) => {
    e.preventDefault()
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
const btnMFArtist = document.getElementById('b-f-Martis')
let inpMArtist = document.createElement('input'); inpMArtist.type = 'file';
btnMFArtist.addEventListener('click', (e) => {
    e.preventDefault()
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
    e.preventDefault()
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
const btnMFPod = document.getElementById('b-f-Mpodcast')
let inpMPod = document.createElement('input'); inpMPod.type = 'file';
btnMFPod.addEventListener('click', (e) => {
    e.preventDefault()
    inpMPod.click();
    inpMPod.remove();
})
inpMPod.addEventListener('change', function () {//cambia (e)=> a funciont()
    var fr = new FileReader();
    fr.onload = function () {
        const jsonObj = JSON.parse(fr.result)
        jsonObj.forEach(element => {
            //name,topic,guests,duration
            let reg = new PodCast(
                element["name"],
                element["topic"],
                element["guests"],
                element["duration"]
            )
            abPod.insertar(reg)
        });
    }
    fr.readAsText(this.files[0])
})         
        //MUSICAP
const btnMFMusic = document.getElementById('b-f-Mmusic')
let inpMMusic = document.createElement('input'); inpMMusic.type = 'file';
btnMFMusic.addEventListener('click', (e) => {
    e.preventDefault()
    inpMMusic.click();
    inpMMusic.remove();
})
inpMMusic.addEventListener('change', function () {//cambia (e)=> a funciont()
    let months={
        "january":1,
        "february":2,
        "march":3,
        "april":4,
        "may":5,
        "june":6,
        "july":7,
        "august":8,
        "september":9,
        "october":10,
        "november":11,
        "december": 12
    }
    
    var fr = new FileReader();
    fr.onload = function () {
        const jsonObj = JSON.parse(fr.result)
        jsonObj.forEach(element => {
            //month,day,song,artist
            let day = parseFloat(element["day"])
            let month = months[element["month"].toLowerCase()]
            let reg = new Musica(
                month,//obtener el numero
                day,
                element["song"],
                element["artist"]
            )
            matrizM.insertarNodo(day,month,reg)
        });
    }
    fr.readAsText(this.files[0])
})       
    //MASTER GRAPHIZ
        //USUARIOS
const bgM_user = document.getElementById("b-g-M-user")
bgM_user.addEventListener('click', (e) => {
    //console.log(lsUsuario.graphviz())
    const padre= document.getElementById("b-MGraph")//remover graphviz
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    d3.select("#b-MGraph")
        .graphviz()
        .renderDot(lsUsuario.graphviz())
})
        //ARTISTA
const bgM_art = document.getElementById("b-g-M-artis")
bgM_art.addEventListener('click', (e) => {
    //console.log(llArtista.graphviz())
    const padre = document.getElementById("b-MGraph")//remover graphviz
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    d3.select("#b-MGraph")
        .graphviz()
        .renderDot(llArtista.graphviz())
})
        //MUSICA P
const bgM_musica = document.getElementById("b-g-M-musicp")
bgM_musica.addEventListener('click', (e) => {
    //console.log(matrizM.graphviz())
    const padre = document.getElementById("b-MGraph")//remover graphviz
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    d3.select("#b-MGraph")
        .graphviz()
        .renderDot(matrizM.graphviz())
})
        //PODCAST 
const bgM_podcast = document.getElementById("b-g-M-podcast")
bgM_podcast.addEventListener('click', (e) => {
    //console.log(abPod.graphviz())
    const padre = document.getElementById("b-MGraph")//remover graphviz
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    d3.select("#b-MGraph")
        .graphviz()
        .renderDot(abPod.graphviz())
})
    //MASTER SALIR
const btnMOut = document.getElementById('b-m-out');
btnMOut.addEventListener('click', (e) => {
    ocultoPageMaster.style.display = 'none';
    ocultoPageLogin.style.display = "block";
})
    //MAIN PAGE
        //LOG 
const btnPLogout = document.getElementById('b-index-log')
btnPLogout.addEventListener('click', (e) => {
    //MUSICA
    ocultoPMusica.style.display = 'none';
    //PLAY-LIST
    ocultoPPL.style.display = 'none';
    //ARTISTA
    ocultoPArtista.style.display = 'none';
    //AMIGOS
    ocultoPAmigo.style.display = 'none';
    //BLOQUEADOS
    ocultoPBloqueado.style.display = 'none';
    //PODCAST
    ocultoPPodC.style.display = 'none';

    ocultoNav.style.display = 'none';
    ocultoPageMain.style.display = 'none';
    ocultoPageLogin.style.display = "block";
    
    /*var padre = document.getElementById("d-main-page")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }*/
    var padre = document.getElementById("d-musica-musica")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    padre = document.getElementById("d-musica-publicado") //elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    padre = document.getElementById("d-m-p-playlist")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    padre = document.getElementById("d-artista-artista")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    padre = document.getElementById("d-artista-musica") //elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    padre = document.getElementById("d-Mamigo-user")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    padre = document.getElementById("d-Mamigo-amigo") //elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }

    padre = document.getElementById("d-Mbloqueado-user")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    padre = document.getElementById("d-Mbloqueado-bloqueado") //elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    padre = document.getElementById("d-podcast-musica")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    padre = document.getElementById("d-podcast-musica")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
})
        //MUSICA 
const btnPMusica = document.getElementById('b-index-musica')
btnPMusica.addEventListener('click', (e) => {
    //MUSICA
    ocultoPMusica.style.display = 'block';
    //PLAY-LIST
    ocultoPPL.style.display = 'none';
    //ARTISTA
    ocultoPArtista.style.display = 'none';
    //AMIGOS
    ocultoPAmigo.style.display = 'none';
    //BLOQUEADOS
    ocultoPBloqueado.style.display = 'none';
    //PODCAST
    ocultoPPodC.style.display = 'none';

    let listaAux = matrizM.getHTML()

    var padre = document.getElementById("d-musica-musica")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    padre = document.getElementById("d-musica-publicado") //elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }

    while (listaAux["elemento"].vacio() != true) {//while de musica
        //despliego <elementos musica>
        document.getElementById("d-musica-musica").insertAdjacentHTML('beforeend', listaAux["elemento"].pop())
    }
})
const inpFecha = document.getElementById('i-m-fecha')
            //PROGRAMAR
const btnProgramar = document.getElementById('bMProgramar')
btnProgramar.addEventListener('click', (e) => {
    var padre = document.getElementById("d-musica-musica")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    //año-mes-dia 0-1-2
    let arrayF = inpFecha.value.split("-")
    const nombre= document.getElementById("i-m-nombre")
    //const sonido = document.getElementById("i-m-album")
    let reg = new Musica(arrayF[1], 
        arrayF[2], 
        nombre.value, 
        logUser.info.GetDatos()["username"])
    
    matrizM.insertarNodo(parseInt(arrayF[2]), parseInt(arrayF[1]), reg)
    let listaAux = matrizM.getHTML()
    while (listaAux["elemento"].vacio() != true) {//while de musica
        //despliego <elementos musica>
        document.getElementById("d-musica-musica").insertAdjacentHTML('beforeend', listaAux["elemento"].pop())
    }
})
            //PUBLICAR
const btnPublicar = document.getElementById('bMPublicar')
btnPublicar.addEventListener('click', (e) => {
    //const nombre = document.getElementById("i-m-nombre")
    const sonido = document.getElementById("i-m-album")
    //name, age, country
    var reg = new Artista(
        logUser.info.GetDatos()["username"],
        0,
        "n"
    );
    llArtista.insertarUMain(reg);
    //artist, name, duration,gender
    reg = new Cancion(
        logUser.info.GetDatos()["username"],
        sonido,
        0,
        ["n"]
    )
    llArtista.insertarPSub(logUser.info.GetDatos()["username"],reg);     
})
            //VER
const btnMver= document.getElementById('bMVer')
btnMver.addEventListener('click', (e) => {
    let padre = document.getElementById("d-musica-publicado") //elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    //año-mes-dia 0-1-2
    let arrayF=inpFecha.value.split("-")
    //buscar
    let txtAux = matrizM.buscarXY(parseInt(arrayF[2]), parseInt(arrayF[1]))
    document.getElementById("d-musica-publicado").insertAdjacentHTML('beforeend', txtAux)
})        
        //PLAYLIST
const btnPPlayL = document.getElementById('b-index-play')
let playList=null
btnPPlayL.addEventListener('click', (e) => {
    //MUSICA
    ocultoPMusica.style.display = 'none';
    //PLAY-LIST
    ocultoPPL.style.display = 'block';
    //ARTISTA
    ocultoPArtista.style.display = 'none';
    //AMIGOS
    ocultoPAmigo.style.display = 'none';
    //BLOQUEADOS
    ocultoPBloqueado.style.display = 'none';
    //PODCAST
    ocultoPPodC.style.display = 'none';
    //FIXME:si ya hay

    var padre = document.getElementById("d-m-p-playlist")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    let aux = logUser.info.GetPlayList().getHtml(null, "=")
    let btnHtml = aux["html"]
    playList = aux["nodo"]
    //despliego <elemento playList>
    document.getElementById("d-m-p-playlist").insertAdjacentHTML('beforeend', btnHtml)
})
            //SIG 
const btnPPlayLs = document.getElementById('pl-sig')
btnPPlayLs.addEventListener('click', (e) => {
    var padre = document.getElementById("d-m-p-playlist")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    let aux = logUser.info.GetPlayList().getHtml(playList, "->")
    let btnHtml = aux["html"]
    playList = aux["nodo"]
    //despliego <elemento playList>
    document.getElementById("d-m-p-playlist").insertAdjacentHTML('beforeend', btnHtml)
})   
            //ANT 
const btnPPlayLa = document.getElementById('pl-ant')
btnPPlayLa.addEventListener('click', (e) => {
    var padre = document.getElementById("d-m-p-playlist")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    let aux = logUser.info.GetPlayList().getHtml(playList, "<-")
    let btnHtml = aux["html"]
    playList = aux["nodo"]
    //despliego <elemento playList>
    document.getElementById("d-m-p-playlist").insertAdjacentHTML('beforeend', btnHtml)
}) 
        //ARTISTA
const btnPArtista = document.getElementById('b-index-Art')
btnPArtista.addEventListener('click', (e) => {
    //MUSICA
    ocultoPMusica.style.display = 'none';
    //PLAY-LIST
    ocultoPPL.style.display = 'none';
    //ARTISTA
    ocultoPArtista.style.display = 'block';
    //AMIGOS
    ocultoPAmigo.style.display = 'none';
    //BLOQUEADOS
    ocultoPBloqueado.style.display = 'none';
    //PODCAST
    ocultoPPodC.style.display = 'none';

    let listaAux = llArtista.getHTML()
    var padre = document.getElementById("d-artista-artista")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    padre = document.getElementById("d-artista-musica") //elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    
    //while artistas div and button
    //pila de ids
    let idsArtistas = new listaSimple()
    while (listaAux["id"].vacio() != true){  
        //TEMPORALES
        let TempID = listaAux["id"].pop()
        let TempElemento=listaAux["elemento"].pop()
        //depliego artista por id
        let idTA=TempID["idp"]
        //despliego <elementos artistas>
        document.getElementById("d-artista-artista").insertAdjacentHTML('beforeend', TempElemento["ep"])
        //depliego <elemntos musica varios divs>
        document.getElementById("d-artista-musica").insertAdjacentHTML('beforeend', listaAux["eOc"].pop())
        //invisibles toda la musica
        document.getElementById(idTA.replace("b-MArt-art-", "d-MArt-art-")).style.display = "none";
        let btnTempA = document.getElementById(idTA)
        //para que no haga funcion del mismo;funciones de los botones 
        
        idsArtistas.push(idTA)//ingresar ids
        btnTempA.addEventListener('click', (e) => {
            let auxIds=new listaSimple()
            while (idsArtistas.vacio()!=true){//para bloquear los demas
                let tempIds = idsArtistas.pop()
                if (e.target.id == tempIds){//si es mi id entonces muestralo
                    document.getElementById(tempIds.replace("b-MArt-art-", "d-MArt-art-")).style.display = "block";
                    
                }else{
                    document.getElementById(tempIds.replace("b-MArt-art-", "d-MArt-art-")).style.display = "none";
                }
                auxIds.push(tempIds)
            }
            while(auxIds.vacio()!=true){//volver a poner los ids
                idsArtistas.push(auxIds.pop())
            }
        })
        while (TempID["ids"].vacio() != true) {
            //depliego musica por id
            let idTM = TempID["ids"].pop()
            //despliego <elementos musica>
            document.getElementById(idTA.replace("b-MArt-art-","d-MArt-art-")).insertAdjacentHTML('beforeend',TempElemento["es"].pop())
            let btnTempM = document.getElementById(idTM)
            //para que no haga funcion del mismo;funciones de los botones
            btnTempM.addEventListener('click', (e) => {
                e.target.setAttribute("disabled", "disabled");//para no ser click
                var temp = e.target.id.replace("b-MArt-mus-", "")
                if(temp!=""){
                    let ids = temp.split('-');//obtengo el id1(artista)-id2(musica)
                    let nodoUsuarioTemp = llArtista.buscarIDS(parseFloat(ids[0]), parseFloat(ids[1]))
                    logUser.info.GetPlayList().insertar(nodoUsuarioTemp)//agrego play list
                }              
            })
        }
    }
})
            //A-Z
const btnPArtistaAZ = document.getElementById('b-a-z')
btnPArtistaAZ.addEventListener('click', (e) => {
    llArtista.ordenAZ()
    btnPArtista.click()
})

            //Z-A
const btnPArtistaZA = document.getElementById('b-z-a')
btnPArtistaZA.addEventListener('click', (e) => {
    llArtista.ordenZA()
    btnPArtista.click()
})
        //AMIGOS
            //AGREGAR
const btnPAmigo = document.getElementById('b-index-Ami')
btnPAmigo.addEventListener('click', (e) => {
    //MUSICA
    ocultoPMusica.style.display = 'none';
    //PLAY-LIST
    ocultoPPL.style.display = 'none';
    //ARTISTA
    ocultoPArtista.style.display = 'none';
    //AMIGOS
    ocultoPAmigo.style.display = 'block';
    //BLOQUEADOS
    ocultoPBloqueado.style.display = 'none';
    //PODCAST
    ocultoPPodC.style.display = 'none';

    let listaAux = lsUsuario.getHTML("amigo")
    var padre = document.getElementById("d-Mamigo-user")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    padre = document.getElementById("d-Mamigo-amigo") //elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    document.getElementById("d-Mamigo-user").insertAdjacentHTML('beforeend', "<h5>Usuarios</h5>")
    document.getElementById("d-Mamigo-amigo").insertAdjacentHTML('beforeend', "<h5>Amigos</h5>")
    //FIXME:si ya hay
    //imprimir por si existe
    let pila = logUser.info.GetPila()//imprimir por si existe
    let pilaAux = new listaSimple()
    while (pila.vacio() != true) {
        let infoPila=pila.pop()
        var user = infoPila.GetDatos()["username"]
        var dpi = infoPila.GetDatos()["dpi"]
        let btnHtml = `
            <div class="d-artista-persona" id="d-Mamigo-amigo-${dpi}">
                <h5 class="center-text">${user}</h5>
                <button class="b-a-persona" disabled>
                    <i class="bi bi-person-circle i-a-persona"></i>
                </button>
            </div>`
        //desplieo <elemento amigos>
        document.getElementById("d-Mamigo-amigo").insertAdjacentHTML('beforeend', btnHtml)
        pilaAux.push(infoPila)
    }

    while (pilaAux.vacio() != true) {//volver a ingrear de nuevo la pila
        pila.push(pilaAux.pop())
    }

    while (listaAux["elemento"].vacio() != true && listaAux["id"].vacio() != true){//while de usuarios
        //depliego user por id
        let idT = listaAux["id"].pop()
        //despliego <elementos usuarios>
        document.getElementById("d-Mamigo-user").insertAdjacentHTML('beforeend', listaAux["elemento"].pop())
        let btnTemp = document.getElementById(idT)
        //para que no haga funcion del mismo
        //funciones de los botones
        btnTemp.addEventListener('click', (e) => {
            //console.log(`soy boton ${e.target.id}`);
            e.target.setAttribute("disabled", "disabled");//para no ser click
            let txtId = e.target.id.replace("b-Mamigo-user-","")//obtengo el id:dpi
            let nodoUsuarioTemp = lsUsuario.buscarDPI(txtId)//busco id

            logUser.info.GetPila().push(nodoUsuarioTemp)//agrego pila amigos

            var user = nodoUsuarioTemp.info.GetDatos()["username"]
            var dpi = nodoUsuarioTemp.info.GetDatos()["dpi"]
            let btnHtml =`
            <div class="d-artista-persona" id="d-Mamigo-amigo-${dpi}">
                <h5 class="center-text">${user}</h5>
                <button class="b-a-persona" disabled>
                    <i class="bi bi-person-circle i-a-persona"></i>
                </button>
            </div>`
            //desplieo <elemento amigos>
            document.getElementById("d-Mamigo-amigo").insertAdjacentHTML('beforeend', btnHtml)
        })
        if (idT.replace("b-Mamigo-user-", "") == logUser.info.GetDatos()["dpi"].toString()) {
            document.getElementById(idT.replace("b-Mamigo-user-", "d-Mamigo-user-")).remove()
        }
    }
})
            //ELMINAR
const btnPElminarA = document.getElementById('b-a-eliminar')
btnPElminarA.addEventListener('click', (e) => {
    let nodoAux=logUser.info.GetPila().pop()//saco el nodo
    let dpi=nodoAux.info.GetDatos()["dpi"]//obtengo dpi
    document.getElementById(`d-Mamigo-amigo-${dpi}`).remove()//remuevo de bloqueados
    document.getElementById(`b-Mamigo-user-${dpi}`).removeAttribute('disabled')//remuvo ahora puede hacer click
})
        //BLOQUEADOS
            //AGREGAR
const btnPBlo = document.getElementById('b-index-Blo')
btnPBlo.addEventListener('click', (e) => {
    //MUSICA
    ocultoPMusica.style.display = 'none';
    //PLAY-LIST
    ocultoPPL.style.display = 'none';
    //ARTISTA
    ocultoPArtista.style.display = 'none';
    //AMIGOS
    ocultoPAmigo.style.display = 'none';
    //BLOQUEADOS
    ocultoPBloqueado.style.display = 'block';
    //PODCAST
    ocultoPPodC.style.display = 'none';

    let listaAux = lsUsuario.getHTML("bloqueado")
    var padre = document.getElementById("d-Mbloqueado-user")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    padre = document.getElementById("d-Mbloqueado-bloqueado") //elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }

    document.getElementById("d-Mbloqueado-user").insertAdjacentHTML('beforeend', "<h5>Usuarios</h5>")
    document.getElementById("d-Mbloqueado-bloqueado").insertAdjacentHTML('beforeend', "<h5>Bloqueados</h5>")

    //FIXME:si ya hay
    //imprimir por si existe
    let pila = logUser.info.GetCola()//imprimir por si existe
    let pilaAux = new listaSimple()
    while (pila.vacio() != true) {
        let infoPila = pila.pop()
        var user = infoPila.GetDatos()["username"]
        var dpi = infoPila.GetDatos()["dpi"]
        let btnHtml = `
            <div class="d-artista-persona" id="d-Mbloqueado-bloqueado-${dpi}">
                <h5 class="center-text">${user}</h5>
                <button class="b-a-persona" disabled>
                    <i class="bi bi-person-circle i-a-persona"></i>
                </button>
            </div>`
        //desplieo <elemento amigos>
        document.getElementById("d-Mamigo-amigo").insertAdjacentHTML('beforeend', btnHtml)
        pilaAux.push(infoPila)
    }
    while (pilaAux.vacio() != true) {//volver a ingrear de nuevo la pila
        pila.push(pilaAux.pop())
    }


    while (listaAux["elemento"].vacio() != true && listaAux["id"].vacio() != true) {//while de usuarios
        //depliego user por id
        let idT = listaAux["id"].pop()
        //despliego <elementos usuarios>
        document.getElementById("d-Mbloqueado-user").insertAdjacentHTML('beforeend', listaAux["elemento"].pop())
        let btnTemp = document.getElementById(idT)
        //para que no haga funcion del mismo
        //funciones de los botones
        btnTemp.addEventListener('click', (e) => {
            //console.log(`soy boton ${e.target.id}`);
            e.target.setAttribute("disabled", "disabled");//para no ser click
            let txtId = e.target.id.replace("b-Mbloqueado-user-", "")//obtengo el id:dpi
            let nodoUsuarioTemp = lsUsuario.buscarDPI(txtId)//busco id

            logUser.info.GetCola().add(nodoUsuarioTemp)//agrego pila amigos

            var user = nodoUsuarioTemp.info.GetDatos()["username"]
            var dpi = nodoUsuarioTemp.info.GetDatos()["dpi"]
            let btnHtml = `
            <div class="d-artista-persona" id="d-Mbloqueado-bloqueado-${dpi}">
                <h5 class="center-text">${user}</h5>
                <button class="b-a-persona" disabled>
                    <i class="bi bi-person-circle i-a-persona"></i>
                </button>
            </div>`
            //desplieo <elemento amigos>
            document.getElementById("d-Mbloqueado-bloqueado").insertAdjacentHTML('beforeend', btnHtml)
        })
        if (idT.replace("b-Mbloqueado-user-", "") == logUser.info.GetDatos()["dpi"].toString()) {
            document.getElementById(idT.replace("b-Mbloqueado-user-", "d-Mbloqueado-user-")).remove()
        }
    }
})
            //ELMINAR
const btnPElminarB= document.getElementById('b-b-eliminar')
btnPElminarB.addEventListener('click', (e) => {
    let nodoAux = logUser.info.GetCola().remove()//saco el nodo
    let dpi = nodoAux.info.GetDatos()["dpi"]//obtengo dpi
    document.getElementById(`d-Mbloqueado-bloqueado-${dpi}`).remove()//remuevo de bloqueados
    document.getElementById(`b-Mbloqueado-user-${dpi}`).removeAttribute('disabled')//remuvo ahora puede hacer click
})
    //PODCAST
const btnPPod = document.getElementById('b-index-Pod')
btnPPod.addEventListener('click', (e) => {
    //MUSICA
    ocultoPMusica.style.display = 'none';
    //PLAY-LIST
    ocultoPPL.style.display = 'none';
    //ARTISTA
    ocultoPArtista.style.display = 'none';
    //AMIGOS
    ocultoPAmigo.style.display = 'none';
    //BLOQUEADOS
    ocultoPBloqueado.style.display = 'none';
    //PODCAST
    ocultoPPodC.style.display = 'block';

    let listaAux = abPod.getHTML()
    var padre = document.getElementById("d-podcast-musica")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    while (listaAux["elemento"].vacio() != true){
        //despliego <elementos usuarios>
        document.getElementById("d-podcast-musica").insertAdjacentHTML('beforeend', listaAux["elemento"].pop())
    }
})

        //AGREGAR
const btnPublicarP = document.getElementById('b-pod-public')
btnPublicarP.addEventListener('click', (e) => {
    e.preventDefault()
    //let regUsuario = new Usuario(parseInt(iDpiR.value), iNameR.value, iUserR.value, hash(iPassR.value), parseInt(iPhoneR.value),false);
    //name, topic, guests, duration
    let array = iPInvitado.value.split(",")
    let newPod = new PodCast(iPUser.value, iPTema.value, array, parseInt(iPDuracion.value));
    abPod.insertar(newPod);

    let listaAux = abPod.getHTML()
    var padre = document.getElementById("d-podcast-musica")//elimina todo los hijos por si las moscas
    while (padre.firstChild) {
        padre.firstChild.remove()
    }
    while (listaAux["elemento"].vacio() != true) {
        //despliego <elementos usuarios>
        document.getElementById("d-podcast-musica").insertAdjacentHTML('beforeend', listaAux["elemento"].pop())
    }
})
//alert (document.getElementsByClassName('.col1').style.backgroundColor);
