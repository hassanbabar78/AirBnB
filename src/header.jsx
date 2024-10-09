
import './Header.css'; 
import { Header } from './head';
import { SearchBar } from './searchBar';

export function Headercontainer(){
    return(
        <div className="headcontainer">
            <Header/>
            <SearchBar/>
        </div>
    )
}