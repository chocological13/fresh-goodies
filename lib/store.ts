import { createSlice } from "@reduxjs/toolkit";
import { ShoppingCart } from "@/types/cart";

const shoppingCart = new ShoppingCart();

const initialState = {
  cart: shoppingCart.items,
  favoriteProduct: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { product, quantity } = action.payload;
      const { cart } = state;
      cart.addItem(product, quantity);
      //   const existingItem = state.cart.find(
      //     (item) => item.product.id === product.id,
      //   );
      //   if (existingItem) {
      //     existingItem.quantity += quantity;
      //   } else {
      //     state.cart.push({ product, quantity });
      //   }
    },
  },
});
