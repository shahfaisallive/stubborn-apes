import React from 'react'
import Banner from '../../media/banner.png'

const Header = ({days, hours, minutes, seconds}) => {
    return (
        <div className='container-fluid header-wrapper' id='home' style={{ backgroundImage: `url(${Banner})`, backgroundSize: 'contain', backgroundRepeat: 'repeat-y' }}>
            <div className='container justify-content-center'>
                <div className='row d-block'>
                    <p className='header-text1 text-center'>One of the best NFT's marketplace</p>
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

                <div className='row justify-content-center d-flex mt-5'>
                    <div className='text-center'>
                        <div className='timer-div'>
                            <span>{days}</span>  :  <span>{hours}</span>  :  <span>{minutes}</span>  :  <span>{seconds}</span>
                        </div>
                        <div className='timer-div-text'>
                            {/* <p>Days         :           Hours           :           Minutes         :           Seconds</p> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
