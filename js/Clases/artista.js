export class Artista {
    constructor(name, age, country) {
        this.name = name
        this.age = age
        this.country = country
    }
    GetDatos() {
        return {
            name: this.name,
            age: this.age,
            country: this.country
        }
    }
    SetAll(name, age, country) {
        this.name = name
        this.age = age
        this.country = country

    }

}