import './SearchBar.css';
import { useState, useEffect } from 'react'

function ListElement(props) {
// var str = "Hello";
// var substr = "el";
let abc = props.name.replace(props.searchText, '</b>' + props.searchText + '<b>');
function createMarkup() {
    return {__html: "<b>"+abc+"</b>" };
  }
    return (
        <div className="ListElement">
        <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
    );
}

export default ListElement;