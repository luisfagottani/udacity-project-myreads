import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";
import BooksList from "../Books/BooksList";

class SearchBook extends Component {
  state = {
    searchQuery: ""
  };

  searchInput = event => {
    this.setState({
      searchQuery: event.target.value
    });

    this.props.searchBook(event.target.value);
  };
  render() {
    const { books, changeBookToShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}

            <DebounceInput
              minLength={2}
              debounceTimeout={300}
              onChange={this.searchInput}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          {books && (
            <BooksList changeBookToShelf={changeBookToShelf} books={books} />
          )}
        </div>
      </div>
    );
  }
}

export default SearchBook;
