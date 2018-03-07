import * as actionTypes from '../actions/actionsTypes'

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
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
        case actionTypes.SET_INGREDIENTS:
        return {
            ...stat,
            ingredients: action.ingredients
        }
        case actionTypes.FETCH_INGREDIENTS_FAIL:
        return {
            ...stat,
            error: true
        }
        default:
           return stat;
    }
}

export default reducer;