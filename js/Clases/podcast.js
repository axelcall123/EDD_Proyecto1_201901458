export class PodCast {
    constructor(name,topic,guests,duration) {
        this.name=name
        this.topic=topic
        this.guests=guests
        this.duration=duration
    }
    GetDatos() {
        return {
            name: this.name,
            topic: this.topic,
            guests: this.guests,
            duration: this.duration
        }
    }
    SetAll(name, topic, guests,duration) {
        this.name = name
        this.topic = topic
        this.guests = guests
        this.duration = duration

    }

}