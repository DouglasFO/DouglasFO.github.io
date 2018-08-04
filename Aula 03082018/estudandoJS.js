function palindromo(){
    var palavra = prompt();
    y = palavra.length-1;
    for(x=0;x<palavra.length;x++){

        if(palavra[x]==palavra[y]){
            teste = 1;
        }
        else {
            teste = 0;
        }
        y = y-1;
    }


    if (teste == 1){
        alert("É palindromo!");
    }
    else{
        alert("Não é palindromo");
    }
}

function fatorial(){
    numero = prompt();
    numerofat = numero;
    for(x=numero-1;x>0;x--){
        numerofat = numerofat*x;
    }

    alert(numerofat);
}

function email(){
    emaild = prompt();
    contA = 0;
    contCOM = 0;
    for(x=0;x<emaild.length;x++){
        if(emaild[x]=='@'){
          contA = contA+1;
          if(emaild[x-1]==undefined){
              alert("email inválido! Falta o nome de usuário do e-mail!");
              return;
          }

          if(emaild[x+1]==undefined){
              alert("email inválido! Falta o provedor do e-mail e o '.com'!");
              return;
          }
        }

        if(emaild[x]=='.'){

            if((emaild[x+1]==undefined)||(emaild[x+2]==undefined)){
                  alert("email inválido! Falta de 2 ou mais caracteres depois do '.'!");
                  return;
            }
            if(emaild[x+1]=='c'){
                if(emaild[x+2]=='o'){
                  if(emaild[x+3]=='m'){
                      contCOM = contCOM +1;
                      if(emaild[x-1]==undefined){
                          alert("email inválido! Falta o nome de usuário do e-mail e o provedor do e-mail!");
                          return;
                      }
                      if(emaild[x-1]=='@'){
                          alert("email inválido! Falta o provedor do e-mail ");
                          return;
                      }

                  }
                }
            }
        }



    }
    if((contA==1)&&(contCOM==1)){
        alert("email válido!");
    }
    else{

        if(contA!=1){
            alert("email inválido! Falta o '@'!");
        }

        if(contCOM!=1){
            alert("email inválido! Falta o '.com'!");
        }
    }
}
