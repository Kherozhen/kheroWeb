import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './react/Components/Header/Header';
import Home from './react/Pages/Home';
import Login from './react/Pages/Login';
import Error from './react/Pages/Error';
import Footer from './react/Components/Footer/Footer';
import './Sass/main.css';

// Redux

import { Provider } from 'react-redux';
import Store from './Redux/Store/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);


