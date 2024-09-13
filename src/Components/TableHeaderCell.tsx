import React, { useEffect, useRef } from "react"; 
import { useAppDispatch, useAppSelector } from "../Store/Store";
import { setSort } from "../Store/Features/SortSlice";
import {filterUsers2, sortUsers } from "../Store/Features/UsersSlice"; 
import { addFilter, removeFilter, setFilters } from "../Store/Features/FiltersSlice";


export interface ITableHeaderCellProps {
    column: ITableHeaderCell
}


export interface ITableHeaderCell {
    name:string,
    key:string
}

const TableHeaderCell = (props:ITableHeaderCellProps) => {

    const dispatch = useAppDispatch();
    const sort = useAppSelector(state=>state.sort.sort)
    const filters = useAppSelector(state=>state.filters.filters)
    const filterPhrase = useRef<HTMLInputElement | null>(null)

    const sortOnClickHandle = (key:string) => { 
        dispatch(setSort({key}))
    }   

    const filterOnClickHandle = (key:string) => {
        if(filters.filter(f=>f.key==key).length==0)dispatch(addFilter({key, phrase: filterPhrase.current?.value??""}));
        else dispatch(removeFilter({key, phrase: ""}));
    }

    useEffect(()=>{
        dispatch(sortUsers({key:sort.key, direction: sort.direction}))
    }, [sort])

 

    useEffect(()=>{
        dispatch(filterUsers2(filters))

    }, [filters])

    const onFilterPhraseChange = () => { 
        dispatch(setFilters({key: props.column.key, phrase: filterPhrase.current?.value??""}))
    }

    return (
        <td className="table-header-cell">
            <span>{props.column.name}</span>
            <span className="table-header-cell-options">
                <span 
                    onClick={()=>sortOnClickHandle(props.column.key)}
                    className={
                        (sort.key==props.column.key ? "sort-selected " : " ") + 
                        ((sort.key==props.column.key && sort.direction==1) ?  "sort-rotate " : " ")
                    }
                >
                    {"▼"}
                </span>
                <span
                    onClick={()=>filterOnClickHandle(props.column.key)}
                    className={
                        filters.filter(f=>f.key==props.column.key).length>0 ? "filter-selected " : ""
                    }
                >
                    {"∀"}
                </span>
               
            </span>
            <input placeholder="Filter..." ref={filterPhrase} onChange={onFilterPhraseChange}/>
        </td>      
    )
}

export default TableHeaderCell