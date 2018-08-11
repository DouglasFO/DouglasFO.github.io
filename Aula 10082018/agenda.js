class Agenda{
  constructor(Contato){
      this.Contato = Contato;
  }

}

class Contato{
    constructor(Pessoa,Telefone,Email){
        //this.Pessoa = Pessoa;contato.Pessoa('ROnaldo', "amaral")
        this.Pessoa = Pessoa;
        this.Telefone = Telefone;
        this.Email = Email;

    }

    /*setPesso(){
      new Pessoa
    }contato.Pessoa('ROnaldo', "amaral")*/

}


class Pessoa{
    constructor(nome,sobrenome,data){
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.data = data;
    }
}

class Telefone{
  constructor(numero){
      this.numero = numero;
  }
}


class Email{
  constructor(email){
    this.email = email;
  }
}

tel1 = new Telefone("997445566");
em1 = new Email("doug@hotmail.com");
pes1 = new Pessoa("Doug","F","08/06/1990");

c1 = new Contato(pes1,em1,pes1);

ag = new Agenda(c1);

console.log(ag);
