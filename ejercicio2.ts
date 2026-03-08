class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {

        if (edad < 1) {
            throw new Error("Error: la edad debe ser mayor que 0")
        }

        this.nombre = nombre
        this.edad = edad
    }

    mostrarRol(): void {
        console.log(`\nNombre: ${this.nombre}`)
        console.log(`Edad: ${this.edad}`)
    }
}

class Estudiante extends Persona {

    constructor(nombre: string, edad: number) {
        super(nombre, edad)
    }

    override mostrarRol(): void {
        super.mostrarRol()
        console.log("Rol -> Estudiante")
    }
}

class Docente extends Persona {

    constructor(nombre: string, edad: number) {
        super(nombre, edad)
    }

    override mostrarRol(): void {
        super.mostrarRol()
        console.log("Rol -> Docente")
    }
}

const estudiante1 = new Estudiante("Carlos", 18)
estudiante1.mostrarRol()

const profesor1 = new Docente("Mario", 28)
profesor1.mostrarRol()
