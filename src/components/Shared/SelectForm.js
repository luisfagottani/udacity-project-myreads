import React, { Component } from "react";

class SelectForm extends Component {
  state = {
    select: ""
  };

  componentDidMount() {
    const { optionSelected } = this.props;
    this.setState(() => ({
      select: optionSelected
    }));
  }

  changeStateBook = event => {
    const option = event.target;
    const selectedValue = option[option.selectedIndex].value;
    const { changeBookToShelf, bookId } = this.props;
    this.setState(state => ({
      select: selectedValue
    }));
    changeBookToShelf(selectedValue, bookId);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.changeStateBook} value={this.state.select}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default SelectForm;
