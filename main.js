function tocaSom(selectorAudio){
    const elemento = document.querySelector(selectorAudio);

    if(elemento && elemento.localName === 'audio'){
            elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

//while(contador < ListaDeTeclas.length) //enquanto {
for(let contador = 0;contador < ListaDeTeclas.length;contador++){  

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //console.log(instrumento);
    const idaudio = `#som_${instrumento}`; //Template String

    tecla.onclick = function(){
        tocaSom(idaudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}











