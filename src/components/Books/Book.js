import React, { Component } from "react";
import SelectForm from "../Shared/SelectForm";
import NoImg from "../../icons/no_image_available.png";

class Book extends Component {
  listAuthors = authors => authors.join(" | ");
  hasThubmnail = images =>
    images && images.thumbnail ? images.thumbnail : NoImg;
  render() {
    const { book, changeBookToShelf } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage: `url("${this.hasThubmnail(book.imageLinks)}")`
              }}
            />
            <SelectForm
              optionSelected={book.shelf ? book.shelf : "none"}
              changeBookToShelf={changeBookToShelf}
              bookId={book.id}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors && this.listAuthors(book.authors)}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
