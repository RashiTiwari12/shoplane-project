import { createSlice } from '@reduxjs/toolkit'
const initialState = []
export const cartSlice = createSlice({
    name: 'myCart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            console.log(state, action.payload);
            return [...state, action.payload]
        },
        removeItem: (state, action) => {
            console.log(state, action.payload);
            const idToREmove = action.payload.id;
            const newList = state.filter(item => item.id!=idToREmove)
            return [...newList]
        }
    }
})

export const {addItem,removeItem} = cartSlice.actions;