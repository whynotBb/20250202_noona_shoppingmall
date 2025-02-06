import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { useNavigate } from "react-router-dom";

const ProductAll = ({ search }) => {
	const navigate = useNavigate();
	const [productList, setProductList] = useState();
	const getProducts = async () => {
		console.log("getProducts - search", search);

		let queryUrl = search === "" ? "" : `?q=${search}`;
		let url = `http://localhost:5000/products${queryUrl}`;
		let response = await fetch(url);
		let data = await response.json();
		setProductList(data);
		navigate("/");
		console.log("data", data, productList);
	};
	useEffect(() => {
		console.log("getProducts 실행");

		getProducts();
	}, [search]);

	return (
		<div className="product-wr">
			{productList?.map((item, idx) => (
				<ProductCard key={idx} item={item} />
			))}
		</div>
	);
};

export default ProductAll;
