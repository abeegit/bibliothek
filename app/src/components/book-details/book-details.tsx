import React, { useEffect, useState } from 'react';
import "./bookDetails.css";
import { Link, useParams } from 'react-router-dom';
import { Book } from '../../shared/interfaces';
import { getBook } from "./book-details.helper";

function BookDetails() {
  const { id } = useParams<any>();
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getBookDetails() {
      try {
        const { error, data } = await getBook(id);
        if (error) {
          return setError(error);
        }

        setBook(data[0]);
      } catch (err) {
        setError(err);
      }
    }

    getBookDetails();
  }, [])
  return (
    <React.Fragment>
      { book ? (<div className="book__wrapper">
        <div className="book__wrapper--title">{book.name}</div>
        <div className="book__wrapper--author">{book.author}</div>
        <div className="book__wrapper--count">{book.description}</div>
        <div className="book__wrapper--count">There are {book.count} copies available.</div>
        <div className="buttons__wrapper">
          <Link className="button button--edit" to={"/edit/" + id}>Edit</Link>
        </div>
      </div>) : null}
    </React.Fragment>
  );
}

export default BookDetails;