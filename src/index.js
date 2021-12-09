import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from "react-cookie";
import App from './App';

// CookiesProvider wrapping App component this provides a cookie object usable anywhere within component
ReactDOM.render(
  <CookiesProvider>
     <App />
  </CookiesProvider>,
  document.getElementById('root')
);