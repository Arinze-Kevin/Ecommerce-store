import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        deleteProduct: (state, action) => {
            state.quantity -= 1
            state.total = 0
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload.id), 1
            )
        },
        deleteAllProducts: (state, action) => {
            state.quantity = 0
            state.total = 0
            state.products = 0
        }
    }
})

export const { addProduct, deleteProduct, deleteAllProducts } = cartSlice.actions;
export default cartSlice.reducer;