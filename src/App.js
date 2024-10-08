import logo from './logo.svg';
import './App.css';
import { Header } from './head';
import { Footer } from './foot';
import { List } from './list';
import { SearchBar } from './searchBar';
import { Categorylist } from './CategoryList';


function App() {
  return (
    <div className="App">
     {/* <Header/> */}
     {/* <Categories/> */}
     <Header/>
     <SearchBar/>
     <Categorylist/>
     <List/>
     <Footer/>
    
    </div>
  );
}

export default App;
