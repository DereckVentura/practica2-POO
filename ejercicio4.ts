class Figura {

  calcularArea(): number {
    return 0
  }

  imprimirArea(): void {
    console.log(`Área de la figura (${this.constructor.name}): ${this.calcularArea()}`)
  }
}

class Rectangulo extends Figura {

  constructor(private ancho: number, private alto: number) {
    super()

    if (ancho <= 0 || alto <= 0) {
      throw new Error("Las dimensiones deben ser mayores que 0")
    }
  }

  override calcularArea(): number {
    return this.ancho * this.alto
  }
}

class Circulo extends Figura {

  constructor(private radio: number) {
    super()

    if (radio <= 0) {
      throw new Error("El radio debe ser mayor que 0")
    }
  }

  override calcularArea(): number {
    return Math.PI * (this.radio ** 2)
  }
}

const rect = new Rectangulo(20, 10)
rect.imprimirArea()

const circ = new Circulo(15)
circ.imprimirArea()
