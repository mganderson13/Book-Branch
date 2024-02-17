import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import "../index.css";
import "./bookCard.css";

function Search() {
    const [search, setSearch] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
          const data = await res.json();
          setBooks(data.items);
        } catch (error) {
          console.log(error);
        }
      }
  
      if (search !== '') { // Only fetch data when search query is not empty
        fetchData();
      }
    }, [search]); // Run useEffect whenever search query changes
  
    function handleSubmit(e) {
      e.preventDefault();
      setSearch(inputValue);
    }
return (
    <>
    <h1 className='searchH1'>Looking for a specific book or author or topic?</h1>
    <h2 className='searchH2'>Search by typing in any keyword.</h2>
    <form className="searchForm" onSubmit={handleSubmit}>
        <label>Keyword: 
            <input type="text" name="keyword" value = {inputValue}
        onChange={(e) => setInputValue(e.target.value )}/>
        </label>
        <button type="submit" className='searchButton'>Search</button>
    </form>

        <div>
          <h2>Search Results:</h2>
          <ul className='searchResults'>
            {books.map(book => (
              <BookCard key={book.id} book={book}/>
            ))}
          </ul>
        </div>
    </>
);
}

export default Search;