let initialState = {
  productList: [],
  loading: true,
};
function productReducer(state = initialState, action) {
  console.log("action", action);
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.productList, loading: false };

    default:
      return { ...state };
  }
}
export default productReducer;
