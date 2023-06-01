import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    products:[],
}


export  const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      fetchProductsSuccess: (state, action) => {
        state = action.payload.map(product => ({
          ...product,
          is_favorite: false,
          added_to_cart: false,
        }));
      },
      toggleFavorite: (state, action) => {
        const product = state.find(p => p.id === action.payload);
        if (product) {
          product.is_favorite = !product.is_favorite;
        }
      },
      toggleCart: (state, action) => {
        const product = state.find(p => p.id === action.payload);
        if (product) {
          product.added_to_cart = !product.added_to_cart;
        }
      },
    },
  });
 
  export const { fetchProductsSuccess, toggleFavorite, toggleCart } = productSlice.actions;
