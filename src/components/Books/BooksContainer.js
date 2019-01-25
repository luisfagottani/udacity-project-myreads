import React from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';
import SearchBtn from '../Search/SearchBtn';

class BooksContainer extends React.Component {
   
  listBooksShelf = () => {
    const {booksShelfs, changeBookToShelf} = this.props;
    return booksShelfs.map(value => (
      <Bookshelf key={value} titleShelf={value} changeBookToShelf={changeBookToShelf} books={this.filterBooks(value)} />
    ))
  }

  filterBooks = (shelf) => {
    const {books} = this.props;
    return books.filter(book => book.shelf === shelf).sort()
  }
  
  render(){
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.listBooksShelf()}
          </div>
        </div>
        <SearchBtn />
      </div>
    )
  }

}


BooksContainer.propTypes = {
  booksShelfs: PropTypes.array
}
export default BooksContainer;