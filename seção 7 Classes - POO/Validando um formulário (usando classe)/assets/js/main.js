class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    //Essa função de callback usada na linha abaixo, vai receber um valor que vai ser armazenado no "e" e em seguida passamos esse valor no parâmetro do método handleSubmit.
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaovalida();

    if (camposValidos && senhasValidas) {
      alert("Formulário enviado.");
      this.formulario.submit();
    }

    console.log('Formulário não enviado')
  }

  senhasSaovalida() {
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const reepetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== reepetirSenha.value) {
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.')
      this.criaErro(reepetirSenha, 'Campos senha e repetir senha precisam ser iguais.')
    }  

    if(senha.value.length < 6 || senha.value.length >12) {
      valid = false;

      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres');
    }
  }
  camposSaoValidos() {
    let valid = true;

    for(let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    //No querySelectorAll('.validar'), eu estou pegando todos os campos que tiverem a classe validar
    for(let campo of this.formulario.querySelectorAll('.validar')) {
      //previousElementSibling Significa que estamos pegando o irmão html anterior, ou seja, vamos pegar o label que vem antes do input
      const label = campo.previousElementSibling.innerHTML;


      if(!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if(campo.classList.contains('cpf')) {
        if(!this.validaCPF(campo)) valid = false;
      }

      if(campo.classList.contains('usuario')) {
        if(!this.validaUsuario(campo)) valid = false;
      }
    }

    return valid;
  }

  validaUsuario(campo) {
    
    const usuario = campo.value;
    let valid = true;

    if(usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    if(!usuario.match(/[a-zA-Z0-9]+/g)) {
      this.criaErro(campo, 'nome de usuário precisa conter apenas letra e/ou números.');
      valid = false;
    }

    return true
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if(!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido');
      return false;
    }

    return true
  }

  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div); //Esse método é para passar onde quero inserir o elemento
  }
}

const valida = new ValidaFormulario();
