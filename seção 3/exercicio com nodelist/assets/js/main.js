const paragrafos = document.querySelector('.paragrafos');//aqui estou atribuindo a variavel a classe da div do html
const ps = paragrafos.querySelectorAll('p')// Aqui estou pegando no nodelist todos os p do corpo da página.
//nodelist nao é um array, mas trabalha de forma semelhante.

const estilosBody = getComputedStyle(document.body); //Estou armazenando nessa variável todos os estilos que estão no corpo da pagina html
const backgroundBody = estilosBody.backgroundColor; //buscando da variavel estilosbody a cor do background da pagina.

for (let p of ps) {
    p.style.backgroundColor = backgroundBody; //Estou percorrendo pelos paragrafos e aplicando o estilo 
}

