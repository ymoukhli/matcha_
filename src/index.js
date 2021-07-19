
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Nav } from './components/Nav';
import Forum from './routes/Forum.js';
import EditInfo from './routes/EditInfo.js';
import Chat from './routes/Chat.js';
import {BrowserRouter} from 'react-router-dom';
// <App />

ReactDOM.render(
  <BrowserRouter>
   <App>test</App>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
