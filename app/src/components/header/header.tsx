import React from 'react';
import {Link} from 'react-router-dom';
import "./header.css";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__content">
        <div className="header__logo"><Link to="/">MY BOOK LIBRARY</Link></div>
        <Link className="button button--add" to="/add">Add + </Link>
      </div>
    </div>
  );
}

export default Header;