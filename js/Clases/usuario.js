export class Usuario {
    constructor(dpi,name,username,password,phone,admin,playlist) {
        this.dpi = dpi
        this.name = name
        this.username = username
        this.password = password
        this.phone = phone
        this.admin = admin
        this.playlist=playlist
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
    GetPlayList(){
        return this.playlist
    }
    SetAll(dpi, name, username, password, phone, admin){
        this.dpi = dpi
        this.name = name
        this.username = username
        this.password = password
        this.phone = phone
        this.admin = admin
    }
    SetPlayList(playlist){
        this.playlist = playlist
    }

}
//module.exports = usuario;