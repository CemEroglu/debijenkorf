import './SearchBar.css';
import magnifier from '../images/magnifier.png'
import search from '../images/search.svg'
import close from '../images/close.svg'
import { useState, useEffect } from 'react'
import List from './List'

function SearchBar(props) {
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState(props.lookUpData.suggestions)
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
                <button className={searchText ? "Icon Close" : "Icon Close Hide"} onClick={()=>{
                    setSearchText("")
                }}>
                    <img
                        src={close}
                    />
                </button>
            </div>
            
            <List searchText={searchText} list={filteredData}/>
        </div>
    );
}

export default SearchBar;