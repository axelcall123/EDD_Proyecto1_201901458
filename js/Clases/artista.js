class artista {
    constructor(name, age, country) {
        this.name = name
        this.age = age
        this.country = country
    }
    datos() {
        return {
            name: this.name,
            age: this.age,
            country: this.country
        }
    }

}
module.exports = artista;