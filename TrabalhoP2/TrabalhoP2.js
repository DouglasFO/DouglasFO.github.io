function limpa(){
    document.getElementById('nome').value = '';


}

elemento = document.getElementById('limpar');
elemento.addEventListener('click',limpa,false);
