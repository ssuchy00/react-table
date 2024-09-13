import React from "react";
import TableHeaderCell, { ITableHeaderCell } from "./TableHeaderCell";


export interface ITableHeader {
    columnNames:Array<ITableHeaderCell>
}

const TableHeader = (props:ITableHeader) => {
    return (
        <tr  className="table-header">
            {
                props.columnNames.map((e,key)=>{
                    return (
                    <TableHeaderCell column={{key:e.key, name:e.name}}/>
                    )
                })
            }
        </tr>
    )
}

export default TableHeader