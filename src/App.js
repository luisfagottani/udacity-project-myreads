import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import { Route } from "react-router-dom";
import './App.css'
import BooksContainer from './components/Books/BooksContainer';
import SearchBook from './components/Search/SearchBook';

class BooksApp extends React.Component {

  state = {
    shelfs: [],
    books: []
  }
  
  /**
   * No momento da montagem do componente, 
   * realizamos 
   */
  componentDidMount() {
    BooksAPI.getAll()
    .then((data) => {
      this.setFiltersStates(data)
      this.setState(() => ({
        books: data
      }))
    });
  }


  /**
   * Setando as estantes, categorias de cada livro no estado da aplicação
   */
  setFiltersStates = (books) => {
    let shelfs = new Set();
    books.map((book) => {
      shelfs.add(book.shelf);
    })

    this.setState(()=> ({
      shelfs: shelfs
    }))
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BooksContainer/>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBook/>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
