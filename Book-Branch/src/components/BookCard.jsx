import { Link } from "react-router-dom";

function BookCard({ book }) {
    // Function to limit the description to a certain number of words
  const limitDescription = (description, limit) => {
    const words = description.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return description;
  };
      return (
          <div> 
    <Link to={`/details/${book.id}`}>
            {book.volumeInfo.imageLinks ? (
        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
      ) : (
        <div>No Image Available</div>
      )}
             <h3>Title: {book.volumeInfo.title}</h3>
             <h3>Author: {book.volumeInfo.authors}</h3>
             {book.volumeInfo.description ? (
        <p>{limitDescription(book.volumeInfo.description, 50)}</p>
      ) : (
        <p>No Description Available</p>
      )}
             <p>Read this book: <a href={book.volumeInfo.previewLink} target="_blank">Link</a></p>
    </Link>
      </div>
    );
  }

  export default BookCard;