import React, { useEffect } from "react";
import TableHeader from "./TableHeader";
import { columnNames } from "../App";
import { useAppSelector } from "../Store/Store";
import { useDispatch } from "react-redux";
import { setUsers } from "../Store/Features/UsersSlice"; 
import TableBody from "./TableBody";
import APIHandler from "../Functions/APIHandler";

const Table = () => {

    const users = useAppSelector(state=>state.users.users)

    const dispatch = useDispatch()

    const fetchUsers = async ()=> {
        const data = await APIHandler.getUsers()
        console.log(data)
        dispatch(setUsers(data));
    }

    useEffect(()=>{
        fetchUsers();
        
    }, [])

    return (
        <table className="table">
            <TableHeader columnNames={columnNames}/>
            <TableBody />
        </table>
    )
}

export default Table;