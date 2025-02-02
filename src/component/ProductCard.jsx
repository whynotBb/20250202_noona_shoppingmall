const ProductCard = ({ item }) => {
  // console.log(item);
  return (
    <div id={item.id} className="product-card">
      <img src={item.img} alt="" />
      {item.choice ? <div className="choice">choice</div> : ""}
      <div>{item.title}</div>
      <div>{item.price}</div>
      <div className="new">new</div>
    </div>
  );
};

export default ProductCard;
