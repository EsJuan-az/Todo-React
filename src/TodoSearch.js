import './TodoSearch.css'
import search from './assets/search.png'
function TodoSearch() {
  return (
    <nav className="ctn-search">
        <input type="text" placeholder="Programar" className='search-input'/><img className="search-icon" src={search} alt="buscar"/>
    </nav>
  );
}

export {TodoSearch};