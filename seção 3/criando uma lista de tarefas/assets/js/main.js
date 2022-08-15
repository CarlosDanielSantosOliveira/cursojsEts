//Adicionando a variável o botão de criar tarefa
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
    //Função responsável por limpar o input e atribuir um foco ao campo de texto, sem que precisemos clicar nele, apos criar uma tarefa.
}

function criaBotaoApagar(li) {
    li.innerText += ' '; //Esse espaço é para que o botão nao fique tao perto do texto
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar'); //Adicionando a linha que foi criada, o atributo class com o nome apagar para a classe.
    botaoApagar.setAttribute('title', 'Apagar esta tarefa') // O mesmo serve para este title.
    li.appendChild(botaoApagar); //Adicionando a linha de texto um botão para apagar
}

function criaTarefa(textoinput) {
    const li = criaLi();
    li.innerText = textoinput //li vai criar um texto
    tarefas.appendChild(li);  //Adicionando a tag html que possui a classe tarefas, uma li
    limpaInput(); //Apos criar a tarefa, o campo de texto será limpo e terá o foco para que possa digitar diretamente, sem precisar clicar no campo de texto.
    criaBotaoApagar(li);
    salvarTarefa();
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) { //A tecla 13 é o enter.
        if (!inputTarefa.value) return; //Essa é uma condição onde vou checar se o input do botão esta vazio, caso esteja, não ira acontecer nada.
        criaTarefa(inputTarefa.value)
    }
}); //Essa função será responsável para que quando apertarmos o ENTER, uma tarefa também seja criada.

//Capturando o clique de adicionar uma tarefa 
btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return; //Essa é uma condição onde vou checar se o input do botão esta vazio, caso esteja, não ira acontecer nada.
    criaTarefa(inputTarefa.value)
});

document.addEventListener('click', function(e) {
    const el = e.target; //O target retorna qual elemento do HTML sofreu o evento

    if (el.classList.contains('apagar')) { //Estou verificando se o elemento que cliquei, possui a classe 'apagar'
        el.parentElement.remove(); //O parentElement é o elemento pai do elemento que clicamos, nesse caso, estamos clicando no botao apagar e seu elemento pai é o 'li', assim, vamos apagar a linha.
        //O classList conta com os seguinte métodos: add() , adiciona uma ou 
        //mais classes ao elemento. remove() , remove uma ou mais classes do elemento. contains() , verifica se possui certa classe no elemento.
        salvarTarefas(); //Esta função esta aqui para que, quando apagarmos uma tarefa, apagar também do localstorage
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); //Estamos acessando a UL de tarefas e pegando todos os elementos li que estão dentro dele.
    const listaDeTarefas = []; //Aqui estamos criando uma array de lista de tarefas

    for (let tarefa of liTarefas) { //Estamos criando um for each que vai percorrer a lista de tarefas que pegamos de dentro da UL
        let tarefaTexto = tarefa.innerText; //Estamos armazenando o nome da tarefa dentro da variavel tarefaTexto
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim; //Estamos pegando o nome da tarefa que armazenamos na variavel e substituindo a palavra apagar por um espaço vazio. O trim serve para remover espaços vazios.
        listaDeTarefas.push(tarefaTexto); //Estamos jogando os textos armazenados na variavel tarefaTexto, dentro desta lista.
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); //Estou convertendo a lista de tarefas para uma String que vai virar um json.
    localStorage.setItem('tarefas', tarefasJSON); //So podemos salvar Strings. Por isso convertemos a lista de tarefas para string
}

function adicionaTarefasSalvas() { //Essa função é responsável por fazer aparecer nas tarefas da pagina web, após a pagina ser recarregada
    const tarefas = localStorage.getItem('tarefas'); //aqui estamos pegando as tarefas salvas no localstorage.
    const listaDeTarefas = JSON.parse(tarefas); //Estamos convertendo a lista de tarefas para um array novamente, para que possa ser exibido na pagina web.

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa); //Agora podemos criar novas tarefas e elas serão exibidos.
    }
}

adicionaTarefasSalvas();