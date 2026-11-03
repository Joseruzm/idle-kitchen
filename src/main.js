// Este fichero es el punto de entrada de nuestra aplicacion.
// Importa las funciones y variables necesarias para iniciar el bucle del juego y las conecta

import { state, registerManualCook } from './state.js';
import { initUI, updateHUD } from './ui.js';
import { gameLoop } from './loop.js';

// Conexion entre la accion del jugador y la mutacion del estado
function handleCook() {
    registerManualCook();
    updateHUD(state);
}

// Vinculamos los eventos de la interfaz
initUI(handleCook);

// Renderizado inicial del HUD
updateHUD(state);

// Arrancamos el motor temporal del juego
requestAnimationFrame(gameLoop);