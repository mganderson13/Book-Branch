import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MyBooksCard() {
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

    return (
        <div>
          <h2>My Book</h2>
          {book.volumeInfo ? (
            <>
                {book.volumeInfo.imageLinks ? (
            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
          ) : (
            <div>No Image Available</div>
          )}
                 <h3>Title: {book.volumeInfo.title}</h3>
                 <h3>Author: {book.volumeInfo.authors}</h3>
                 
{/* Need rating and review and completed? */}
                 {book.volumeInfo.description ? (
            <p>{book.volumeInfo.description}</p>
          ) : (
            <p>No Description Available</p>
          )}
                <p>Page count: {book.volumeInfo.pageCount}</p>
                <p>Genres: {book.volumeInfo.categories}</p>
                <p>Read this book: <a href={book.volumeInfo.previewLink} target="_blank">Link</a></p>
          </>
        ) : (
            <div>Loading...</div>
        )}
          </div>
      );
    }

export default MyBooksCard;