class cancion {
    constructor(artist, name, duration,gender) {
        this.artist = artist
        this.name = name
        this.duration = duration
        this.gender=gender
    }
    datos() {
        return {
            artist: this.artist,
            name: this.name,
            duration: this.duration,
            gender: this.gender
        }
    }

}
module.exports = cancion;