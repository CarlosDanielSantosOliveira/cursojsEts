const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const container = document.querySelector('.container'); //Estou pegando a classe container que esta na section do html, para ter acesso a tag 
const div = document.createElement('div'); //Estou criando uma tag div, mas ainda preciso dizer onde ela vai ficar.

//Agora vou percorrer o array que criei

for (let i = 0; i < elementos.length; i++) { //Incrementando as tags com o loop
    //Agora vou utilizar desestruturação de objetos
    let { tag, texto } = elementos[i]; //estou pegando a tag e o texto para desestrutura-los
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto; //estou colocando dentro da tag criada um texto
    div.appendChild(tagCriada); //passando a tag criada para dentro da div

    //ou seja, desestruturei os objetos do array, para que
    //a cada iteração do for ele crie uma tag e um texto dentro da div
}

container.appendChild(div); //colocando a div dentro do container.