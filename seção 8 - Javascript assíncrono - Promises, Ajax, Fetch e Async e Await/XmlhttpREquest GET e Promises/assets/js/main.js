//xhr significa XMLHttpRequest

const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(obj.method, obj.url, true);
    // xhr.open('GET', 'U', true); //Sempre deixar true para ser assincrono
    xhr.send();
    
    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText)
      }
    });
  });
}

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
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch (e) {
    console.log(e)
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}