import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';
import Web3 from 'web3';
import StubbornApe from './abis/StubbornApe.json'


// Importing components
import Navbar from './components/Navbar';
import LandingPage from './components/landingpage/LandingPage';
import MyNFTs from './components/nfts/MyNFTs';
import NFTDetails from './components/nfts/NFTDetails';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import AdminScreen from './components/admin/AdminScreen';

function App() {
  // STATES FOR WEB3 AND CONTRACT INTEGRATION
  const [metamaskConnected, setMetamaskConnected] = useState(false)
  const [accountAddress, setAccountAddresss] = useState('')
  const [apeContract, setApeContract] = useState(null)
  const [contractDetected, setContractDetected] = useState(false)
  const [accountBalance, setAccountBalance] = useState('')
  const [isOwner, setIsOwner] = useState(false)

  // STATES FOR RELEASE TIMER
  const [saleCounterTime, setSaleCounterTime] = useState(new Date("2022-04-14T17:00:00.000-05:00"))
  const [presaleExpired, setPresaleExpired] = useState(false)
  const [expiryTime, setExpiryTime] = useState(0)

  const expiryTimestamp = new Date("2022-04-14T17:00:00.000-05:00")
  const exp = expiryTimestamp.setSeconds(expiryTime);

  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({
    expiryTimestamp: exp, onExpire: () => {
      console.warn('Time expired')
      setPresaleExpired(true)
      // setSaleCounterTime(new Date(2022, 0, 28, 5, 30, 0))
    }
  });


  // LOAD WEB3 FUNCTION
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  // LOADING BLOCKCHAIN DATA
  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();

    if (accounts.length === 0) {
      setMetamaskConnected(false)
    } else {
      setMetamaskConnected(true);
      setAccountAddresss(accounts[0])

      let accountBalance = await web3.eth.getBalance(accounts[0]);
      accountBalance = web3.utils.fromWei(accountBalance, "Ether");
      setAccountBalance(accountBalance);

      // if (accounts[0] === '0x0b7C7Efe2183fEf476b5f86cE53dA612c5dC89b6') {
      //   setIsOwner(true)
      // }

      const networkId = await web3.eth.net.getId();
      const networkData = StubbornApe.networks[networkId]
      console.log(networkData)
      if (networkData) {
        const contract = new web3.eth.Contract(
          StubbornApe.abi,
          networkData.address
        );

        setApeContract(contract)
        console.log(contract)
        setContractDetected(true)

        const owner = await contract.methods
          .owner()
          .call();
        console.log(owner)
        if (accounts[0] === owner) {
          setIsOwner(true)
        }
      }
    }
  };


  // FUNCTION FOR METAMASK INTEGRATION
  const connectToMetamask = async () => {
    await window.ethereum.enable();
    setMetamaskConnected(true)
    window.location.reload();
  };


  // USEEFFECT FUNCTION----->>>
  useEffect(() => {
    async function fetchData() {
      const currentDate = new Date();
      const currentTime = currentDate.getTime()
      setExpiryTime(saleCounterTime.getTime() - currentTime)
      await loadWeb3();
      await loadBlockchainData();
      // console.log(isOwner);
      console.log(accountAddress);
    }
    fetchData();
  }, [saleCounterTime, metamaskConnected, contractDetected])


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar connectToMetamask={connectToMetamask} metamaskConnected={metamaskConnected} accountAddress={accountAddress} isOwner={isOwner} />
        <Routes>
          <Route path="/" element={<LandingPage seconds={seconds} minutes={minutes} hours={hours} days={days} />} />
          <Route path="/mynfts" element={<MyNFTs />} />
          <Route path="/nftdetail" element={<NFTDetails seconds={seconds} minutes={minutes} hours={hours} days={days} />} />
          <Route path="/team" element={<OurTeam />} />
          {isOwner ? <Route path="/admin" element={<AdminScreen accountAddress={accountAddress} contract={apeContract} />} /> : null}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
