function validaEmail(a){
    //emaild = document.getElementById('email1').value;
    emaild = a;
    contA = 0;
    contCOM = 0;
    teste = true;
    for(x=0;x<emaild.length;x++){
        if(emaild[x]=='@'){
          contA = contA+1;
          if(emaild[x-1]==undefined){
              alert("email inválido! Falta o nome de usuário do e-mail!");
              teste = false;
              return teste;
          }

          if(emaild[x+1]==undefined){
              alert("email inválido! Falta o provedor do e-mail e o '.com'!");
              teste = false;
              return teste;
          }
        }

        if(emaild[x]=='.'){

            if((emaild[x+1]==undefined)||(emaild[x+2]==undefined)){
                  alert("email inválido! Falta de 2 ou mais caracteres depois do '.'!");
                  teste = false;
                  return teste;
            }
            if(emaild[x+1]=='c'){
                if(emaild[x+2]=='o'){
                  if(emaild[x+3]=='m'){
                      contCOM = contCOM +1;
                      if(emaild[x-1]==undefined){
                          alert("email inválido! Falta o nome de usuário do e-mail e o provedor do e-mail!");
                          teste = false;
                          return teste;
                      }
                      if(emaild[x-1]=='@'){
                          alert("email inválido! Falta o provedor do e-mail ");
                          teste = false;
                          return teste;
                      }

                  }
                }
            }
        }



    }

    if(emaild == ''){
      teste = false;
      return false;
    }
    if((contA==1)&&(contCOM==1)){
        //alert("email válido!");
    }
    else{

        if(contA!=1){
            alert("email inválido! Falta o '@'!");
        }

        if(contCOM!=1){
            alert("email inválido! Falta o '.com'!");
        }
    }
    return teste;
}

function emailIgual(){
    emailUm = document.getElementById('email1').value;
    emailDois = document.getElementById('email2').value;
    teste2 = false;
    if(emailUm == emailDois){
      teste2 = true;
    }
    return teste2;

}

function calculaData(){
  var msecPerMinute = 1000*60;
  var msecPerHour = msecPerMinute*60;
  var msecPerDay = msecPerHour*24;

  var dateChegada = new Date(document.getElementById('dataChegada').value);
  var dateSaida = new Date(document.getElementById('dataSaida').value);

  var totalDias = (dateSaida.getTime())-(dateChegada.getTime());

  var days = Math.floor(totalDias / msecPerDay );
  //totalDias = totalDias - (days * msecPerDay );

  //alert(days);
  return days;
}

function validarTotal(){
    if((validaEmail(document.getElementById('email1').value)==true)&&(validaEmail(document.getElementById('email2').value)==true)&&(emailIgual()==true)&&((document.getElementById('numHospedes').value)!='')&&((document.getElementById('numQuartos').value)!='')&&((document.getElementById('dataChegada').value)!='')&&((document.getElementById('dataSaida').value)!='')){
        //alert("funciona");
        valor = 0;
        if((document.getElementById('numHospedes').value)>1){
          valor = eval(60*((document.getElementById('numHospedes').value)-1));
        }
        //valor = eval(60*document.getElementById('numHospedes').value);

        /*if((document.getElementById('numQuartos').value)>=1){
          diarias = eval(149*document.getElementById('numQuartos').value);
        }*/
        hospedes = eval(valor+149);
        total = eval(hospedes*document.getElementById('numQuartos').value);
        totalFinal = total*calculaData();
        alert("Total: "+totalFinal);

    }
    else {
        alert("Algum campo está sem preencher ou preenchido errado!");
    }
}

var Vemail = document.getElementById('reservar');
Vemail.addEventListener('click',validarTotal,false);
