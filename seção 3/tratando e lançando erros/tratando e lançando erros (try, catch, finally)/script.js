// try {
//     //é executado quando não há erros
//     console.log("Abri um arquivo");
//     console.log("Manipulei o arquivo e ferou erro");
// } catch (e) {
//     //é executado quando há erros
//     console.log("Tratando o erro");
// } finally {
//     //sempre será executado
//     console.log("Finally: Eu sempre sou executado");
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    //tratar erro
    //console.log(e);
} finally {
    console.log('Tenha um bom dia.');
}