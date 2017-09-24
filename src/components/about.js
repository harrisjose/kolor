import React from 'react';
import ReactLogo from '../svgs/react.svg';
import FracturesLogo from '../svgs/fractures.svg';

export default function() {
  return (
    <div className="w-66 t-center t-mb grey pt-5 mx-auto">
      <p>This started off as a clone of <a className="link">colllor.com</a> because, I thought I could build it better with..something other than flash. Eventually, I realised that I only ever used it to get the shades of colors...and that <a className="link"  href="https://palx.jxnblk.com/" target="_blank" rel="noopener noreferrer">palx</a> was a waaay better tool.</p>
      <br/>
      <p>This is now a WIP combining stuff from both palx and collor</p>
      <br/>
      <br/>
      <p>Made with
        <a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">
          <ReactLogo className="icon-md icon-middle mx-1"/>
        </a>
        &
        <a href="https://fractures.space/" rel="noopener noreferrer" target="_blank">
          <FracturesLogo className="icon-md icon-middle mx-1"/>
        </a>
      </p>
    </div>
  );
}
