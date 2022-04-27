function meuEscopo () {
    const form = document.querySelector('.form'); //nesse query selector, podemos usar ele no lugar daquele GETELEMENT, voce pode usar classe, id, tags
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

function recebeEventoForm (evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value, 
        altura: altura.value
    }); //estamos pegando o array e adicionando um objeto por indice.

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`
}

form.addEventListener('submit', recebeEventoForm); //Adicionando um evento, nesse caso nao preciso colocar o 'on' antes do submit
}

meuEscopo();
