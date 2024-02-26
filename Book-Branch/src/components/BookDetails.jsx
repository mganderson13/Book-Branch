import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const apiUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD;

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState({});

  useEffect(() => {
    async function fetchData() {
    try {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
      const data = await res.json();
        setBook(data);
    }catch(error){
        console.log(error);
    }
    };
    fetchData();
  }, [id]);

  const addToMyBooks = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/myBooks`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: book.volumeInfo.title, author: book.volumeInfo.authors }),
      })
      .then(response => response.json());
  
    }catch(err) {
      console.error(err);
    }
  }

    return (
        <div>
          <h2>Book Details</h2>
          {book.volumeInfo ? (
            <>
                {book.volumeInfo.imageLinks ? (
            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
          ) : (
            <div>No Image Available</div>
          )}
          <br></br>
          <button className='addToMyBooksButton' onClick={addToMyBooks}>Add book to my collection</button>
                 <h3>Title: {book.volumeInfo.title}</h3>
                 <h3>Author: {book.volumeInfo.authors}</h3>
                 {book.volumeInfo.description ? (
            <p>{book.volumeInfo.description}</p>
          ) : (
            <p>No Description Available</p>
          )}
                <p>Page count: {book.volumeInfo.pageCount}</p>
                <p>Genres: {book.volumeInfo.categories}</p>
                <p className="cardText" id="readLink"><a href={book.volumeInfo.previewLink} target="_blank" className="cardText">Read this book</a></p>
          </>
        ) : (
            <div>Loading...</div>
        )}
          </div>
      );
    }

export default BookDetails;