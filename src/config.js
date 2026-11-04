export const GAME_CONFIG = {
    // Cantidad de dinero con la que empieza el jugador una partida nueva
    STARTING_MONEY: 0,
    // Cantidad de dinero que se gana por cada click al comenzar el jueg
    BASE_CLICK_POWER: 1,
    // Cantidad de comida preparada que suma cada click al comenzar el juego
    BASE_DISH_VALUE: 1,

    // Multiplicador de coste por cada unidad de ingrediente que se compre
    COST_INCREASE_FACTOR: 1.15,
};

export const INGREDIENTS_CONFIG = [
    {
        id: 'salt',
        name: 'Sal',
        icon: '🧂',
        baseCost: 15,
        baseIncome: 0.5,   // Esto indica que cada unidad de sal genera 0.5€ por segundo
        description: 'Realza el sabor básico de los platos.',
    },
    {
        id: 'garlic',
        name: 'Ajo',
        icon: '🧄',
        baseCost: 100,
        baseIncome: 4,   // Esto indica que cada unidad de ajo genera 4€ por segundo
        description: 'Añade un sabor intenso y aromático a los platos.',
    },
    {
        id: 'tomato',
        name: 'Tomate de la huerta',
        icon: '🍅',
        baseCost: 500,
        baseIncome: 10,   // Esto indica que cada unidad de tomate genera 10€ por segundo
        description: 'Aporta frescura y vitaminas a los platos.',
    }
]
