const pessoa = {
    nome : "Joao",
    idade: 24,
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa,2));
console.log(calculaIdade.apply(pessoa,[2]));