import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import configStore from './redux/configStore';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={configStore}>
        <div className="parallax-bg">
        <App />
        </div>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);


