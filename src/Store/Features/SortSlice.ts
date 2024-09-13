import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ISort {
    key:string,
    direction: 0|1
}

interface ISortState {
    sort:ISort, 
}

const initialState:ISortState = {
    sort: {
        direction: 0,
        key: ""
    }
}

export const SortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        setSort: (state,action:PayloadAction<{key:string}>) =>{
            if(action.payload.key==state.sort.key)
            {
                state.sort.direction=state.sort.direction==1 ? 0 : 1
            } else {
                state.sort.direction = 1;
            }
            state.sort.key = action.payload.key
            
        }
    }
})

export default SortSlice.reducer;
export const {setSort}=SortSlice.actions;