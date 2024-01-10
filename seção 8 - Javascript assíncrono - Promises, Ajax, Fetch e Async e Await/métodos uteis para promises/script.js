function randomNumber(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') {
            reject(false);
            return
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return
        }, tempo);
    })
}

//Promisse.all - Ele vai resolver todas as promises para voce e te retorna-las
const promises = [
    'Primeiro valor',
    esperaAi("Promise 1", 3000),
    esperaAi("Promise 2", 500),
    esperaAi("Promise 3", 1000),
];

Promise.all(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro)
    })

//Promise.race - a primeira promise que ser resolvida, é retornada
Promise.race(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro)
    })

//Promise.resolve 
function baixaPagina() {
    const emCache = true;
    if(emCache) {
        return Promise.resolve("Página em cache");
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));