
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { cartSlice } from './redux/cartSlice';
import { favouriteSlice } from './redux/favouriteSlice';
import { productSlice } from './redux/productSlice';

const rootReducer = combineReducers({
  myCart: cartSlice.reducer,
  myFavouritePage: favouriteSlice.reducer,
 products:productSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});
