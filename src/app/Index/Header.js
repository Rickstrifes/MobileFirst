import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './style.css';

const Header = () => {
  return (
    <header className={styles['header']}>
      <h2>Menu Anda</h2>
    </header>
  );
};

export default Header;
