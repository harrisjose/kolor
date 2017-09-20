import React from 'react';
import { css } from 'emotion';

export default function() {

  const icon = css`
    width: 32px;
    height: 32px;
    margin: 0 8px;
    vertical-align: middle;
  `;

  return (
    <div className="w-66 t-center t-mb grey pt-5 mx-auto">
      <p>This started off as a clone of <a>colllor.com</a> because, I thought I could build it better with..something other than flash. Eventually, I realised that I only ever used it to get the shades of colors...and that <a href="https://palx.jxnblk.com/" target="_blank" rel="noopener noreferrer">palx</a> was a waaay better tool.</p>
      <br/>
      <p>This is now a WIP combining stuff from both palx and collor</p>
      <br/>
      <br/>
      <p>Made with
        <a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">
          <svg className={ icon } width="32" height="32" viewBox="0 0 256 230" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M.75 114.75c0 19.2 18.77 37.15 48.35 47.26-5.9 29.8-1.06 53.8 15.13 63.1 16.65 9.6 41.45 3 64.98-17.6 23 19.8 46.2 27.5 62.4 18.2 16.7-9.6 21.7-35.2 15.6-65.9 30.8-10.2 48.1-25.4 48.1-44.9 0-18.74-18.8-35-47.92-45.02 6.54-31.93 1-55.3-15.86-65.04-16.26-9.37-39.72-1.2-63 19.06C104.1 2.2 80.9-4.35 64.04 5.4 47.84 14.8 43.2 39.2 49.1 69.5 20.5 79.44.76 96.05.76 114.74z" fill="#FFF"/><path d="M201.03 79.67a151.36 151.36 0 0 0-7.28-2.3 137.5 137.5 0 0 0 1.13-4.95c5.5-26.73 1.9-48.26-10.4-55.35-11.78-6.8-31.06.3-50.53 17.24a151.14 151.14 0 0 0-5.62 5.2 137.57 137.57 0 0 0-3.75-3.4C104.18 18 83.72 10.4 71.44 17.5c-11.77 6.8-15.26 27.06-10.3 52.4a150.9 150.9 0 0 0 1.67 7.47c-2.9.8-5.6 1.7-8.3 2.63-23.9 8.32-39.2 21.4-39.2 34.95 0 14 16.4 28.07 41.3 36.6a128.44 128.44 0 0 0 6.1 1.9 147.8 147.8 0 0 0-1.7 8.07c-4.7 24.9-1 44.65 10.7 51.4 12.2 7 32.5-.17 52.4-17.5 1.57-1.37 3.14-2.83 4.7-4.35a148.34 148.34 0 0 0 6.1 5.56c19.2 16.5 38.2 23.2 49.9 16.4 12.14-7 16.08-28.24 10.96-54.1-.4-1.95-.85-4-1.36-6.02 1.4-.4 2.8-.8 4.2-1.3 25.9-8.6 42.73-22.4 42.73-36.6 0-13.6-15.76-26.74-40.17-35.15z" fill="#53C1DE"/><path d="M195.4 142.33c-1.23.4-2.5.8-3.8 1.18-2.85-9-6.7-18.6-11.43-28.6 4.5-9.7 8.22-19.2 11-28.2 2.3.7 4.55 1.4 6.7 2.1 20.92 7.2 33.68 17.9 33.68 26.1 0 8.8-13.78 20.1-36.14 27.5zm-9.27 18.4c2.26 11.4 2.58 21.74 1.08 29.8-1.3 7.26-4 12.1-7.4 14.04-7.1 4.12-22.3-1.24-38.7-15.37-1.9-1.62-3.8-3.35-5.7-5.18 6.4-6.97 12.8-15.06 19-24.05 11-.97 21.3-2.56 30.6-4.72.5 1.86.9 3.68 1.3 5.47zm-93.85 43.12c-6.96 2.46-12.5 2.53-15.85.6-7.13-4.1-10.1-19.98-6.05-41.26a138.5 138.5 0 0 1 1.65-7.6c9.26 2 19.5 3.5 30.45 4.4 6.25 8.8 12.8 16.9 19.4 23.9a118.86 118.86 0 0 1-4.3 3.94c-8.78 7.66-17.56 13.1-25.3 15.83zm-32.6-61.58c-11-3.76-20.1-8.66-26.35-14-5.6-4.8-8.43-9.56-8.43-13.43 0-8.23 12.26-18.72 32.72-25.85a139.28 139.28 0 0 1 7.78-2.5c2.83 9.2 6.54 18.8 11 28.5-4.52 9.8-8.28 19.6-11.14 28.9a118.9 118.9 0 0 1-5.58-1.8zM70.6 67.9c-4.24-21.7-1.42-38.07 5.68-42.18 7.56-4.37 24.27 1.87 41.9 17.5 1.12 1 2.25 2.06 3.38 3.14C115 53.4 108.5 61.43 102.3 70.18c-10.6.98-20.8 2.57-30.14 4.68a141.53 141.53 0 0 1-1.55-6.96zm97.48 24.07a306.98 306.98 0 0 0-6.87-11.3c7.3.9 14.2 2.12 20.6 3.6-1.9 6.24-4.3 12.77-7.2 19.46a336.42 336.42 0 0 0-6.5-11.76zm-39.75-38.7c4.45 4.8 8.9 10.2 13.3 16.04a284.25 284.25 0 0 0-26.7 0c4.38-5.8 8.88-11.1 13.4-16zm-40 38.77a285.24 285.24 0 0 0-6.38 11.68c-2.8-6.66-5.22-13.22-7.18-19.55 6.45-1.44 13.32-2.62 20.48-3.52a283.8 283.8 0 0 0-6.92 11.4zm7.13 57.68c-7.4-.83-14.38-1.95-20.82-3.35 2-6.44 4.45-13.14 7.32-19.95a283.5 283.5 0 0 0 6.4 11.7 285.27 285.27 0 0 0 7.1 11.6zm33.14 27.4c-4.58-4.95-9.14-10.4-13.6-16.28 4.33.17 8.74.25 13.22.25 4.6 0 9.16-.1 13.64-.3-4.4 5.9-8.84 11.4-13.26 16.3zm46.07-51.04c3.02 6.88 5.56 13.54 7.6 19.87-6.57 1.5-13.64 2.7-21.1 3.6a337.54 337.54 0 0 0 6.95-11.5 306.63 306.63 0 0 0 6.55-11.97zm-14.92 7.15a316.48 316.48 0 0 1-10.84 17.5c-6.7.47-13.6.7-20.6.7-7 0-13.8-.2-20.4-.63a273.8 273.8 0 0 1-11-17.52 271.33 271.33 0 0 1-9.64-18.2 273.86 273.86 0 0 1 9.6-18.22 271.25 271.25 0 0 1 10.98-17.44c6.73-.5 13.6-.78 20.58-.78 7 0 13.9.27 20.6.78a290.7 290.7 0 0 1 10.9 17.4 316.42 316.42 0 0 1 9.74 18.12 290.8 290.8 0 0 1-9.7 18.3zm19.92-107.8c7.56 4.37 10.5 21.97 5.75 45.04a127.53 127.53 0 0 1-1 4.5c-9.4-2.17-19.57-3.78-30.23-4.78-6.3-8.9-12.7-16.9-19.1-23.9a141.92 141.92 0 0 1 5.2-4.8c16.6-14.6 32.2-20.3 39.3-16.2z" fill="#FFF"/><path d="M128.22 94.67c11.15 0 20.18 9.03 20.18 20.17 0 11.15-9.04 20.18-20.18 20.18s-20.18-9.03-20.18-20.18c0-11.14 9.04-20.17 20.18-20.17" fill="#53C1DE"/></svg>
        </a>
        &
        <a href="https://fractures.space/" rel="noopener noreferrer" target="_blank">
          <svg className={ icon } width="32" height="32" viewBox="0 0 118 118" xmlns="http://www.w3.org/2000/svg"><title>fractures</title><g transform="translate(.333 .333)" fill="none" fillRule="evenodd"><circle strokeWidth="16" stroke="#323255" strokeLinecap="round" strokeLinejoin="round" cx="58.667" cy="58.667" r="37.333"/><path d="M95.784 10.403c-1.767-2.598-1.508-6.155.783-8.445 2.594-2.595 6.814-2.582 9.424.028 1.583 1.582 2.21 3.756 1.882 5.8.022.285.11.91.468 1.267.473.472 1.415.475 1.415.475l-.01.006c2-.272 4.1.363 5.642 1.904 2.61 2.61 2.623 6.83.028 9.425-2.25 2.25-5.72 2.54-8.304.875-9.785 9.786-31.46 31.462-33.2 33.2-1.48 1.482-2.222 2.243-4.11.355-1.89-1.89 1.077-3.386.332-4.13-.744-.746-2.23 2.23-4.105.357-1.874-1.874 1.095-3.37.33-4.135-.768-.766-2.212 2.253-4.11.354-1.456-1.456-1.138-2.64.342-4.12 1.922-2.043 22.966-23.026 33.194-33.217zM21.677 106.97c1.722 2.593 1.44 6.123-.845 8.41-2.607 2.605-6.832 2.605-9.44 0-1.543-1.546-2.172-3.66-1.886-5.667 0-.056-.015-.956-.472-1.413-.458-.458-1.358-.472-1.413-.472-2.007.286-4.12-.343-5.665-1.888-2.607-2.606-2.607-6.832 0-9.44 2.285-2.284 5.815-2.565 8.407-.843l33.29-33.29c1.488-1.488 2.232-2.253 4.118-.367 1.886 1.886-1.09 3.395-.345 4.138.743.744 2.24-2.242 4.112-.37 1.87 1.87-1.106 3.376-.34 4.14.764.766 2.22-2.262 4.116-.366 1.453 1.454 1.13 2.64-.357 4.128-1.927 2.046-22.982 23.04-33.28 33.3z" fill="#E0E1EA"/></g></svg>
        </a>
      </p>
    </div>
  );
}