const numPlayers = 2;

const boton__jugador1 = document.querySelector('.controles--boton__jugador1');
const boton__jugador2 = document.querySelector('.controles--boton__jugador2');
const boton__jugador3 = document.querySelector('.controles--boton__jugador3');
const boton__jugador4 = document.querySelector('.controles--boton__jugador4');
const boton__temporizador = document.querySelector('.controles--boton__temporizador');
const contenedor_boton = document.querySelector('.controles--contenedor-boton');
const marcador1 = document.querySelector('.marcador-1');
const marcador2 = document.querySelector('.marcador-2');
const marcador3 = document.querySelector('.marcador-3');
const marcador4 = document.querySelector('.marcador-4');


let jugadorActivado = 0;
const animation_time = 200;
let dice;

switch(numPlayers) {
    case 2:
        boton__jugador3.style.display = 'none';
        boton__jugador4.style.display = 'none';
        boton__jugador1.style.height = '100%';
        boton__jugador2.style.height = '100%';
        break;
    case 3:
        boton__jugador4.style.display = 'none';
        break;
}

boton__jugador1.addEventListener('click',clickJugador1);
boton__jugador2.addEventListener('click',clickJugador2);
boton__jugador3.addEventListener('click',clickJugador3);
boton__jugador4.addEventListener('click',clickJugador4);
boton__temporizador.addEventListener('click',clickCancelar);



// moveToken(marcador1, 2);



function clickJugador1() {
    if(jugadorActivado == 0) {
        jugadorActivado = 1;
        boton__temporizador.innerHTML = 'CANCELAR';
        switch(numPlayers) {
            case 2:
                boton__jugador2.style.display = 'none';
                boton__jugador1.classList.add('aumentar2');
                break;
            case 3:
                boton__jugador2.style.display = 'none';
                boton__jugador3.style.display = 'none';
                boton__jugador1.classList.add('aumentar4');
                break;
            default:
                boton__jugador2.style.display = 'none';
                boton__jugador3.style.display = 'none';
                boton__jugador4.style.display = 'none';
                boton__jugador1.classList.add('aumentar4');
        }
        boton__jugador1.innerHTML = 'JOSE - PEDRO<div class="dice"><div class="side front"></div><div class="side back"></div><div class="side left"></div><div class="side right"></div><div class="side top"></div><div class="side bottom"></div></div>';
        dice = document.querySelector('.dice');
    }
    else {
        throwDice();       
    }
   
}
function clickJugador2() {
    
    if(jugadorActivado == 0) {
        jugadorActivado = 2;
        boton__temporizador.innerHTML = 'CANCELAR';
        contenedor_boton.style.justifyContent = "flex-end"
        switch(numPlayers) {
            case 2:
                boton__jugador1.style.display = 'none';
                boton__jugador2.classList.add('aumentar2');
                break;
            case 3:
                boton__jugador1.style.display = 'none';
                boton__jugador3.style.display = 'none';
                boton__jugador2.classList.add('aumentar4');
                break;
            default:
                boton__jugador1.style.display = 'none';
                boton__jugador3.style.display = 'none';
                boton__jugador4.style.display = 'none';
                boton__jugador2.classList.add('aumentar4');
        }
        boton__jugador2.innerHTML = 'JOSE - PEDRO<div class="dice"><div class="side front"></div><div class="side back"></div><div class="side left"></div><div class="side right"></div><div class="side top"></div><div class="side bottom"></div></div>';
        dice = document.querySelector('.dice');
    }
    else {
        throwDice();
    }

    
}
function clickJugador3() {
    if(jugadorActivado == 0) {

        jugadorActivado = 3;
        boton__temporizador.innerHTML = 'CANCELAR';
        contenedor_boton.style.alignContent = "flex-end"
        switch(numPlayers) {
            case 3:
                boton__jugador2.style.display = 'none';
                boton__jugador1.style.display = 'none';
                boton__jugador3.classList.add('aumentar4');
                break;
            default:
                boton__jugador2.style.display = 'none';
                boton__jugador1.style.display = 'none';
                boton__jugador4.style.display = 'none';
                boton__jugador3.classList.add('aumentar4');
        }
        boton__jugador3.innerHTML = 'JOSE - PEDRO<div class="dice"><div class="side front"></div><div class="side back"></div><div class="side left"></div><div class="side right"></div><div class="side top"></div><div class="side bottom"></div></div>';
        dice = document.querySelector('.dice');
    }
    else {
        throwDice();
    }
}
function clickJugador4() {
    
    if(jugadorActivado == 0) {

        jugadorActivado = 4;
        boton__temporizador.innerHTML = 'CANCELAR';
        contenedor_boton.style.justifyContent = 'flex-end';
        contenedor_boton.style.alignContent = 'flex-end';
    
        switch(numPlayers) {
            default:
                boton__jugador2.style.display = 'none';
                boton__jugador3.style.display = 'none';
                boton__jugador1.style.display = 'none';
                boton__jugador4.classList.add('aumentar4');
        }
        boton__jugador4.innerHTML = 'JOSE - PEDRO<div class="dice"><div class="side front"></div><div class="side back"></div><div class="side left"></div><div class="side right"></div><div class="side top"></div><div class="side bottom"></div></div>';
        dice = document.querySelector('.dice');
    }
    else {
        throwDice();
    }
}

