import { IState } from "@/Types/reduxInterfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TProducts } from "@/Types";

const initialState: IState = {
    chooseProduct: {
        CPU: null,
        RAM: null,
        Storage: null,
        Motherboard: null,
        PSU: null,
        Monitor: null,
        Other: null,
    }
}

export const builderSlice = createSlice({
    name: "pcBuilder",
    initialState,
    reducers: {
        addProduct: (state, action:PayloadAction<{category:string; product:TProducts}>) => {
            state.chooseProduct[action.payload.category] = action.payload.product;
        },
        removeProduct: (state, action:PayloadAction<string>) => {
            state.chooseProduct[action.payload] = null;
        },
        cleanBuilder: (state) => {
            state.chooseProduct = {};
        }
    }
})

export const { addProduct, removeProduct, cleanBuilder } = builderSlice.actions;
export default builderSlice.reducer;