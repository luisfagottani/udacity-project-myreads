import React, {Component} from 'react'
import Book from './Book';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

class BooksList extends Component {
  render() {
    const {books, changeBookToShelf} = this.props;
    return (
      <TransitionGroup className="books-grid">
        {books.map(book => (
          <CSSTransition timeout={500} classNames="fade" key={book.id}>
            <Book changeBookToShelf={changeBookToShelf} book={book} />
          </CSSTransition>
          ))
        }
        </TransitionGroup>
    )
  }
}

export default BooksList;