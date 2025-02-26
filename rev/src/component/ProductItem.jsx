import {useDispatch} from "react-redux";
import {addToCartAction, deleteFromCart} from "../store/action/cart.js";

const ProductItem = ({product, qty = 0, isDeletable = false}) => {
	
	const dispatch = useDispatch()
	
	const handleClick = () => {
		dispatch(addToCartAction(product))
	}
	
	const handleDelete = () => {
		dispatch(deleteFromCart(product))
	}
	
	return (
		<div className={"productItem"} style={{border: "1px solid blue"}}>
			<img src={product.image} alt={`image ${product.title}`} />
			<div>
				<h4>{product.title}</h4>
				<p>{product.description}</p>
				<span>{product.price}<small>€</small></span>
				{
					isDeletable && <span>quantité : {qty}</span>
				}
			</div>
			{
				isDeletable ? <button onClick={handleDelete}>{qty === 1 ? "Supprimer du panier" : "Réduire la quantité"}</button> : <button onClick={handleClick}>Ajouter au panier</button>
			}
		</div>
	)
}

export default ProductItem