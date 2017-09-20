import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/site.css';

export default function({ children }) {
  return (
    <div className="w-100">
      <div className={ `${styles.appHeader} fixed z-2 top-0 w-100` }>
        <div className="container-centered">
          <ul className="flex flex-gap-2 flex-between uppercase t-bold">
            <li className="t-medium">
              <Link to="/">Kolor</Link>
            </li>
            <div className="flex flex-gap-2 t-small">
              <li><Link to="/about">About</Link></li>
              <li>
                <a href="https://github.com/harris.jose/kolor" rel="noopener noreferrer">Source</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className={ styles.appContent }>{ children }</div>
    </div>
  );
}
