import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/index"
import "./index.css";
import { AuthProvider } from './hooks/auth';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
