function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// function funcaoDoInterval() {
//     console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 1000);
//SetInterval serve para que possamos, por exemplo: executar uma função de tempo em tempo, com um intervalo

//mas nesse caso eu posso criar uma função anonima para isso!>>:
// setInterval(function () {
//     console.log(mostraHora());
// }, 1000);

//Alem disso, podemos jogar esse setInterval dentro de uma variável, como exemplo:
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

//Ai agora temos uma outra função, que podemos usar para parar a execução da outra.
setTimeout(function() {
    clearInterval(timer);
}, 3000);
//Vai terminar a função timer após 3 segundos.

