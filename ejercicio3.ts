class Producto {
    nombre: string;
    precio: number

    constructor(nombre: string, precio: number) {

        if (precio <= 0) {
            throw new Error("El precio debe ser mayor que 0")
        }

        this.nombre = nombre
        this.precio = precio
    }

    calcularPrecioFinal(cantidad: number): void {

        const total = this.precio * cantidad
        this.precio = total
    }
}

class ProductoDigital extends Producto {

    constructor(nombre: string, precio: number) {
        super(nombre, precio)
    }

    override calcularPrecioFinal(cantidad: number): void {

        super.calcularPrecioFinal(cantidad)

        console.log(`
        Producto: ${this.nombre}
        Cantidad: ${cantidad}
        Precio final: $${this.precio}
        `)
    }
}

class ProductoFisico extends Producto {

    constructor(nombre: string, precio: number) {
        super(nombre, precio)
    }

    override calcularPrecioFinal(cantidad: number): void {

        super.calcularPrecioFinal(cantidad)

        const extra = this.precio * 0.15
        this.precio += extra

        console.log(`
        Producto: ${this.nombre}
        Cantidad: ${cantidad}
        Recargo aplicado: $${extra}
        Precio final: $${this.precio}
        `)
    }
}

const digital = new ProductoDigital("RAM", 100)
digital.calcularPrecioFinal(2)

const fisico = new ProductoFisico("Disco duro", 100)
fisico.calcularPrecioFinal(2)
