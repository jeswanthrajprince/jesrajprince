import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter } from 'react-router-dom';
import App from'./app';

ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>, document.getElementById("root")); 
 