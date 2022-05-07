import { combineReducers } from "@reduxjs/toolkit";
import { NavBarSlice } from "./slices/nav.slice";

export const RootReducer = combineReducers({
    navbarDisplay: NavBarSlice.reducer
});


export type RootState = ReturnType<typeof RootReducer>;

export const getNavBarDisplay = (state: RootState)=> state.navbarDisplay;