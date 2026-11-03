import { GAME_CONFIG } from './config.js';

export const state = {
  money: GAME_CONFIG.STARTING_MONEY,
  totalDishesCooked: 0,
  clickPower: GAME_CONFIG.BASE_CLICK_POWER,
  passiveIncomePerSecond: 0,
};

export function registerManualCook() {
  state.money += state.clickPower;
  state.totalDishesCooked += GAME_CONFIG.BASE_DISH_VALUE;
}

export function addPassiveMoney(amount) {
  state.money += amount;
}