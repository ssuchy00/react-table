import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ISort } from "./SortSlice" 
import { IFilters } from "./FiltersSlice"

export interface IUser {
    name:string,
    username:string,
    phone:string,
    email:string,
    __filtered__?:0|1
}

interface IUsersState {
    users:Array<IUser>
}

const initialState:IUsersState = {
    users: []
}

const sortFunction = (a:any,b:any,direction:0|1) => {
    if(a<b)return direction==0 ?  1 : -1;
    if(a>b)return direction==0 ?  -1 : 1;
    return 0;
}

export const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state,action:PayloadAction<Array<IUser>>) => {
            state.users = action.payload.map((e,key)=>{
                return {__lp__: key, ...e, __filtered__:0}
            })
 
        },
        sortUsers: (state,action:PayloadAction<ISort>) => {
            state.users = state.users.sort(
                (a,b)=>sortFunction(
                    a[action.payload.key as keyof typeof a],
                    b[action.payload.key as keyof typeof b], action.payload.direction
                )
            )
        },
         
        filterUsers2: (state,action:PayloadAction<Array<IFilters>>)=>{
            state.users = state.users.map((e)=>{return {...e,__filtered__:0}})

            action.payload.map(e=>{
                 
                state.users = state.users.map((u)=>{
                    return {...u, __filtered__: u[e.key as keyof typeof u]?.toString().toLowerCase().includes(e.phrase.toLowerCase()) ? u.__filtered__ : 1 }
                })    
                     
            })
        }
    }
})

export default UserSlice.reducer;
export const {setUsers, sortUsers, filterUsers2}=UserSlice.actions;
