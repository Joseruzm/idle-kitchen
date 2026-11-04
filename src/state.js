import { GAME_CONFIG, INGREDIENTS_CONFIG } from './config.js';

export const state = {
  money: GAME_CONFIG.STARTING_MONEY,
  totalDishesCooked: 0,
  clickPower: GAME_CONFIG.BASE_CLICK_POWER,
  passiveIncomePerSecond: 0,
  // Inventario de cantidades de cada ingrediente
  ingredients: {
    salt: 0,
    garlic: 0,
    tomato: 0,
  },
};

export function registerManualCook() {
  state.money += state.clickPower;
  state.totalDishesCooked += GAME_CONFIG.BASE_DISH_VALUE;
}

export function addPassiveMoney(amount) {
  state.money += amount;
}

// Calcula el precio de la siguiente unidad de un ingrediente
export function getIngredientCost(ingredientId) {
  const config = INGREDIENTS_CONFIG.find(item => item.id === ingredientId);
  if (!config) return 0;

  const currentCount = state.ingredients[ingredientId] || 0;
  return Math.floor(config.baseCost * Math.pow(GAME_CONFIG.COST_INCREASE_FACTOR, currentCount));
}

// Recalcula el total de dinero generado por segundo
export function recalculatePassiveIncome() {
  let totalIncome = 0;

  for (const config of INGREDIENTS_CONFIG) {
    const count = state.ingredients[config.id] || 0;
    totalIncome += count * config.baseIncome;
  }

  state.passiveIncomePerSecond = totalIncome;
}

// Ejecuta la compra de un ingrediente si hay fondos suficientes
export function buyIngredient(ingredientId) {
  const cost = getIngredientCost(ingredientId);

  if (state.money >= cost) {
    state.money -= cost;
    state.ingredients[ingredientId] = (state.ingredients[ingredientId] || 0) + 1;
    recalculatePassiveIncome();
    return true; // Compra exitosa
  }

  return false; // Fondos insuficientes
}