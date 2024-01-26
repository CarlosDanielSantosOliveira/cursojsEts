 

document.addEventListener('click', e => {
  //No codigo abaixo estamos falando que qualquer elemento que estejamos pegando, vamos converter o nome da tag para lower case
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if(tag === "a") {
    e.preventDefault(); //Estou usando isso para que quando clicarmos na tag a, nao sejamos redirecionados para o link
    carregaPagina(el); //Recebendo a tag que esta sendo clicada nessa função
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href);

    if(response.status !== 200) throw new Error('Erro 404!');

    const html = await response.text();
    carregaResultado(html);
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}