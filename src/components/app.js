import React from 'react';
import styles from '../styles/site.css';

export default function({ children }) {
  return (
    <div className={ styles.app }>
      <a>Kolor</a>
      { children }
    </div>
  );
}
