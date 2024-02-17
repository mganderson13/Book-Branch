import { Link } from "react-router-dom";
import "./bookCard.css";

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
          <div className="bookCard"> 
    <Link to={`/details/${book.id}`}>
            {book.volumeInfo.imageLinks ? (
        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
      ) : (
        <div className="cardText">No Image Available</div>
      )}
             <h3 className="cardText">Title: {book.volumeInfo.title}</h3>
             <h3 className="cardText">Author: {book.volumeInfo.authors}</h3>
             {book.volumeInfo.description ? (
        <p className="cardText">{limitDescription(book.volumeInfo.description, 25)}</p>
      ) : (
        <p className="cardText">No Description Available</p>
      )}
             <p className="cardText" id="readLink"><a href={book.volumeInfo.previewLink} target="_blank" className="cardText">Read this book</a></p>
    </Link>
      </div>
    );
  }

  export default BookCard;