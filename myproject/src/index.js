import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Start from './components/start_pages/start';
import MainPage from '../src/components/week_pages/main_page';

ReactDOM.render(
  <React.StrictMode>
    <Start/>
    <MainPage/>
  </React.StrictMode>,
  document.getElementById('root')
);
