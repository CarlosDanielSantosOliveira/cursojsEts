//É uma função que não retorna nada
function semRetorno(...args): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',

    exibirNome(): void {
        console.log(this.nome + '' + this.sobrenome);
    },
};

semRetorno('Luiz', 'Otávio');
pessoa.exibirNome();

export { pessoa };
