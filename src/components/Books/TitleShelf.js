import React from 'react';
import PropTypes from 'prop-types';

const TitleShelf = (props) => {
  /**
   * Format Camel Case Words
   */
  const formatTitle = () => (
      props.titleShelf
     .replace(/([A-Z])/g, ' $1')
     .replace(/^./, function(str){ return str.toUpperCase(); })
  )

  return(
    <h2 className="bookshelf-title">{formatTitle()}</h2>
  )
}


TitleShelf.propTypes = {
  titleShelf: PropTypes.string.isRequired
}

export default TitleShelf;