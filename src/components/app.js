import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import styles from '../styles/site.css';

const navLink = css`
  color: #333;
  &:hover {
    background-color: initial;
  }
`;

export default function({ children }) {
  return (
    <div className="w-100">
      <div className={ `${styles.appHeader} fixed z-2 top-0 w-100` }>
        <div className="container-centered">
          <ul className="flex flex-gap-2 flex-between uppercase t-bold">
            <li className="t-medium">
              <Link className={ navLink } to="/">Kolor</Link>
            </li>
            <div className="flex flex-gap-2 t-small">
              <li><Link className={ navLink } to="/about">About</Link></li>
              <li><a className={ navLink } href="https://github.com/harrisjose/kolor" rel="noopener noreferrer">Source</a></li>
            </div>
          </ul>
        </div>
      </div>
      <div className={ styles.appContent }>{ children }</div>
    </div>
  );
}
