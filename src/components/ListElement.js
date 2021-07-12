import './SearchBar.css';
import { useState, useEffect } from 'react'

function ListElement(props) {
    return (
        <div className="ListElement">
            {props.name}
        </div>
    );
}

export default ListElement;