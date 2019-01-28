import React from "react";

import * as BooksAPI from "./utils/BooksAPI";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.css";
import "./animations.scss";

import BooksContainer from "./components/Books/BooksContainer";
import SearchBook from "./components/Search/SearchBook";

import { SHELFS } from "./utils/Constants";

class BooksApp extends React.Component {
  state = {
    shelfs: new Set(),
    books: [],
    booksSearch: [],
    isLoading: false
  };

  /**
   * No momento da montagem do componente,
   * realizamos
   */
  componentDidMount() {
    let aux = new Set();

    BooksAPI.getAll().then(data => {
      Object.values(SHELFS).forEach(shelf => {
        aux.add(shelf);
      });
      this.setState(() => ({
        books: data,
        shelfs: aux
      }));
    });
  }

  /**
   * Realiza a troca de estante e comunica a API
   */
  changeBookToShelf = (state, bookId) => {
    console.log("teste");
    const { books } = this.state;
    const item = books.findIndex(book => book.id === bookId);
    books[item].shelf = state;

    this.setState(() => ({
      book: books.slice()
    }));

    this.updateBook(state, bookId);
  };

  /**
   * Adiciona o livro na estante
   */
  addBookToSelf = (state, bookId) => {
    const { books } = this.state;
    BooksAPI.get(bookId).then(res => {
      res.shelf = state;
      books.push(res);
    });

    this.updateBook(state, bookId);
    this.setState(() => ({
      books: books
    }));
  };

  updateBook = (state, bookId) => {
    BooksAPI.update(bookId, state).then(res => {
      console.log("OK");
    });
  };

  /**
   * Realiza a busca do livro
   */
  searchBook = state => {
    const { books } = this.state;
    BooksAPI.search(state).then(data => {
      if (data && data.error === "empty query") {
        data = [];
      } else {
        data !== undefined &&
          data.forEach(ele => {
            const item = books.findIndex(book => book.id === ele.id);
            if (item !== -1) {
              ele["shelf"] = books[item].shelf;
            }
          });
      }

      this.setState(() => ({
        booksSearch: data
      }));
    });
  };

  render() {
    const { shelfs, books, booksSearch } = this.state;
    return (
      <div className="app">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={400}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/search"
                    render={() => (
                      <SearchBook
                        searchBook={this.searchBook}
                        books={booksSearch}
                        addBookToSelf={this.addBookToSelf}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <BooksContainer
                        changeBookToShelf={this.changeBookToShelf}
                        booksShelfs={[...shelfs]}
                        books={books}
                      />
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
