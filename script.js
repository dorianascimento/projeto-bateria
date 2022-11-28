// sempre que uma tecla for apertada irá realizar uma função
document.body.addEventListener('keyup', (event)=>{  
    playSound(event.code.toLocaleLowerCase());
})

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    // verificar se foi digitado algo, se sim transforma a string digitada em array / split
    if(song !== '') {
        let songArray = song.split('');
        console.log(songArray);
        playComposition(songArray);
    }
});


// quando for clicado irá pegar a tecla e verificar sem tem o id nela, se tiver irá tocar o som relacionado pela id
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    
    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300);
    }
}

// vai tocar a sequencia digitada de teclas, com uma espera de uma para outra de 250ms
function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}