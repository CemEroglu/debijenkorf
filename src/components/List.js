import './SearchBar.css';
import { useState, useEffect } from 'react'
import ListElement from './ListElement';

function List(props) {
    const [list, setList] = useState(props.list);
    useEffect(() => {
        
        setList(props.list)
    }, [props.list])
    return (
        <div className="List">
        {
            list.map((item,index)=>{
                if(index<props.maxElement){
            return <ListElement key={item.searchterm} searchText={props.searchText} name={item.searchterm} id={item.nrResults}></ListElement>
            
        }
        })
    }    
        </div>
    );
}

export default List;