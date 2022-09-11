import React from 'react';
import { useState } from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  let [input, setInput] = useState('');
  //const handleOnSearch = () => onSearch(document.getElementById('search').value);
  return (
  <>
    <div className="searchBar">
      <input value={input} onInput={e => setInput(e.target.value)} className="form-control me-2" id="search" type="search" placeholder="Ciudad..." aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit" onClick={()=> onSearch(input)}>Agregar</button>
    </div>
  </>
  )
};