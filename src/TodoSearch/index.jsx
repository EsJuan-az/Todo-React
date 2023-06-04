import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';
function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  return (
    <nav className="ctn-search">
        <input
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value)
          }}
          type="text" placeholder="Programar"
          className='search-input'/>
    </nav>
  );
}

export {TodoSearch};