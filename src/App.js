import './App.css';
import SearchBar from './components/SearchBar';
import data from './data/people.json'
function App() {
  return (
    <div className="App">
      <SearchBar lookUpData={data}></SearchBar>
    </div>
  );
}

export default App;