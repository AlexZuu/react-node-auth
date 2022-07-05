import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { AuthProvider } from './context/AuthProvider';
import Login from './components/login';
import Page from './components/page';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="page" element={<Page/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
