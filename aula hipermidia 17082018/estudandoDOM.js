

function teste(){
    texto1 = document.getElementById('nome');
    label = document.getElementById('texto');
    label.innerHTML += texto1.value;
    //document.append(h1);
    //h1 = document.getElementById('id')

}

elemento = document.getElementById('botao');
elemento.addEventListener('click',teste,false);
