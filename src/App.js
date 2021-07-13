import './App.css';
import SearchBar from './components/SearchBar';
import data from './data/people.json'
function App() {
  return (
    <div>
      <SearchBar lookUpData={data} maxElement={4}></SearchBar>
    </div>
  );
}

export default App;