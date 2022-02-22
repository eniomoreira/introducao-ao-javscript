class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    sacar(quantia) {
        this._saldo = this._saldo + quantia;
    }
    depositar(quantia){
        this._saldo = this._saldo + quantia;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(angencia, numero, cartaoCredito){
        super(angencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(angencia, numero){
        super(angencia, numero);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(angencia, numero){
        super(angencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor){
        if(valor < 500){
            super.sacar(valor);
        }else{
            console.log('nao e possivel sacar esse valor de uma conta universitaria')
        }
    }
}


