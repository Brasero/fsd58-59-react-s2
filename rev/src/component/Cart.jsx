import {useSelector} from "react-redux";
import {selectCart} from "../store/selector/cart-selector.js";
import ProductItem from "./ProductItem.jsx";

const Cart = () => {
	
	const cart = useSelector(selectCart)
	console.log(cart)
	
	return (
		<div>
			{
				cart.length === 0 ?
					<span>Aucun article dans le panier</span>
					:
					cart.map((product, i) => <ProductItem isDeletable={true} qty={product.qty} product={product.product} key={i} />)
			}
		</div>
	)
}

export default Cart