import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import "./editBook.css";
import { Book } from "../../shared/interfaces";
import { editBook } from "./edit-book.helper";
import { getBook } from '../book-details/book-details.helper';

function EditBook() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const history = useHistory();
  const { id } = useParams<any>();

  useEffect(() => {
    async function getBookDetails() {
      try {
        const { error, data } = await getBook(id);
        if (error) {
          return setError(error);
        }

        const bookData: Book = data[0];
        setName(bookData.name);
        setDescription(bookData.description);
        setAuthor(bookData.author);
        setCount(bookData.count);
      } catch (err) {
        setError(err);
      }
    }

    getBookDetails();
  }, [])

  async function handleEditClick() {
    setError(null);
    const bookData: Book = {
      _id: id,
      name: name,
      description: description,
      author: author,
      count: count
    };

    try {
      const { error } = await editBook(bookData);
      if (error) {
        return setError(error);
      }
      
      history.push(`/book-details/${id}`);
    } catch (err) {
      setError(err);
    }
  }

  return (
    <div className="edit-form__wrapper">
      <h2>Edit</h2>
      <div className="form-control">
        <label>Name</label>
        <input 
          type="text"
          value={name}
          onChange={(event: {target: HTMLInputElement}) => { setName(event.target.value) }} />
      </div>
      <div className="form-control">
        <label>Description</label>
        <input 
          type="text"
          value={description}
          onChange={(event: {target: HTMLInputElement}) => { setDescription(event.target.value) }} />
      </div>
      <div className="form-control">
        <label>Author</label>
        <input 
          type="text"
          value={author}
          onChange={(event: {target: HTMLInputElement}) => { setAuthor(event.target.value) }} />
      </div>
      <div className="form-control">
        <label>Count</label>
        <input 
          type="text"
          value={count}
          onChange={(event: {target: HTMLInputElement}) => { setCount(parseInt(event.target.value)) }} />
      </div>
      <div className="buttons__wrapper">
        <button className="button" onClick={handleEditClick}>Save</button>
      </div>
      { error ? <div className="error">{error}</div> : null }
    </div>
  );
}

export default EditBook;