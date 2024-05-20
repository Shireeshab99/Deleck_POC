import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import List from './dashboard'
import StorageInfo from './storageInfo'
import Screens from './screens'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<List/>} />
        <Route path="/storageInfo" element={<StorageInfo/>} />
        <Route path="/screens" element={<Screens/>} /> 
        <Route path="/storageInfo/:id" element={<StorageInfo/>} />
        <Route path="/screens/:id" element={<Screens/>} />        
    </Routes>
</BrowserRouter>
  );
}

export default App;
