import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { ProductAction } from "../redux/actions/productAction";

const ProductAll = () => {
  // const [loading, setLoading] = useState(true);
  // const [productList, setProductList] = useState();

  // url q 값을 가져온다
  let [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const { productList, loading } = useSelector((state) => state.product);
  const getProducts = () => {
    // q값이 있으면 q, 없으면 ''
    let searchQuery = query.get("q") || "";
    console.log("searchQuery", searchQuery);

    // api 호출은 미들웨어로 이동하고, 여기서는 미들웨어 함수를 호출한다
    // let url = `http://localhost:5000/products?q=${searchQuery}`;
    // let response = await fetch(url);
    // let data = await response.json();
    // setLoading(false);
    // setProductList(data);
    dispatch(ProductAction.getProducts(searchQuery));
  };
  useEffect(() => {
    console.log("getProducts 실행");
    getProducts();
  }, [query]);

  return loading ? (
    <div>loading</div>
  ) : (
    <div className="product-wr">
      {productList?.length === 0 ? (
        <div className="empty_data">검색 결과가 없습니다.</div>
      ) : (
        productList?.map((item, idx) => <ProductCard key={idx} item={item} />)
      )}
    </div>
  );
};

export default ProductAll;
