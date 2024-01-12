//Async await serve para: 

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

//Usando Async e await, nós deixamos aquele codigo verboso cheio de .then, menor
async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', randomNumber());
        console.log(fase1)

        const fase2 = await esperaAi('Fase 2', randomNumber());
        console.log(fase2)

        const fase3 = await esperaAi('Fase 3', randomNumber());
        console.log(fase3)

        console.log('Terminamos na fase: ', fase3)
    } catch(e) {
        console.log(e);
    }
}
executa();