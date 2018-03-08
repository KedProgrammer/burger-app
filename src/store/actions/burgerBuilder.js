import * as actionTypes from './actionsTypes'
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_BURGUER,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_BURGUER,
        name: name
    }
}
export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFail = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAIL
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://burguer-app.firebaseio.com/Ingredients.json')
		.then(response => {
		dispatch(setIngredients(response.data))
        })
        .catch(error => {
                dispatch(fetchIngredientsFail())
        })

    }
}