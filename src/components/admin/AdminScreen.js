import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const AdminScreen = ({ accountAddress, contract }) => {
    const [loadingData, setLoadingData] = useState(false)
    const [paused, setPaused] = useState(null)
    const [baseURI, setBaseURI] = useState('')
    const [publicCost, setPublicCost] = useState(null)
    const [presaleCost, setPresaleCost] = useState(null)


    // Input states
    const [newBaseURI, setNewBaseURI] = useState('')
    const [newPresaleCost, setNewPresaleCost] = useState()
    const [newPublicCost, setNewPublicCost] = useState()



    useEffect(() => {
        setLoadingData(true)
        async function fetchData() {
            const paused = await contract.methods
                .paused()
                .call();
            setPaused(paused)

            const baseURI = await contract.methods
                .baseURI()
                .call();
            setBaseURI(baseURI)

            const presaleCost = await contract.methods
                .presaleCost()
                .call();
            setPresaleCost(Web3.utils.fromWei(presaleCost, 'ether'))

            const publicCost = await contract.methods
                .publicSaleCost()
                .call();
            setPublicCost(Web3.utils.fromWei(publicCost, 'ether'))



            setLoadingData(false)
        }
        fetchData()
        console.log(paused)
    }, [paused, baseURI, contract])


    const pauseContractHandler = async () => {
        await contract.methods
            .pause(!paused)
            .send({ from: accountAddress })
    }

    const setBaseURIHandler = async () => {
        await contract.methods
            .setBaseURI(newBaseURI)
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



    return <div className='container-fluid admin-wrapper'>
        <div className='container'>
            <div className='row d-block justify-content-center mt-5'>
                <p className='heading1 text-center'>Owner Portal</p>
                <span className='d-flex justify-content-center'><p className='font-weight-bold text-light'>Owner Address:</p><p className='text-light ml-3'>{accountAddress}</p></span>
            </div>

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
                            <button className='button5'>
                                Set Presale Time
                            </button>
                            <input type='number' className='input1' placeholder='Enter timestamp e.g 1649959200' />
                        </div>
                        <div className='d-flex'>
                            <p className='admin-txt1'>Current Timestamp:</p>
                            <p className='admin-txt2'>1649959200</p>
                        </div>
                    </div>

                    <div className='admin-options mt-4'>
                        <div className='d-flex'>
                            <button className='button5'>
                                Set Public sale Time
                            </button>
                            <input type='number' className='input1' placeholder='Enter timestamp e.g 1649959200' />
                        </div>
                        <div className='d-flex'>
                            <p className='admin-txt1'>Current Timestamp:</p>
                            <p className='admin-txt2'>1649959200</p>
                        </div>
                    </div>

                    <div className='admin-options mt-4'>
                        <div className='d-flex'>
                            <button className='button5'>
                                Add Whitelist Address
                            </button>
                            <input type='text' className='input1' placeholder='0xb221C202cF15E088B5DF9C60A19...' />
                        </div>
                    </div>
                </div>

                <div className='col-md-5'>
                    <div className='d-flex'>
                        <p className='admin-txt1'>Contract:</p>
                        <p className='admin-txt2'>0x1ceF4Eb1e2A398421073B349CA77D5FAF0d8AcB0</p>
                    </div>

                    <div className='d-flex'>
                        <p className='admin-txt1'>Name:</p>
                        <p className='admin-txt2'>Stubborn Apes</p>
                    </div>

                    <div className='d-flex'>
                        <p className='admin-txt1'>Symbol:</p>
                        <p className='admin-txt2'>APE</p>
                    </div>

                    <div className='d-flex'>
                        <p className='admin-txt1'>Total Minted Tokens:</p>
                        <p className='admin-txt2'>12</p>
                    </div>

                    <div className='d-flex'>
                        <p className='admin-txt1'>Max Supply:</p>
                        <p className='admin-txt2'>10000</p>
                    </div>

                    <div className='d-flex'>
                        <p className='admin-txt1'>Presale Cost:</p>
                        <p className='admin-txt2'>0.02 Ether</p>
                    </div>


                    <div className='d-flex'>
                        <p className='admin-txt1'>Public Sale cose:</p>
                        <p className='admin-txt2'>0.08 Ether</p>
                    </div>

                    <div className='d-flex mt-4'>
                        <p className='admin-txt1'>Balance:</p>
                        <p className='admin-txt2'>6.0503 Ether</p>
                    </div>


                    <div className='admin-options mt-2'>
                        <div className='d-flex'>
                            <button className='button5'>
                                Withdraw
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
};

export default AdminScreen;
