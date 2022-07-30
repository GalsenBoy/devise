import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Dollar from './Components/Dollar';
import Euro from './Components/Euro';
import Xof from './Components/Xof';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dollar" element={<Dollar />} />
      <Route path="/euro" element={<Euro />} />
      <Route path="/franc" element={<Xof />} />
    </Routes>
  </BrowserRouter>
);

