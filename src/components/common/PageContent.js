import React from 'react';

const PageContent = ({ title, text, onPreviousClick, currentPageNumber }) => {
  return (
    <div>
      <h1 className="main-content__title">{title}</h1>

      <p className="main-content__pagination">
        {currentPageNumber !== 1 && <span className="clickable" onClick={onPreviousClick}><i className="fa fa-angle-left" aria-hidden="true"></i></span>}
        <span> {currentPageNumber} / 3</span>
      </p>

      <p className="main-content__text">{text}</p>
    </div>
  );
}

export default PageContent;