function throwDice() {
    /*
    1 = x-90
    2 = y90
    3 = x180
    4 = y-90
    5 = x90 
    6 = 
    */
    let numeroAleatorio = Math.ceil(Math.random() * 6);
    numeroAleatorio = numeroAleatorio == 0 ? 1 : numeroAleatorio;
    
    switch(numeroAleatorio) {
        case 1:
            document.documentElement.style.setProperty('--gradosX','90deg');
            document.documentElement.style.setProperty('--gradosY','0deg');
            break;
        case 2:
            document.documentElement.style.setProperty('--gradosX','0deg');
            document.documentElement.style.setProperty('--gradosY','90deg');
            break;
        case 3:
            document.documentElement.style.setProperty('--gradosX','180deg');
            document.documentElement.style.setProperty('--gradosY','0deg');
            break;
        case 4:
            document.documentElement.style.setProperty('--gradosX','0deg');
            document.documentElement.style.setProperty('--gradosY','-90deg');
            break;
        case 5:
            document.documentElement.style.setProperty('--gradosX','90deg');
            document.documentElement.style.setProperty('--gradosY','0deg');
            break;
        case 6:
            document.documentElement.style.setProperty('--gradosX','0deg');
            document.documentElement.style.setProperty('--gradosY','0deg');
            break;           
    
    }
    dice.classList.add('lanzarDado');
}

function clickCancelar() {
    switch(jugadorActivado) {
        case 1:
            boton__jugador1.innerHTML = 'JOSE - PEDRO<span></span>';
            switch(numPlayers) {
                case 2:
                    boton__jugador1.classList.add('disminuir2');
                    boton__jugador1.classList.remove('aumentar2')
                    
                    setTimeout(function() {
                        boton__jugador1.classList.remove('disminuir2');
                        boton__jugador2.style.display = 'flex';
                    }, animation_time);
                    break;
                case 3:
                    boton__jugador1.classList.add('disminuir4');
                    boton__jugador1.classList.remove('aumentar4')
                    
                    setTimeout(function() {
                        boton__jugador1.classList.remove('disminuir4');
                        boton__jugador2.style.display = 'flex';
                        boton__jugador3.style.display = 'flex';
                    }, animation_time);
                    break;
                default:
                    boton__jugador1.classList.add('disminuir4');
                    boton__jugador1.classList.remove('aumentar4')
                    
                    setTimeout(function() {
                        boton__jugador1.classList.remove('disminuir4');
                        boton__jugador2.style.display = 'flex';
                        boton__jugador3.style.display = 'flex';
                        boton__jugador4.style.display = 'flex';
                    }, animation_time);
            }
            jugadorActivado = 0;
            break;
        case 2:
            boton__jugador2.innerHTML = 'ANA - MARCO<span></span>';
            switch(numPlayers) {
                case 2:
                    boton__jugador2.classList.add('disminuir2');
                    boton__jugador2.classList.remove('aumentar2')
                    
                    setTimeout(function() {
                        boton__jugador2.classList.remove('disminuir2');
                        boton__jugador1.style.display = 'flex';
                        contenedor_boton.style.justifyContent = "space-between";
                    }, animation_time);
                    break;
                case 3:
                    boton__jugador2.classList.add('disminuir4');
                    boton__jugador2.classList.remove('aumentar4')
                    
                    setTimeout(function() {
                        boton__jugador2.classList.remove('disminuir4');
                        boton__jugador1.style.display = 'flex';
                        boton__jugador3.style.display = 'flex';
                        contenedor_boton.style.justifyContent = "space-between";
                    }, animation_time);
                    break;
                default:
                    boton__jugador2.classList.add('disminuir4');
                    boton__jugador2.classList.remove('aumentar4')
                    
                    setTimeout(function() {
                        boton__jugador2.classList.remove('disminuir4');
                        boton__jugador1.style.display = 'flex';
                        boton__jugador3.style.display = 'flex';
                        boton__jugador4.style.display = 'flex';
                        contenedor_boton.style.justifyContent = "space-between";
                    }, animation_time);
            }
            jugadorActivado = 0;
            break;
        case 3:
            boton__jugador3.innerHTML = 'MATEO - MARIA<span></span>';
            switch(numPlayers) {
                case 3:
                    boton__jugador3.classList.add('disminuir4');
                    boton__jugador3.classList.remove('aumentar4')
                    
                    setTimeout(function() {
                        boton__jugador3.classList.remove('disminuir4');
                        boton__jugador1.style.display = 'flex';
                        boton__jugador2.style.display = 'flex';
                        contenedor_boton.style.alignContent = "space-between";
                    }, animation_time);
                    break;
                default:
                    boton__jugador3.classList.add('disminuir4');
                    boton__jugador3.classList.remove('aumentar4')
                    
                    setTimeout(function() {
                        boton__jugador3.classList.remove('disminuir4');
                        boton__jugador1.style.display = 'flex';
                        boton__jugador2.style.display = 'flex';
                        boton__jugador4.style.display = 'flex';
                        contenedor_boton.style.alignContent = "space-between";
                    }, animation_time);
            }
            jugadorActivado = 0;
            break;
        case 4:
            boton__jugador4.innerHTML = 'ESTEFANI - MAYRA<span></span>';
            switch(numPlayers) {
                default:
                    boton__jugador4.classList.add('disminuir4');
                    boton__jugador4.classList.remove('aumentar4')
                    
                    setTimeout(function() {
                        boton__jugador4.classList.remove('disminuir4');
                        boton__jugador1.style.display = 'flex';
                        boton__jugador2.style.display = 'flex';
                        boton__jugador3.style.display = 'flex';
                        contenedor_boton.style.justifyContent = "space-between";
                        contenedor_boton.style.alignContent = "space-between";

                    }, animation_time);
            }
            jugadorActivado = 0;
            break;
        
    }
    jugadorActivado = 0;
    boton__temporizador.innerHTML = 'INICIAR <span></span>';
}

