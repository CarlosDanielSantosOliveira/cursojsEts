//Raramente usado, um namespace é tipo um módulo.
var MeuNamespace;
(function (MeuNamespace) {
    var nome = 'Daniel';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoa = new PessoaDoNamespace('Daniel');
    console.log(pessoa);
})(MeuNamespace || (MeuNamespace = {}));
var pessoa = new MeuNamespace.PessoaDoNamespace('Daniel');
console.log(pessoa);
/// <reference path="../Reference para import de arquivos/module.ts" />
