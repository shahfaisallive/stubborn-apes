import React from 'react';

const AdminScreen = ({ accountAddress }) => {
    return <div className='container-fluid admin-wrapper'>
        <div className='container'>
            <div className='row d-block justify-content-center mt-5'>
                <p className='heading1 text-center'>Owner Portal</p>
                <span className='d-flex justify-content-center'><p className='font-weight-bold text-light'>Owner Address:</p><p className='text-light ml-3'>{accountAddress}</p></span>
            </div>

            <div className='row mt-5'>
                <div className='col-7'>
                    <div className='admin-options'>
                        <div className='d-flex'>
                            <button className='button5'>
                                Pause Contract
                            </button>
                        </div>
                        <div className='d-flex'>
                            <p className='admin-txt1'>Current Status:</p>
                            <p className='admin-txt2'>False</p>
                        </div>
                    </div>

                    <div className='admin-options mt-4'>
                        <div className='d-flex'>
                            <button className='button5'>
                                Set Base URI
                            </button>
                            <input type='text' className='input1' placeholder='Set your base uri' />
                        </div>
                        <div className='d-flex'>
                            <p className='admin-txt1'>Current URI:</p>
                            <p className='admin-txt2'>https://ipfs.infura.io/ipfs/</p>
                        </div>
                    </div>

                    <div className='admin-options mt-4'>
                        <div className='d-flex'>
                            <button className='button5'>
                                Set Presale Cost
                            </button>
                            <input type='number' className='input1' placeholder='Enter presale cost in ether' />
                        </div>
                        <div className='d-flex'>
                            <p className='admin-txt1'>Current Cost:</p>
                            <p className='admin-txt2'>0.02 ether</p>
                        </div>
                    </div>

                    <div className='admin-options mt-4'>
                        <div className='d-flex'>
                            <button className='button5'>
                                Set Public Sale Cost
                            </button>
                            <input type='number' className='input1' placeholder='Enter public sale cost in ether' />
                        </div>
                        <div className='d-flex'>
                            <p className='admin-txt1'>Current Cost:</p>
                            <p className='admin-txt2'>0.08 ether</p>
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

                <div className='col-5'>
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
