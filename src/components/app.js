import React from 'react';
import styles from '../styles/site.css';
import Navbar from './navbar';
import Footer from './footer';

export default function({ children }) {
  return (
    <div className="w-100">
      <Navbar/>
      <div className={ styles.appContent }>
        { children }
      </div>
      <Footer/>
    </div>
  );
}
