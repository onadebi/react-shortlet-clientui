import { createSlice } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

interface IInitNavState{
    value: boolean;
    path: string;
}

const initialState = {value : false} as IInitNavState;

export const NavBarSlice = createSlice({
    initialState,
    name: 'navbarDisplay',
    reducers:{
        ShowSearchBar(state){
            const location = useLocation();
            alert(location.pathname)
            if(location.pathname !== '/'){
                state.value = false;
                state.path = location.pathname;
                return state;
            }
            else{
                state.value = true;
                return state;
            }
        }
    }
})