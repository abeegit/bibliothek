import React, { ChangeEvent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import "./search.css";
import { search } from "./search.helper";
import { clearItems, renderItems } from "../../redux/actions";

interface Props {
  dispatch: Function;
}

function Search({dispatch}: Props) {
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState<any>(null);

  async function handleSearchClick() {
    try {
      dispatch(clearItems());
      const {error, data} = await search(searchText);
      if (error) {
        return setError(error);
      }

      dispatch(renderItems(data));
    } catch (err) {
      setError(err);
    }
  }


  useEffect(() => {
    handleSearchClick();
  }, [])

  return (
    <div className="search__wrapper">
      <input 
        className="search__input" 
        type="text" 
        placeholder="Search by name, author" 
        value={searchText}
        onKeyPress={(event) => {
          if (event.key === "Enter") handleSearchClick();
        }}
        onChange={(event: {target: HTMLInputElement}) => { setSearchText(event.target.value) }} />
      <button onClick={handleSearchClick} className="search__button">Search</button>
    </div>
  );
}

export default connect()(Search);