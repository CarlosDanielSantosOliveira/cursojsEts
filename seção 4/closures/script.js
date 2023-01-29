//esta muito relacionado ao escopo lexico da função
//Closure é quando a função tem acesso a todos os escopos do corpo do codigo.
//Ex: a funcion anonima tem acesso a ela mesma, a mae dela e ao escopo global. Então
//é basicamente a habilidade da função de acessar seu escopo léxico. 
//Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
/*
Uma closure (fechamento) trata-se de um tipo especial de objeto que combina duas coisas: a função e o ambiente onde a função foi criada. Este ambiente consiste de 
quaisquer variáveis que estavam no escopo naquele momento em 
que a função foi criada.

Esta é a teoria — mas closures são realmente úteis? Vamos considerar suas aplicações práticas. Uma closure deixa você associar dados (do ambiente) com uma função que trabalha estes dados. Isto está diretamente ligado com programação orientada a objetos, onde objetos nos permitem associar dados (as propriedades do objeto) utilizando um ou mais métodos.

Consequentemente, você pode utilizar uma closure em qualquer lugar onde você normalmente utilizaria um objeto de único método.

Situações onde você poderia utilizar isto são comuns em ambientes web. Muitos códigos escritos em JavaScript para web são baseados em eventos - nós definimos algum comportamento e então, o atribuimos a um evento que será disparado pelo usuário (quando uma tecla for pressionada, por exemplo). Nosso código normalmente é utilizado como callback: uma função que será executada como resposta ao evento.

Aqui temos um exemplo prático: suponha que queremos adicionar alguns botões para ajustar o tamanho do texto de uma página. Um jeito de fazer seria especificar o tamanho da fonte no elemento body e então definir o tamanho dos outros elementos da página (os cabeçalhos, por exemplo) utilizando a unidade relativa em:

body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.2em;
}

Nossos botões interativos de tamanho de texto podem alterar a propriedade font-size do elemento body, e os ajustes serão refletidos em outros elementos graças à unidade relativa.

O código JavaScript:

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

*/
function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Carlos');
const funcao2 = retornaFuncao('Daniel');

console.dir(funcao);
console.dir(funcao2);

//Console.dir nao tem diferença aqui no vsCode, mas no navegador
//ele exibe a função anônima que criamos 