import {ADD_TO_CART, DELETE_FROM_CART} from "../action-type/cart.js";

const initialState = {
	cartArray: []
}

const addToCart = (state, product) => {
	const index = state.cartArray.findIndex((prod) => prod.product.title === product.title)
	const newArray = [...state.cartArray]
	if (index >= 0) {
		newArray[index].qty += 1;
	} else {
		newArray.push({
			product,
			qty: 1
		})
	}
	return newArray
}

const removeFromCartOrDecrement = (state, product) => {
	const index = state.cartArray.findIndex((prod) => prod.product.title === product.title)
	const newArray = [...state.cartArray];
	
	if (newArray[index].qty === 1) {
		newArray.splice(index, 1)
	} else {
		newArray[index].qty -= 1
	}
	return newArray
}

const cartReducer = (state = initialState, action) => {
	
	switch (action.type) {
		
		case ADD_TO_CART:
			return {
				...state,
				cartArray: addToCart(state, action.payload)
			}
		
		case DELETE_FROM_CART:
			return {
				...state,
				cartArray: removeFromCartOrDecrement(state, action.payload)
			}
			
		default:
			return state;
	}
}

export default cartReducer;