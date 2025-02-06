import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SelectBox from "../component/SelectBox";

const ProductDetail = () => {
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	console.log(id);
	const [product, setProduct] = useState();
	const getProduct = async () => {
		let url = `http://localhost:5000/products/${id}`;
		let response = await fetch(url);
		let data = await response.json();
		console.log("data", data);
		setLoading(false);
		setProduct(data);
	};
	useEffect(() => {
		getProduct();
	}, []);

	return loading ? (
		<h2>loading</h2>
	) : (
		<div className="product-detail-wr">
			<div className="img-bx">
				<img src={`${product.img}`} alt="" />
			</div>
			<div className="info-bx">
				<div className="tags">
					{product.new && <p className="new">new</p>}
					{product.choice && <p className="choice">choice</p>}
				</div>
				<h2>{product.title}</h2>
				<h3>₩{product.price.toLocaleString(3)}</h3>
				<SelectBox sizes={product.size} />
			</div>
		</div>
	);
};

export default ProductDetail;
