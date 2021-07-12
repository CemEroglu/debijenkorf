import './SearchBar.css';
import magnifier from '../images/magnifier.png'
import search from '../images/search.svg'
import close from '../images/close.svg'
import { useState, useEffect } from 'react'
import List from './List'

function SearchBar(props) {
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState(props.lookUpData)
    useEffect(() => {
        let newFilteredData = []
        props.lookUpData.suggestions.map(item=>{

            if(item.searchterm.toLowerCase().includes(searchText.toLowerCase())){
                newFilteredData.push(item)
            }
        })
        setFilteredData(newFilteredData)
    }, [searchText])
    const whenInputChange = (e) => {
        setSearchText(e.target.value)
    }
    return (
        <div className="GrandParent">
            <div className="Parent">
                <input value={searchText} onChange={whenInputChange} className="SearchBar" />
                <button className="Icon Magnifier">
                    <img
                        src={search}
                    />
                </button>
                <button className={true ? "Icon Close" : "Icon Close Hide"}>
                    <img
                        src={close}
                    />
                </button>
            </div>
            <List data={filteredData}/>
        </div>
    );
}

export default SearchBar;