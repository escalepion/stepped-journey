import React from 'react';

const ObjectiveItem = ({ text, onDeleteClick }) => {
  return(
    <span className="objective-item">{text} <span className="clickable" onClick={onDeleteClick}> <i className="fa fa-times" aria-hidden="true"></i></span></span>
  );
}

export default ObjectiveItem;
