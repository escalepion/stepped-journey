import React from 'react';

const HeaderItem = ({ text, index,activeTabIndex }) => {
  const completed = index + 1 < activeTabIndex;
  const icon = completed ? 'fa-check-circle' : 'fa-question-circle';
  return (
    <div 
      className={`col-md-1 header-item ${completed ? 'active' : 'passive'} ${activeTabIndex === index + 1 ? 'current' : ''} ${activeTabIndex !== index + 1 ? 'd-none d-sm-block ' : ''}`
    }>
      <p><i className={`fa ${icon}`} aria-hidden="true"></i></p>
      <p>{text}</p>
    </div>
  );
}

export default HeaderItem;
