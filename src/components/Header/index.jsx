import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">探索</div>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="搜索你感兴趣的内容"
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
