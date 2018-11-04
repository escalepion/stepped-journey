import React from 'react';

import HeaderItem from './HeaderItem';

const Header = ({ activeTabIndex }) => {
  return (
    <header>
      <div className="row">
        <HeaderItem index={0} activeTabIndex={activeTabIndex} text='Brand' />
        <HeaderItem index={1} activeTabIndex={activeTabIndex} text='Describe' />
        <HeaderItem index={2} activeTabIndex={activeTabIndex} text='Objectives' />
        <HeaderItem index={3} activeTabIndex={activeTabIndex} text='Video' />
        <HeaderItem index={4} activeTabIndex={activeTabIndex} text='Voice' />
        <HeaderItem index={5} activeTabIndex={activeTabIndex} text='Audience' />
        <HeaderItem index={6} activeTabIndex={activeTabIndex} text='Taste' />
      </div>
    </header>
  );
}

export default Header;
