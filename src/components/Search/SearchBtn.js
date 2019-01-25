import React from 'react';
import { Link } from 'react-router-dom';

const SearchBtn = () => {
  return (
    <div className="open-search">
      <Link to="/search"><button>Search a book</button></Link>
    </div>
  )
}


export default SearchBtn;