import logo from './logo.svg';
import './App.css';
import { Header } from './head';
import { Footer } from './foot';
import { List } from './list';
import { SearchBar } from './searchBar';
import { Categorylist } from './CategoryList';
import { Headercontainer } from './header';


function App() {
  return (
    <div className="App">
      {/* <Header/>
      <SearchBar/> */}
      <Headercontainer/>
      <div className='muContent'>
      <Categorylist/>
      <List/>
      <Footer/>
      </div>
    
    
    </div>
  );
}

export default App;
