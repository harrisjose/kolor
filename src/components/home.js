import React from 'react';
import { Redirect } from 'react-router-dom';

export default function() {
  const randomColor = ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
  return (
    <Redirect to={`/${randomColor}`} />
  );
}
