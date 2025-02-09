import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { authenticate } = useSelector((state) => state.auth);
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
