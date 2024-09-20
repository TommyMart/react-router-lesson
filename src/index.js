import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Outlet } from "react-router-dom";
import { Navbar } from './pages/Navbar';
import { ArticlePage } from './pages/ArticlePage';
import { WatchPage } from './pages/WatchPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Outlet />}>
            <Route index element={<AboutPage />} />
            {/* /about/contact */}
            <Route path="contact" element={<ContactPage />} />
          </Route>
          {/* route indicates there'll be an id parameter available to ArticlePage component */}
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/watch" element={<WatchPage />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
