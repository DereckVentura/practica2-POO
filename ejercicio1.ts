class CuentaBancaria {
    titular: string;
    protected saldo: number;

    constructor(nombreTitular: string, saldoInicial: number) {
        this.titular = nombreTitular
        this.saldo = saldoInicial
    }

    depositar(monto: number): void {
        this.validarDeposito(monto)
        this.verSaldo()
    }

    validarDeposito(monto: number): void {
        if (monto > 0) {
            this.saldo += monto
            console.log(`Depósito realizado: $${monto}`)
        } else {
            console.log(`Error: el depósito debe ser mayor a $0`)
        }
    }

    retirar(monto: number): void {
        this.validarRetiro(monto)
        this.verSaldo()
    }

    validarRetiro(monto: number): void {
        if (monto > this.saldo) {
            console.log(`No es posible retirar $${monto}`)
        } else {
            this.saldo -= monto
            console.log(`Retiro realizado: $${monto}`)
        }
    }

    verSaldo(): void {
        console.log(`Saldo actual: $${this.saldo}`)
    }

    mostrarDetalles(): void {
        console.log(`\nTitular: ${this.titular}`)
        console.log(`Saldo disponible: $${this.saldo}`)
    }
}

class CuentaAhorro extends CuentaBancaria {

    constructor(titular: string, saldo: number) {
        super(titular, saldo)
    }

    override mostrarDetalles(): void {
        super.mostrarDetalles()
        console.log(`Tipo de cuenta: Ahorro\n`)
    }
}

class CuentaCorriente extends CuentaBancaria {

    private readonly limite: number = 4000

    constructor(titular: string, saldo: number) {
        super(titular, saldo)
    }

    override depositar(monto: number): void {

        const posibleSaldo = this.saldo + monto

        if (posibleSaldo > this.limite) {
            console.log(`Error: el saldo no puede superar $4000`)
            this.verSaldo()
        } else {
            super.depositar(monto)
        }
    }

    override mostrarDetalles(): void {
        super.mostrarDetalles()
        console.log(`Tipo de cuenta: Corriente`)
        console.log(`Límite máximo: $${this.limite}\n`)
    }
}

const cuentaBase = new CuentaBancaria("Carlos", 0)

const cuentaAhorro = new CuentaAhorro("Carlos", 0)
cuentaAhorro.depositar(100)
cuentaAhorro.retirar(20)
cuentaAhorro.mostrarDetalles()

const cuentaCorriente = new CuentaCorriente("Carlos", 0)
cuentaCorriente.depositar(100)
cuentaCorriente.retirar(20)
cuentaCorriente.depositar(4000)
cuentaCorriente.mostrarDetalles()
