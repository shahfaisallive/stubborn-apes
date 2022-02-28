import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { HiRefresh } from 'react-icons/hi';

const AdminScreen = ({ accountAddress, contract }) => {
    const [loadingData, setLoadingData] = useState(false)
    const [owner, setOwner] = useState(null)
    const [paused, setPaused] = useState(null)
    const [revealed, setRevealed] = useState(null)
    const [baseURI, setBaseURI] = useState('')
    const [unrevealedURI, setUnrevealedURI] = useState('')
    const [publicCost, setPublicCost] = useState(null)
    const [presaleCost, setPresaleCost] = useState(null)
    const [presaleTime, setPresaleTime] = useState(null)
    const [publicTime, setPublicTime] = useState(null)
    const [name, setName] = useState(null)
    const [symbol, setSymbol] = useState(null)
    const [totalMinted, setTotalMinted] = useState(null)
    const [maxSupply, setMaxSupply] = useState(null)
    const [balance, setBalance] = useState(null)
    const [refresh, setRefresh] = useState(false)


    // Input states
    const [newBaseURI, setNewBaseURI] = useState('')
    const [newUnrevealedURI, setNewUnrevealedURI] = useState('')
    const [newPresaleCost, setNewPresaleCost] = useState()
    const [newPublicCost, setNewPublicCost] = useState()
    const [newPresaleTime, setNewPresaleTime] = useState()
    const [newPublicTime, setNewPublicTime] = useState()
    const [whitelistAddress, setWhitelistAddress] = useState()
    const [mintAmount, setMintAmount] = useState(0)


    // GET DATA FROM BLOCKCHAIN
    useEffect(() => {
        setLoadingData(true)

        async function fetchData() {
            const owner = await contract.methods
                .owner()
                .call();
            setOwner(owner)

            const name = await contract.methods
                .name()
                .call();
            setName(name)

            const symbol = await contract.methods
                .symbol()
                .call();
            setSymbol(symbol)

            const totalMinted = await contract.methods
                ._mintedItems()
                .call();
            setTotalMinted(totalMinted)

            const maxSupply = await contract.methods
                .MAX_ITEMS()
                .call();
            setMaxSupply(maxSupply)

            const paused = await contract.methods
                .paused()
                .call();
            setPaused(paused)

            const revealed = await contract.methods
                .revealed()
                .call();
            setRevealed(revealed)

            const baseURI = await contract.methods
                .baseURI()
                .call();
            setBaseURI(baseURI)

            const unrevealedURI = await contract.methods
                .notRevealedUri()
                .call();
            setUnrevealedURI(unrevealedURI)

            const presaleCost = await contract.methods
                .presaleCost()
                .call();
            setPresaleCost(Web3.utils.fromWei(presaleCost, 'ether'))

            const publicCost = await contract.methods
                .publicSaleCost()
                .call();
            setPublicCost(Web3.utils.fromWei(publicCost, 'ether'))

            const presaleTime = await contract.methods
                .presaleStartTimestamp()
                .call();
            setPresaleTime(presaleTime)

            const publicTime = await contract.methods
                .publicSaleStartTimestamp()
                .call();
            setPublicTime(publicTime)

            const balance = await contract.methods
                .balanceOf(owner)
                .call();
            setBalance(Web3.utils.fromWei(balance, 'ether'))

            setLoadingData(false)
        }
        fetchData()
    }, [paused, baseURI, contract, refresh])


    // SETTER FUNCTIONS FOR ONLY OWNER
    const pauseContractHandler = async () => {
        await contract.methods
            .pause(!paused)
            .send({ from: accountAddress })
    }

    const revealMetadataHandler = async () => {
        await contract.methods
            .reveal(!revealed)
            .send({ from: accountAddress })
    }

    const setBaseURIHandler = async () => {
        await contract.methods
            .setBaseURI(newBaseURI)
            .send({ from: accountAddress })
    }

    const setUnrevealedURIHandler = async () => {
        await contract.methods
            .setNotRevealedURI(newUnrevealedURI)
            .send({ from: accountAddress })
    }


    const setPresaleCostHandler = async () => {
        await contract.methods
            .setPresaleCost(Web3.utils.toWei(newPresaleCost, 'ether'))
            .send({ from: accountAddress })
    }

    const setPublicCostHandler = async () => {
        await contract.methods
            .setPublicSaleCost(Web3.utils.toWei(newPublicCost, 'ether'))
            .send({ from: accountAddress })
    }

    const setPresaleTimeHandler = async () => {
        await contract.methods
            .setPresaleStartTimestamp(newPresaleTime)
            .send({ from: accountAddress })
    }

    const setPublicTimeHandler = async () => {
        await contract.methods
            .setPublicSaleStartTimestamp(newPublicTime)
            .send({ from: accountAddress })
    }

    const addWhitelistAddressHandler = async () => {
        await contract.methods
            .whitelistUser(whitelistAddress)
            .send({ from: accountAddress })
    }

    const withdrawHandler = async () => {
        await contract.methods
            .withdraw()
            .call()
    }

    const adminMintHandler = async () => {
        setMintAmount(0)

        await contract.methods
            .ownerMint(mintAmount)
            .send({ from: accountAddress})
    }


    return <div className='container-fluid admin-wrapper'>
        <div className='container'>
            <div className='row d-block justify-content-center mt-5'>
                <p className='heading1 text-center'>Owner Portal</p>
                <span className='d-flex justify-content-center'><p className='font-weight-bold text-light'>Owner Address:</p><p className='text-light ml-3'>{owner}</p></span>
            </div>


            {/* CONTRACT SETTER FUNCTIONS SECTION */}
            {/* CONTRACT SETTER FUNCTIONS SECTION */}
            {/* CONTRACT SETTER FUNCTIONS SECTION */}
            <div className='row mt-5'>
                <div className='col-md-7 admin-left' >
                    <div className='admin-options'>
                        <div className='d-flex'>
                            <button className='button5' onClick={pauseContractHandler}>
                                Pause Contract
                            </button>
                        </div>
                        <div className='d-flex'>
                            <p className='admin-txt1'>Current Status:</p>
                            {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                                paused && !loadingData ? <p className='admin-txt2'>True</p> : <p className='admin-txt2'>False</p>}
                        </div>
                    </div>

                    <div className='admin-options mt-4'>
                        <div className='d-flex'>
                            <button className='button5' onClick={setBaseURIHandler}>
                                Set Base URI
                            </button>
                            <input type='text' className='input1' placeholder='Set your base uri' value={newBaseURI} onChange={(e) => setNewBaseURI(e.target.value)} />
                        </div>
                        <div className='d-flex'>
                            <p className='admin-txt1'>Current URI:</p>
                            {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                                <p className='admin-txt2'>{baseURI}</p>}
                        </div>
                    </div>

                    <div className='admin-options mt-4'>
                        <div className='d-flex'>
                            <button className='button5' onClick={setUnrevealedURIHandler}>
                                Set Unrevealed URI
                            </button>
                            <input type='text' className='input1' placeholder='Set your unrevealed URI' value={newUnrevealedURI} onChange={(e) => setNewUnrevealedURI(e.target.value)} />
                        </div>
                        <div className='d-flex'>
                            <p className='admin-txt1'>Current URI:</p>
                            {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                                <p className='admin-txt2'>{unrevealedURI}</p>}
                        </div>
                    </div>

                    <div className='admin-options mt-4'>
                        <div className='d-flex'>
                            <button className='button5' onClick={setPresaleCostHandler}>
                                Set Presale Cost
                            </button>
                            <input type='number' className='input1' placeholder='Enter presale cost in ether' value={newPresaleCost} onChange={(e) => setNewPresaleCost(e.target.value)} />
                        </div>
                        <div className='d-flex'>
                            <p className='admin-txt1'>Current Cost:</p>
                            {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                                <p className='admin-txt2'>{presaleCost} Ether</p>}
                        </div>
                    </div>

                    <div className='admin-options mt-4'>
                        <div className='d-flex'>
                            <button className='button5' onClick={setPublicCostHandler}>
                                Set Public Sale Cost
                            </button>
                            <input type='number' className='input1' placeholder='Enter public sale cost in ether' value={newPublicCost} onChange={(e) => setNewPublicCost(e.target.value)} />
                        </div>
                        <div className='d-flex'>
                            <p className='admin-txt1'>Current Cost:</p>
                            {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                                <p className='admin-txt2'>{publicCost} Ether</p>}
                        </div>
                    </div>


                    <div className='admin-options mt-4'>
                        <div className='d-flex'>
                            <button className='button5' onClick={setPresaleTimeHandler}>
                                Set Presale Time
                            </button>
                            <input type='number' className='input1' placeholder='Enter timestamp e.g 1649959200' value={newPresaleTime} onChange={(e) => setNewPresaleTime(e.target.value)} />
                        </div>
                        <div className='d-flex'>
                            <p className='admin-txt1'>Current Timestamp:</p>
                            {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                                <p className='admin-txt2'>{presaleTime}</p>}
                        </div>
                    </div>

                    <div className='admin-options mt-4'>
                        <div className='d-flex'>
                            <button className='button5' onClick={setPublicTimeHandler}>
                                Set Public sale Time
                            </button>
                            <input type='number' className='input1' placeholder='Enter timestamp e.g 1649959200' value={newPublicTime} onChange={(e) => setNewPublicTime(e.target.value)} />
                        </div>
                        <div className='d-flex'>
                            <p className='admin-txt1'>Current Timestamp:</p>
                            {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                                <p className='admin-txt2'>{publicTime}</p>}
                        </div>
                    </div>

                    <div className='admin-options mt-4'>
                        <div className='d-flex'>
                            <button className='button5' onClick={addWhitelistAddressHandler}>
                                Add Whitelist Address
                            </button>
                            <input type='text' className='input1' placeholder='0xb221C202cF15E088B5DF9C60A19...' value={whitelistAddress} onChange={(e) => setWhitelistAddress(e.target.value)} />
                        </div>
                    </div>
                </div>


                {/* CONTRACT INFO SECTION */}
                {/* CONTRACT INFO SECTION */}
                {/* CONTRACT INFO SECTION */}
                <div className='col-md-5'>
                    <div className='d-flex justify-content-end'>
                        <button className='button6' onClick={() => setRefresh(!refresh)}><HiRefresh /> Refresh</button>
                    </div>

                    <div className='d-flex'>
                        <p className='admin-txt1'>Contract:</p>
                        {contract ? <p className='admin-txt2'>{contract._address}</p> : <p className='admin-txt2'></p>}
                    </div>

                    <div className='d-flex'>
                        <p className='admin-txt1'>Name:</p>
                        {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                            <p className='admin-txt2'>{name}</p>}
                    </div>

                    <div className='d-flex'>
                        <p className='admin-txt1'>Symbol:</p>
                        {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                            <p className='admin-txt2'>{symbol}</p>}
                    </div>

                    <div className='d-flex'>
                        <p className='admin-txt1'>Total Minted Tokens:</p>
                        {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                            <p className='admin-txt2'>{totalMinted}</p>}
                    </div>

                    <div className='d-flex'>
                        <p className='admin-txt1'>Max Supply:</p>
                        {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                            <p className='admin-txt2'>{maxSupply}</p>}
                    </div>

                    <div className='d-flex'>
                        <p className='admin-txt1'>Presale Cost:</p>
                        {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                            <p className='admin-txt2'>{presaleCost} Ether</p>}
                    </div>


                    <div className='d-flex'>
                        <p className='admin-txt1'>Public Sale Cost:</p>
                        {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                            <p className='admin-txt2'>{publicCost} Ether</p>}
                    </div>

                    <div className='d-flex mt-4'>
                        <p className='admin-txt1'>Metadata Revealed:</p>
                        {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                            <p className='admin-txt2'>{revealed ? 'True' : 'False'}</p>}
                    </div>

                    <div className='admin-options mt-2'>
                        <div className='d-flex'>
                            <button className='button5' onClick={revealMetadataHandler}>
                                <b>REVEAL METADATA</b>
                            </button>
                        </div>
                    </div>

                    <div className='d-flex mt-4'>
                        <p className='admin-txt1'>Balance:</p>
                        {loadingData ? <div className="spinner-border spinner-border-sm text-success spinner-loader" role="status" /> :
                            <p className='admin-txt2'>{balance} Ether</p>}
                    </div>


                    <div className='admin-options mt-2'>
                        <div className='d-flex'>
                            <button className='button5' onClick={withdrawHandler}>
                                <b>WITHDRAW</b>
                            </button>
                        </div>
                    </div>

                    <hr className='mt-5 border border-light'></hr>

                    <div className='admin-options justify-content-center mt-5'>
                        <p className='admin-txt3 text-center'>MINT BY ADMIN</p>
                        <p className='text-center text-light'>Mint by paying only gas fees</p>
                    </div>

                    <div className='admin-options mt-4'>
                        <div className='d-flex justify-content-center'>
                            <button className='button7 mr-5' onClick={() => { mintAmount > 0 ? setMintAmount(mintAmount - 1) : console.log('Negative mint amount not allowed') }}>
                                <b>-</b>
                            </button>
                            <button className='button5' style={{ backgroundColor: 'red' }} onClick={adminMintHandler}>
                                <b>MINT</b>
                            </button>
                            <button className='button7 ml-5' onClick={() => { setMintAmount(mintAmount + 1) }}>
                                <b>+</b>
                            </button>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <p className='text-white mt-3'>Mint Amount:</p>
                            <p className='text-white ml-2 mt-3'>{mintAmount}</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
};

export default AdminScreen;
