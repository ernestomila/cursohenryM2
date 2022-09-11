import React from 'react';
import { useState } from 'react';

export default function SearchBar(props) {
  // acá va tu código
  let [input, setInput] = useState('');
  return (
  <>
    <div className="searchBar">
      <input value={input} onInput={e => setInput(e.target.value)} className="form-control me-2" id="search" type="search" placeholder="Ciudad..." aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit" onClick={()=> props.onSearch(input)}>Agregar</button>
    </div>
  </>
  )
};