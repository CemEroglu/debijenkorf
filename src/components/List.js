import './SearchBar.css';
import { useState, useEffect } from 'react'
import ListElement from './ListElement';

function List(props) {
    return (
        <div className="List">
        {props.data.map(item=>{
            <ListElement name={item.searchTerm}></ListElement>
        })}
        <button onClick={()=>{
            console.log(props.data)
        }}></button>
        </div>
    );
}

export default List;