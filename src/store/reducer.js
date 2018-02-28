import * as actionTypes from './actions'

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
}

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 1
}


const reducer = (stat = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_BURGUER:
            return {
                ...stat,
                ingredients: {
                    ...stat.ingredients,
                    [action.ingredientName]: stat.ingredients[action.ingredientName] + 1
                },
                totalPrice: stat.totalPrice + INGREDIENT_PRICES[action.ingredientName]
                
            }
           
        case actionTypes.REMOVE_BURGUER:
            return {
                ...stat,
                ingredients: {
                    ...stat.ingredients,
                    [action.ingredientName]: stat.ingredients[action.ingredientName] - 1
                },
                totalPrice: stat.totalPrice - INGREDIENT_PRICES[action.ingredientName]

            }
        default:
           return stat;
    }
}

export default reducer;