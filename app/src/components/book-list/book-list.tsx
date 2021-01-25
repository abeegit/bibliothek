import React, { useEffect, useState } from 'react';
import "./bookList.css";
import {useHistory} from 'react-router-dom';
import { Book } from '../../shared/interfaces';
import { connect } from 'react-redux';

interface Props {
  books: Array<Book>;
}

function BookList({books}: Props) {
  const history = useHistory();

  return (
    <div className="list__wrapper">
      <div className="list__count">Showing { books !== null && books !== undefined  && books.length } item(s)</div>
      { books !== null && books !== undefined && books.map((book, index) => (
        <div className="book__wrapper" key={index.toString()} onClick={() => history.push(`/book-details/${book._id}`)}>
          <div className="book__wrapper--title">{ book.name }</div>
          <div className="book__wrapper--author">{ book.author }</div>
          <div className="book__wrapper--description">{ book.description }</div>
        </div>
      )) }
    </div>
  );
}

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    books: state?.books
  }
}

export default connect(mapStateToProps)(BookList);