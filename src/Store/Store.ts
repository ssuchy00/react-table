import { configureStore } from "@reduxjs/toolkit";
import {SortSlice} from "./Features/SortSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { UserSlice } from "./Features/UsersSlice"; 
import { FiltersSlice } from "./Features/FiltersSlice";

export const store = configureStore({
    reducer: {
        sort:SortSlice.reducer,
        users:UserSlice.reducer, 
        filters:FiltersSlice.reducer
    }
})

export const useAppDispatch:()=>typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector