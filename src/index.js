import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './global-style';
import App from './App/App';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root'),
);
