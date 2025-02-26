import {product} from '../data/product.js';
import ProductItem from "./ProductItem.jsx";
import "./productList.css";

const ProductList = () => {
	
	return (
		<div className={"productList"}>
			{
				product.map((product, i) => <ProductItem key={i} product={product} />)
			}
		</div>
	)
}

export default ProductList