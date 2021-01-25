import React from 'react';
import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header, Footer, Search, BookList, AddBook, BookDetails, EditBook } from "../index";

function App(props: any) {
  return (
    <Router>
      <Header />
      <div className="main__wrapper">
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <React.Fragment>
                <Search />
                <BookList />
              </React.Fragment>
            )
          }} />
          <Route path="/add" component={AddBook} />
          <Route path="/book-details/:id" component={BookDetails} />
          <Route path="/edit/:id" component={EditBook} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;