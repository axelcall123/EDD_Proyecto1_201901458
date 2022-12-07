class persona{
    constructor(nombre,edad,estatura){
        this.nombre=nombre
        this.edad=edad
        this.estatura=estatura
    }
    datos(){
        return {
            nombre:this.nombre,
            edad: this.edad,
            estatura: this.estatura
        }
    }

}
module.exports =persona;