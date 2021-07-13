import './SearchBar.css';
function ListElement(props) {
let styledInfo = props.name.replace(props.searchText, '</b>' + props.searchText + '<b>') + '</b>' + ' ('+ props.id + ')' + '<b>'
function createMarkup() {
    return {__html: "<b>"+styledInfo+"</b>" };
  }
    return (
        <div className="ListElement">
        <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
    );
}

export default ListElement;