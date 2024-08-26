//Encadeamento opcional e Operador de coalescência nula:
/*
    Serve para evitar varios if's no código

    O encadeamento opcional: serve para checar se existe uma chave dentro de um objeto, type ou interface.
    A coalescência nula: Serve para  checar se o valor que voce esta recebendo do lado esquerdo do operador é um null ou undefined(não valores)
*/

type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
}

const documento: Documento = {
    titulo: 'Titulo',
    texto: 'Texto',
}

console.log(documento.data?.toLocaleDateString() ?? 'ixi, não existe data.');