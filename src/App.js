import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';

// Importing components
import Navbar from './components/Navbar';
import LandingPage from './components/landingpage/LandingPage';
import MyNFTs from './components/nfts/MyNFTs';
import NFTDetails from './components/nfts/NFTDetails';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';

function App() {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 1800000);

  const {
      seconds,
      minutes,
      hours,
      days,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('Time expired') });


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage seconds={seconds} minutes={minutes} hours={hours} days={days} />} />
          <Route path="/mynfts" element={<MyNFTs />} />
          <Route path="/nftdetail" element={<NFTDetails seconds={seconds} minutes={minutes} hours={hours} days={days} />} />
          <Route path="/team" element={<OurTeam />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
