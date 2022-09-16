import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import App from './App';

import reportWebVitals from './reportWebVitals';
import './index.css';
// import store from './store';
// import AppWarapper from './buoi2/buoi2';
import App from './buoi3/buoi3';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      {/* <App /> */}
      {/* <AppWarapper/> */}
    {/* </Provider> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
