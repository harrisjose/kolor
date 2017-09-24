import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import styles from '../styles/site.css';
import GithubIcon from '../svgs/github.svg';

const nav = css`
  color: #333;
  &:hover {
    background-color: initial;
  }
`;
const navIcon = css`
  vertical-align: text-top;
  margin: 0 3px;
`;

export default function () {
  return (
    <div className={ `${styles.appHeader} fixed z-2 top-0 w-100` }>
      <div className="container-centered px-1">
        <ul className="flex flex-gap-2 flex-between uppercase t-bold">
          <li className="t-medium">
            <Link className={ nav } to="/">Kolor</Link>
          </li>
          <div className="flex flex-gap-2 t-small">
            <li><Link className={ nav } to="/about">About</Link></li>
            <li>
              <a className={ nav } href="https://github.com/harrisjose/kolor" rel="noopener noreferrer">
                Source <GithubIcon className={`${navIcon} icon-xs icon-middle`}/>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}
