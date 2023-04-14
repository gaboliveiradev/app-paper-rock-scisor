var elementosPlayer = document.querySelectorAll('.player-options div > img'); // Pegando todas as div dentro de .player-options
var elementosOpponent = document.querySelectorAll('.opponent-options div > img');
var playerOpt = "";
var opponentOpt = "";

var info = document.querySelector('.info');

for(var i = 0; i < elementosPlayer.length; i++) {
    elementosPlayer[i].addEventListener('click', (t)=>{
        resetOpacityPlayer();
        resetOpacityOpponent();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        opponentPlay();
    });
}

function opponentPlay() {
    // O Math.random() me retorna um número entre 0 e 1.
    // O Math.floor() arredonda o resultado do Math.random();
    let rand = Math.floor(Math.random() * 3);

    for(var i = 0; i < elementosOpponent.length; i++) {
        if(i == rand) {
            elementosOpponent[i].style.opacity = 1;
            opponentOpt = elementosOpponent[i].getAttribute('opt');
        }
    }

    verificarGanhador();
}

function resetOpacityPlayer() {
    for(var i = 0; i < elementosPlayer.length; i++) {
        elementosPlayer[i].style.opacity = 0.3
    }
}

function resetOpacityOpponent() {
    for(var i = 0; i < elementosOpponent.length; i++) {
        elementosOpponent[i].style.opacity = 0.3;
    }
}

function verificarGanhador() {
    if(playerOpt == opponentOpt) exibirMsg('<i class="bi bi-info-circle-fill"></i> O JOGO EMPATOU!');
    if(playerOpt == "rock" && opponentOpt == "paper") exibirMsg('<i class="bi bi-trophy-fill"></i> PEDRA X PAPEL - O COMPUTADOR VENCEU!');
    if(playerOpt == "rock" && opponentOpt == "scisor") exibirMsg('<i class="bi bi-trophy-fill"></i> PEDRA X TESOURA - VOCÊ VENCEU!');
    if(playerOpt == "paper" && opponentOpt == "rock") exibirMsg('<i class="bi bi-trophy-fill"></i> PAPEL X PEDRA - VOCÊ VENCEU!');
    if(playerOpt == "paper" && opponentOpt == "scisor") exibirMsg('<i class="bi bi-trophy-fill"></i> PAPEL X TESOURA - O COMPUTADOR VENCEU!');
    if(playerOpt == "scisor" && opponentOpt == "rock") exibirMsg('<i class="bi bi-trophy-fill"></i> TESOURA X PEDRA O COMPUTADOR VENCEU!');
    if(playerOpt == "scisor" && opponentOpt == "paper") exibirMsg('<i class="bi bi-trophy-fill"></i> TESOURA X PAPEL VOCÊ VENCEU!');
}

function exibirMsg(msg){
    info.innerHTML = msg;
    info.style.display = "block";

    /*setTimeout(()=>{
        info.style.display = "none";
    },5000);*/
}