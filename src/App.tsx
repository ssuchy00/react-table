import React from 'react';
import './App.css';
import Table from './Components/Table'; 
import { ITableHeaderCell } from './Components/TableHeaderCell';


export const columnNames:Array<ITableHeaderCell> = [
  {key: "__lp__", name: "Lp."},
  {key: "name", name: "Name"},
  {key: "username", name: "Username"},
  {key: "phone", name: "Numer telefonu"},
  {key: "email", name: "Adres e-mail"},
]

export interface IUserData {
  key?:number
  name: string,
  lastname:string,
  phone:string,
  email:string
}

function App() {
  return (
    <div className="App">
      <h1>Users table</h1>
      <p>{"∀"} - Filter</p>
      <p>{"▼"} - Sort</p>
      <Table />
    </div>
  );
}

export default App;
