import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./containers/app/App";
import store from "./store";
import './index.css';

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
  <React.StrictMode>
     <Provider store={store}>
       <BrowserRouter>
          <App />
       </BrowserRouter>
      </Provider>
  </React.StrictMode>
);