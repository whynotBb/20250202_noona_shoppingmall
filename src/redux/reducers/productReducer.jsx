let initialState = {
  productList: [],
  loading: true,
  detailLoading: true,
  productDetail: {},
};
function productReducer(state = initialState, action) {
  console.log("action", action);
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.productList, loading: false };
    case "GET_PRODUCTDETAIL_SUCCESS":
      console.log("here", payload);

      return { ...state, productDetail: payload.productDetail, detailLoading: false };
    default:
      return { ...state };
  }
}
export default productReducer;
