import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SelectBox from "../component/SelectBox";
import { useDispatch, useSelector } from "react-redux";
import { ProductAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { detailLoading, productDetail } = useSelector((state) => state.product);

  // const [loading, setLoading] = useState(true);
  const { id } = useParams();
  //console.log(id);
  // const [product, setProduct] = useState();
  const getProductDetail = () => {
    // let url = `http://localhost:5000/products/${id}`;
    // let response = await fetch(url);
    // let data = await response.json();
    dispatch(ProductAction.getProductDetail(id));
    console.log("productDetail", detailLoading, productDetail);
    //console.log("data", data);
    // setLoading(false);
    // setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return detailLoading ? (
    <h2>loading</h2>
  ) : (
    <div className="product-detail-wr">
      <div className="img-bx">
        <img src={`${productDetail.img}`} alt="" />
      </div>
      <div className="info-bx">
        <div className="tags">
          {productDetail.new && <p className="new">new</p>}
          {productDetail.choice && <p className="choice">choice</p>}
        </div>
        <h2>{productDetail.title}</h2>
        <h3>₩{productDetail.price.toLocaleString(3)}</h3>
        <SelectBox sizes={productDetail.size} />
      </div>
    </div>
  );
};

export default ProductDetail;
