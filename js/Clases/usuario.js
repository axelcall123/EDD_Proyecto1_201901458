import { listaSimple } from "../Nodo_Listas/lSimple.js"
export class Usuario {
    constructor(dpi,name,username,password,phone,admin,playlist) {
        this.dpi = dpi
        this.name = name
        this.username = username
        this.password = password
        this.phone = phone
        this.admin = admin
        //cada usuario tiene su propia
        this.playlist=playlist
        this.pila=new listaSimple();
        this.cola=new listaSimple();
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
    getPila(){return this.pila}
    getCola() {return this.cola }
}
//module.exports = usuario;