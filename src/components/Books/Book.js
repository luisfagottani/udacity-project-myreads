import React, {Component} from 'react';
import SelectForm from '../Shared/SelectForm';

class Book extends Component {
  listAuthors = (authors) => (
    authors.join(' | ')
  )
  render() {
    const {book, changeBookToShelf} = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
            <SelectForm optionSelected={book.shelf} changeBookToShelf={changeBookToShelf} bookId={book.id}  />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors  && this.listAuthors(book.authors)}</div>
        </div>
      </li>
    )
  }
}

export default Book;