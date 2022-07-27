function relogio() {
function criaHoraDosSegundos (segundos) { //Função responsável por gerar os segundos da hora
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
let segundos = 0; // variavel para manter os segundos apos iniciar
let timer;

function iniciaRElogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos); //Estou atualizando o elemento html dos segundos com uma contagem formatada pela função criaHoraDosSegundos.
    }, 1000); //Estou dizendo que a função por si só, ja vai contabilizar 1 segundo e no escopo da função estou iterando +1 segundo para o intervalo ja criado de 1 segundo da função
}

document.addEventListener('click', function(e) {
    const el = e.target; //e.target vai retornar para mim no console em qual parte do body eu cliquei

    if(el.classList.contains('zerar')) {//se o elemento que estamos clicando for da classe zerar
        clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado');   
    segundos = 0; //estou zerando o contador, para que ele nao continue contando a contagem anterior, antes de eu pausar.
    }

    if(el.classList.contains('pausar')) {//se o elemento que estamos clicando for da classe zerar
        clearInterval(timer);
        relogio.classList.add('pausado');   
    }

    if(el.classList.contains('iniciar')) {//se o elemento que estamos clicando for da classe zerar
        clearInterval(timer);
        relogio.classList.remove('pausado');   
        iniciaRElogio();
    }
});
}
relogio();


