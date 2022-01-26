import React, { useEffect, useState } from 'react';
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
  const [saleCounterTime, setSaleCounterTime] = useState(new Date("2022-04-14T17:00:00.000-05:00"))
  const [presaleExpired, setPresaleExpired] = useState(false)
  const [expiryTime, setExpiryTime] = useState(0)

  // const expiryTimestamp = new Date(2022, 0, 26, 14, 50, 0);
  const expiryTimestamp = new Date("2022-04-14T17:00:00.000-05:00")
  const exp = expiryTimestamp.setSeconds(expiryTime);

  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp: exp, onExpire: () => { 
    console.warn('Time expired') 
    setPresaleExpired(true)
    // setSaleCounterTime(new Date(2022, 0, 28, 5, 30, 0))
  }});

  useEffect(() => {
    console.log(  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds()));
    const currentDate = new Date();
    const currentTime = currentDate.getTime()
    setExpiryTime(saleCounterTime.getTime() - currentTime)
    console.log(saleCounterTime.getTime() - currentTime);
    console.log(saleCounterTime)
  }, [saleCounterTime])

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
