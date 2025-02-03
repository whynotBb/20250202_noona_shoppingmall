import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
	const navigate = useNavigate();
	const showDetail = () => {
		navigate(`/product/${item.id}`);
	};
	return (
		<div id={item.id} className="product-card" onClick={showDetail}>
			<img src={item.img} alt="" />
			{item.choice ? <div className="choice">choice</div> : ""}
			<div>{item.title}</div>
			<div>{item.price}</div>
			<div className="new">new</div>
		</div>
	);
};

export default ProductCard;
