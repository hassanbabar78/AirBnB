import logo from './logo.svg';
import './App.css';
import { Header } from './head';
import { Footer } from './foot';
import { Categories } from './list';
import { SearchBar } from './searchBar';


function App() {
  return (
    <div className="App">
     {/* <Header/> */}
     {/* <Categories/> */}
     <Header/>
     <SearchBar/>
     <Footer/>
    
    </div>
  );
}

export default App;
