import { state, addPassiveMoney } from './state.js';
import { updateHUD } from './ui.js';    

let timestamp = 0;

export function gameLoop(currentTimestamp) {
    if(!lastTimestamp) lastTimestamp = currentTimestamp;

    // Calculamos el tiempo transcurrido (Delta time) en segundos
    const dt = (currentTimestamp - lastTimestamp) / 1000;
    lastTimestamp = currentTimestamp;

    // Actualizamos la logica del juego en funcion del tiempo transcurrido
    if(state.passiveIncomePerSecond > 0) {
        addPassiveMoney(state.passiveIncomePerSecond * dt);
    }

    // Reflejamos los cambios en el DOM
    updateHUD(state);

    // Solicitamos al navegador el siguiente fotograma
    requestAnimationFrame(gameLoop);
}