import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Home from '../components/Pages/Home';
import List from '../components/Pages/List';
import Rules from '../components/Pages/Rules';
import Contact from '../components/Pages/Contact';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={<App />} />
        <Route path="Home" component={<Home />} />
        <Route path="Rules" component={<Rules />} />
        <Route path="List" component={<List />} />
        <Route path="Contact" component={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
