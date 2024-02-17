import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import "./bookCard.css";
import "../index.css";

function BrowseBooks() {
    return (
        <div className='browseContainer'>
          <h1 className='browseContainerText'>Browse Books</h1>
          <p className='browseContainerText'>Take a look through book by genre. See something you like? Click on it for more information and to save it to your account!</p>
          <ul className="bookCategories">
            <li>
                <HistoryBooks />
            </li>
            <li>
                <FantasyBooks />
            </li>
            <li>
                <MysteryBooks />
            </li>
            <li>
                <ScienceBooks />
            </li>
            <li>
                <RomanceBooks />
            </li>
          </ul>
        </div>
    )
}

function HistoryBooks() {
    const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
    try {
      const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=history');
      const data = await res.json();
      setBooks(data.items); // Data.items contains the array of books
    }catch(error){
        console.log(error);
    }
    };
    fetchData();
  }, []);

    return (
        <div>
          <h3>History Books</h3>
          <ul className='bookLists'>
          {books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </ul>
        </div>
      );
    }

function FantasyBooks() {
    const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
    try {
      const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=fantasy');
      const data = await res.json();
      setBooks(data.items); // Data.items contains the array of books
    }catch(error){
        console.log(error);
    }
    };
    fetchData();
  }, []);

    return (
        <div>
          <h3>Fantasy Books</h3>
          <ul className='bookLists'>
            {books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </ul>
        </div>
      );
    }

function MysteryBooks() {
    const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
    try {
      const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=mystery');
      const data = await res.json();
      setBooks(data.items); // Data.items contains the array of books
    }catch(error){
        console.log(error);
    }
    };
    fetchData();
  }, []);

    return (
        <div>
          <h3>Mystery Books</h3>
          <ul className='bookLists'>
            {books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </ul>
        </div>
      );
    }

function ScienceBooks() {
    const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
    try {
      const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=science');
      const data = await res.json();
      setBooks(data.items); // Data.items contains the array of books
    }catch(error){
        console.log(error);
    }
    };
    fetchData();
  }, []);

    return (
        <div>
          <h3>Science Books</h3>
          <ul className='bookLists'>
            {books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </ul>
        </div>
      );
    }

function RomanceBooks() {
    const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
    try {
      const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=romance');
      const data = await res.json();
      setBooks(data.items); // Data.items contains the array of books
    }catch(error){
        console.log(error);
    }
    };
    fetchData();
  }, []);

    return (
        <div>
          <h3>Romance Books</h3>
          <ul className='bookLists'>
            {books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </ul>
        </div>
      );
    }
    
export default BrowseBooks