export class Cancion {
    constructor(artist, name, duration,gender) {
        this.artist = artist
        this.name = name
        this.duration = duration
        this.gender=gender
    }
    GetDatos() {
        return {
            artist: this.artist,
            name: this.name,
            duration: this.duration,
            gender: this.gender
        }
    }

}