import React from 'react'
import Banner from '../../media/banner.png'

const Header = ({ days, hours, minutes, seconds }) => {
    return (
        <div className='container-fluid header-wrapper' id='home' style={{ backgroundImage: `url(${Banner})`, backgroundSize: '100%', backgroundRepeat: 'repeat-y' }}>
            <div className='container justify-content-center'>
                <div className='row d-block'>
                    <p className='header-title text-center'>Welcome to the <br /> Stubborn Ape Society</p>
                    <p className='header-text2 text-center'>The Stubborn Ape Society is a collection of 7,000 Unique Stubborn Ape NFT’s</p>
                </div>

                <div className='row justify-content-center d-flex mt-5'>
                    <button className='button1 mr-2' id='headerbtn1'>
                        View on Opensea
                    </button>
                    <button className='button2 ml-2' id='headerbtn2'>
                        Mint Now
                    </button>
                </div>

                <p className='heading1 text-center mt-5'>PRESALE STARTS IN</p>

                <div className='row justify-content-center'>
                    <div className='container d-flex justify-content-center'>
                        <div className='row timer-div justify-content-center'>
                            <div className='col-2 text-center timer-unit-box'>
                                <p className='timer-text1'>{days}</p>
                                <p className='timer-text2'>days</p>
                            </div>
                            <div className='col-1 text-center timer-unit-box'>
                                <p className='timer-text1'>:</p>
                            </div>
                            <div className='col-2 text-center timer-unit-box'>
                                <p className='timer-text1'>{hours}</p>
                                <p className='timer-text2'>hours</p>
                            </div>
                            <div className='col-1 text-center timer-unit-box'>
                                <p className='timer-text1'>:</p>
                            </div>
                            <div className='col-2 text-center timer-unit-box'>
                                <p className='timer-text1'>{minutes}</p>
                                <p className='timer-text2'>minutes</p>
                            </div>
                            <div className='col-1 text-center timer-unit-box'>
                                <p className='timer-text1'>:</p>
                            </div>
                            <div className='col-2 text-center timer-unit-box'>
                                <p className='timer-text1'>{seconds}</p>
                                <p className='timer-text2'>seconds</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
