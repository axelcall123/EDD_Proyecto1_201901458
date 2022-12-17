import { listaSimple } from "../Nodo_Listas/lSimple.js"
import { ldEnlazada } from "../Nodo_Listas/lDEnalazada.js"
export class Usuario {
    constructor(dpi,name,username,password,phone,admin) {
        this.dpi = dpi
        this.name = name
        this.username = username
        this.password = password
        this.phone = phone
        this.admin = admin
        //cada usuario tiene su propia
        this.playlist = new ldEnlazada()
        this.pila=new listaSimple()
        this.cola = new listaSimple()
    }
    GetDatos() {
        return {
            dpi: this.dpi,
            name: this.name,
            username: this.username,
            password: this.password,
            phone: this.phone,
            admin: this.admin
        }
    }
    SetAll(dpi, name, username, password, phone, admin){
        this.dpi = dpi
        this.name = name
        this.username = username
        this.password = password
        this.phone = phone
        this.admin = admin
    }
    GetPlayList() {return this.playlist}
    GetPila(){return this.pila}
    GetCola() {return this.cola }

    /*SetPlayList(playlist) { this.playlist = playlist }
    SetPila(pila) { this.pila =pila }
    SetCola(cola) { this.cola =cola }*/

}
//module.exports = usuario;