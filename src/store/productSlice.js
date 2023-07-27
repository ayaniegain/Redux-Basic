import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.data = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});
// export const { fetchProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

export const getProducts = createAsyncThunk("product/get", async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    console.log("result",result);
    return result;
  });
