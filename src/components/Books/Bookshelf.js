import React, {Component} from 'react';
import TitleShelf from './TitleShelf';
import BooksList from './BooksList';

class Bookshelf extends Component {
  render() {
    const {titleShelf, changeBookToShelf, books} = this.props;
    return (
      <div className="bookshelf">
        <TitleShelf titleShelf={titleShelf}/>
        <div className="bookshelf-books">
            <BooksList changeBookToShelf={changeBookToShelf} books={books}  />
        </div>
      </div>
    )
  }
}

export default Bookshelf;