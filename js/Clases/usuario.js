export class Usuario {
    constructor(dpi,name,username,password,phone,admin) {
        this.dpi = dpi
        this.name = name
        this.username = username
        this.password = password
        this.phone = phone
        this.admin = admin
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
    SetDpi(dpi) {
        this.dpi = dpi
    }
    SetName(name) {
        this.name = name
    }
    SetUserN(username) {
        this.username = username
    }
    SetPass(password) {
        this.password = password
    }
    SetPhone(phone) {
        this.phone = phone
    }
    SetAdmin(admin) {
        this.admin = admin
    }
    SetAll(dpi, name, username, password, phone, admin){
        this.dpi = dpi
        this.name = name
        this.username = username
        this.password = password
        this.phone = phone
        this.admin = admin
    }

}
//module.exports = usuario;