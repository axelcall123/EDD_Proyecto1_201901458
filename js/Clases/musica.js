class musica {
    constructor(month, day, song, artist) {
        this.month = month
        this.day = day
        this.song = song
        this.artist = artist
    }
    datos() {
        return {
            month: this.month,
            day: this.day,
            song: this.song,
            artist: this.artist
        }
    }

}
module.exports = musica;