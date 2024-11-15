import logo from './logo.svg';
import './App.css';
import { Header } from './head';
import { Footer } from './foot';
import { List } from './list';
import { SearchBar } from './searchBar';
import { Categorylist } from './CategoryList';
import { Headercontainer } from './header';
import { Signup } from './Signup';
import { CategoryContext } from './context';
import { CategoryProvider } from './context';


function App() {
  return (
    <CategoryProvider>
      <div className="App">
        {/* <Header/>
        <SearchBar/> */}    
          <Headercontainer/>
          <div className='muContent'>
          <Categorylist/>
          <List/>
          {/* <Signup/> */}
          <Footer/>
          </div>
      </div>
    </CategoryProvider>
    
  );
}

export default App;
