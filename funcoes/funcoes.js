const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function getNota({nota}){
    return nota;
}

function mostraAlunoAprovado(arrAlunos, mediaFinal){
    let alunosComMediaFinal = [];

    for(let i = 0; i < arrAlunos.length; i++){

		const {nome,nota} = arrAlunos[i];

        if(nota >= mediaFinal){
            alunosComMediaFinal.push(nome);
        }

    }
    return alunosComMediaFinal;
}

console.log(mostraAlunoAprovado(alunos,6));