function moveToken(marcador, numSpaces) {
    
    let position = marcador.getAttribute('pos');
    
    for(let i=0; i<numSpaces; i++) {

        if((position >= 0 && position < 2) || (position > 19 && position < 22) || (position > 28 && position < 32) || (position > 33 && position < 36) || (position > 37 && position < 41)) {
            setTimeout(() => {moveTokenDown(marcador);}, 3200 * i);
        }
        else if((position > 1 && position < 5) || (position > 11 && position < 14) || (position > 31 && position < 34) || (position > 40 && position < 44)) {
            setTimeout(() => {moveTokenLeft(marcador);}, 3200 * i);
        }
        else if((position > 4 && position < 8) || (position > 9 && position < 12) || (position > 13 && position < 17) || (position > 23 && position < 26) || (position > 43 && position < 46)) {
            setTimeout(() => {moveTokenUp(marcador);}, 3200 * i);
        }
        else if((position > 7 && position < 10) || (position > 16 && position < 20) || (position > 21 && position < 24) || (position > 25 && position < 29) || (position > 35 && position < 38)) {
            setTimeout(() => {moveTokenRight(marcador);}, 3200 * i);
        }
        position++;
        marcador.setAttribute('pos', position);
    }
    
}

function moveTokenDown(marcador) {
    marcador.classList.add('moveTokenDown');
    setTimeout(() => {
        marcador.classList.remove('moveTokenDown');
        marcador.style.gridRow = (String)((Number)(getComputedStyle(marcador).gridRowStart) + 1);
    },3000);
    
}
function moveTokenUp(marcador) {
    marcador.classList.add('moveTokenUp');
    setTimeout(function() {
        marcador.classList.remove('moveTokenUp');
        marcador.style.gridRow = (String)((Number)(getComputedStyle(marcador).gridRowStart) - 1);
    }, 3000);
}
function moveTokenLeft(marcador) {
    marcador.classList.add('moveTokenLeft');
    setTimeout(() => {
        marcador.classList.remove('moveTokenLeft');
        marcador.style.gridColumn = (String)((Number)(getComputedStyle(marcador).gridColumnStart) - 1);
    }, 3000);
}
function moveTokenRight(marcador) {
    marcador.classList.add('moveTokenRight');
    setTimeout(() => {
        marcador.classList.remove('moveTokenRight');
        marcador.style.gridColumn = (String)((Number)(getComputedStyle(marcador).gridColumnStart) + 1);
    }, 3000);
}

