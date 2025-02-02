import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState();
  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log("data", data, productList);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-wr">
      {productList?.map((item, idx) => (
        <ProductCard key={idx} item={item} />
      ))}
    </div>
  );
};

export default ProductAll;
