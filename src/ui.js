// 1. Caché de referencias a los elementos del DOM
const moneyEl = document.getElementById('money-display');
const dishesEl = document.getElementById('dishes-display');
const incomeEl = document.getElementById('income-display');
const cookBtn = document.getElementById('cook-btn');

// 2. Función de formateo numérico
function formatCurrency(num) {
  return `${num.toLocaleString('es-ES', { 
    minimumFractionDigits: 0, 
    maximumFractionDigits: 2 
  })} €`;
}

// 3. Inicialización del botón de cocinado
export function initUI(onCookAction) {
  cookBtn.addEventListener('click', () => {
    onCookAction();
  });
}

// 4. Refresco de los contadores en pantalla
export function updateHUD(state) {
  moneyEl.textContent = formatCurrency(state.money);
  dishesEl.textContent = state.totalDishesCooked.toLocaleString('es-ES');
  incomeEl.textContent = `${formatCurrency(state.passiveIncomePerSecond)}/s`;
}