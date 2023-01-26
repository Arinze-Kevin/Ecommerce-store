import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            // state.total += action.payload.price * action.payload.quantity;
        },
        deleteProduct: (state, action) => {
            state.quantity -= 1
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload.id), 1
            )
        }
    }
})

export const { addProduct, deleteProduct } = orderSlice.actions;
export default orderSlice.reducer;