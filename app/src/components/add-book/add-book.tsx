import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import "./addBook.css";
import { Book } from "../../shared/interfaces";
import { addBook } from "./add-book.helper";

function AddBook() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<any>(null);
  const history = useHistory();

  async function handleAddClick() {
    setError(null);
    const book: Book = {
      name: name,
      description: description,
      author: author,
      count: count
    };

    try {
      const { error } = await addBook(book);
      if (error) {
        return setError(error);
      }
      
      history.push(`/`);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  }

  return (
    <div className="add-form__wrapper">
      <h2>Add</h2>
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
          pattern="[0-9]*"
          value={count}
          onChange={(event: {target: HTMLInputElement}) => { event.target.value !== "" ? setCount(parseInt(event.target.value)) : setCount(0) }} />
      </div>
      <div className="buttons__wrapper">
        <button className="button" onClick={handleAddClick}>Add</button>
      </div>
      { error ? <div className="error">{error}</div> : null }
    </div>
  );
}

export default AddBook;