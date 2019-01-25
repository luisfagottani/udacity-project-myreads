import React from "react";
import PropTypes from "prop-types";

const TitleShelf = props => {
  const { shelfTitle } = props;
  return <h2 className="bookshelf-title">{shelfTitle}</h2>;
};

TitleShelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired
};

export default TitleShelf;
