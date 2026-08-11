import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import Exercise1 from './Ex1';
import Exercise5 from './Ex5';
import Exercise2 from './Ex2';
import Exercise3 from './Ex3';
import Exercise4 from './Ex4';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Exercise1 />
    <Exercise2/>
    <Exercise3/>
    <Exercise4/>
    <Exercise5/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
