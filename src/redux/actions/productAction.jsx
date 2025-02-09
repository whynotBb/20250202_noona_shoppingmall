export const getProducts = (searchQuery) => {
  return async (dispatch, getState) => {
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { productList: data } });
    // setLoading(false);
    // setProductList(data);
  };
};

export const ProductAction = { getProducts };
