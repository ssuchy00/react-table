import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { act } from "react"

export interface IFilters {
    key:string,
    phrase:string
}

interface IFiltersState {
    filters: Array<IFilters>
}

const initialState:IFiltersState = {
    filters: []
}

export const FiltersSlice = createSlice({
    name:"filters",
    initialState,
    reducers: {
        setFilters: (state, action:PayloadAction<{key:string, phrase:string}>)=>{
            state.filters = state.filters.filter(f=>f.key!=action.payload.key)
            state.filters = [...state.filters, {key:action.payload.key, phrase:action.payload.phrase}]
        },
        addFilter: (state, action:PayloadAction<{key:string, phrase:string}>)=> {
            if(state.filters.filter(f=>f.key==action.payload.key).length==0)
                state.filters.push({key:action.payload.key, phrase:action.payload.phrase})
        },
        removeFilter:  (state, action:PayloadAction<{key:string, phrase:string}>)=> {
            state.filters = state.filters.filter(f=>f.key!=action.payload.key)
        }
    }
})

export default FiltersSlice.reducer
export const {setFilters, addFilter, removeFilter} = FiltersSlice.actions 