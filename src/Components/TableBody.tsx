import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../Store/Store";
import { columnNames } from "../App";
import { ITableHeaderCell } from "./TableHeaderCell";

const TableBody = () => {

    const users = useAppSelector(state=>state.users.users)

    return (
    <>
        {
            users.map((e,key)=>{
                return (
                    e.__filtered__ == 0 &&
                    <tr> {
                    Object.entries(columnNames).map((key2)=>{
                        const res = e[key2[1].key as keyof typeof e]; 
                        return <td>{res}</td> 
                    })}
                    </tr>
                )
            })
        }
    </>)
}

export default TableBody