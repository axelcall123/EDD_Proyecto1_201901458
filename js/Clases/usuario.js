export class Usuario {
    constructor(dpi,name,username,password,phone,admin) {
        this.dpi = dpi
        this.name = name
        this.username = username
        this.password = password
        this.phone = phone
        this.admin = admin
    }
    datos() {
        return {
            dpi: this.dpi,
            name: this.name,
            username: this.username,
            password: this.password,
            phone: this.phone,
            admin: this.admin
        }
    }

}
//module.exports = usuario;