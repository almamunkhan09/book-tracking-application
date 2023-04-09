import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import App from './App';
import NotFound from './Components/NotFound';
import Search from './Search';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
