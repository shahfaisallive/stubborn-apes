import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing components
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import MyNFTs from './components/MyNFTs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mynfts" element={<MyNFTs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
