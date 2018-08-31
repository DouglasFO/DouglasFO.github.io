

function b1(){
    texto1 = document.getElementById('calc-output');
    if(texto1.textContent == '0')
    {
        texto1.textContent = '1';
    }
    else{
      texto1.textContent += '1';
    }


}

elemento = document.getElementById('button-1');
elemento.addEventListener('click',b1,false);

function b2(){
    texto1 = document.getElementById('calc-output');
    if(texto1.textContent == '0')
    {
        texto1.textContent = '2';
    }
    else{
      texto1.textContent += '2';
    }


}

elemento = document.getElementById('button-2');
elemento.addEventListener('click',b2,false);

function b3(){
    texto1 = document.getElementById('calc-output');
    if(texto1.textContent == '0')
    {
        texto1.textContent = '3';
    }
    else{
      texto1.textContent += '3';
    }


}

elemento = document.getElementById('button-3');
elemento.addEventListener('click',b3,false);

function b4(){
    texto1 = document.getElementById('calc-output');
    if(texto1.textContent == '0')
    {
        texto1.textContent = '4';
    }
    else{
      texto1.textContent += '4';
    }


}

elemento = document.getElementById('button-4');
elemento.addEventListener('click',b4,false);

function b5(){
    texto1 = document.getElementById('calc-output');
    if(texto1.textContent == '0')
    {
        texto1.textContent = '5';
    }
    else{
      texto1.textContent += '5';
    }


}

elemento = document.getElementById('button-5');
elemento.addEventListener('click',b5,false);

function b6(){
    texto1 = document.getElementById('calc-output');
    if(texto1.textContent == '0')
    {
        texto1.textContent = '6';
    }
    else{
      texto1.textContent += '6';
    }


}

elemento = document.getElementById('button-6');
elemento.addEventListener('click',b6,false);

function b7(){
    texto1 = document.getElementById('calc-output');
    if(texto1.textContent == '0')
    {
        texto1.textContent = '7';
    }
    else{
      texto1.textContent += '7';
    }


}

elemento = document.getElementById('button-7');
elemento.addEventListener('click',b7,false);

function b8(){
    texto1 = document.getElementById('calc-output');
    if(texto1.textContent == '0')
    {
        texto1.textContent = '8';
    }
    else{
      texto1.textContent += '8';
    }


}

elemento = document.getElementById('button-8');
elemento.addEventListener('click',b8,false);

function b9(){
    texto1 = document.getElementById('calc-output');
    if(texto1.textContent == '0')
    {
        texto1.textContent = '9';
    }
    else{
      texto1.textContent += '9';
    }


}

elemento = document.getElementById('button-9');
elemento.addEventListener('click',b9,false);

function b0(){
    texto1 = document.getElementById('calc-output');
    if(texto1.textContent == '0')
    {
        texto1.textContent = '0';
    }
    else{
      texto1.textContent += '0';
    }


}

elemento = document.getElementById('button-0');
elemento.addEventListener('click',b0,false);

function bC(){
    texto1 = document.getElementById('calc-output');
    texto1.textContent = '0';



}

elemento = document.getElementById('button-C');
elemento.addEventListener('click',bC,false);

function bMais(){
    texto1 = document.getElementById('calc-output');
    var tam = texto1.textContent.length;
    if(texto1.textContent[tam-1] != '+')
    {
        texto1.textContent += '+';
    }
}

elemento = document.getElementById('button-+');
elemento.addEventListener('click',bMais,false);

function bMenos(){
    texto1 = document.getElementById('calc-output');
    var tam = texto1.textContent.length;
    if(texto1.textContent[tam-1] != '-')
    {
        texto1.textContent += '-';
    }

}

elemento = document.getElementById('button--');
elemento.addEventListener('click',bMenos,false);

function bMulti(){
    texto1 = document.getElementById('calc-output');
    var tam = texto1.textContent.length;
    //alert(tam);
    if(texto1.textContent[tam-1] != '*')
    {
        texto1.textContent += '*';
    }
}

elemento = document.getElementById('button-*');
elemento.addEventListener('click',bMulti,false);

function bDiv(){
    texto1 = document.getElementById('calc-output');
    var tam = texto1.textContent.length;
    if(texto1.textContent[tam-1] != '/')
    {
        texto1.textContent += '/';
    }


}

elemento = document.getElementById('button-/');
elemento.addEventListener('click',bDiv,false);

function bIgual(){
    texto1 = document.getElementById('calc-output');
    if(texto1.textContent == '0')
    {
      texto1.textContent = '0';
    }
    else{
      var result = eval(texto1.textContent);
      //alert(result);
      texto1.textContent = result;
      //texto1.textContent += '-';
    }


}

elemento = document.getElementById('button-=');
elemento.addEventListener('click',bIgual,false);
