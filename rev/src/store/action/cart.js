import {ADD_TO_CART, DELETE_FROM_CART} from "../action-type/cart.js";

export const addToCartAction = (product) => {
	return {
		type: ADD_TO_CART,
		payload: product
	}
}

export const deleteFromCart = (product) => {
	return {
		type: DELETE_FROM_CART,
		payload: product
	}
}