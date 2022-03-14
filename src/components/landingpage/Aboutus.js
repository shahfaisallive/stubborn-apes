import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

import { ReactComponent as BlueIcon } from '../../media/blue.svg'
import { ReactComponent as YellowIcon } from '../../media/yellow.svg'
import { ReactComponent as RedIcon } from '../../media/red.svg'
import { ReactComponent as EtherIcon } from '../../media/ether.svg'
import { Link } from 'react-router-dom'

const Aboutus = ({ publicCost, presaleCost, contractDetected }) => {
    const options = {
        delay: 1,
        duration: 2000,
        rotate: {
            x: 100,
            y: 0,
            z: 0,
        },
    }
    useEffect(() => {
        ScrollReveal().reveal('.scroll-element', options)
    }, [])

    return (
        <div className='container aboutus-wrapper' id='about'>
            <div className='row'>
                <div className='col-md-6 aboutus-left'>
                    <p className='heading1'>About Us</p>
                    <p className='basic-text1'>Once you decide to mint and join the Stubborn Ape Society, you are not minting just another NFT, you are receiving access to an exclusive society with endless benefits! Your Stubborn Ape will serve as your membership to the exclusive Stubborn Ape society. With our membership, you will gain access to exclusive giveaways, additional digital collectables, private events, and even have the ability to breed your NFT! </p>

                    <Link to='/mintnft'>
                        <button className='button2 mt-4'>
                            Mint Now
                        </button>
                    </Link>
                </div>

                <div className='col-md-6 aboutus-right'>
                    <div className='row'>
                        <div className='col-6 pt-5'>
                            <img src={'/images/Variant_1.png'} alt='ape' className="aboutus-apes mt-3 scroll-element" />
                            <img src={'/images/Variant_10.png'} alt='ape' className="aboutus-apes mt-4 scroll-element" />
                        </div>
                        <div className='col-6'>
                            <img src={'/images/Variant_5.png'} alt='ape' className="aboutus-apes scroll-element" />
                            <img src={'/images/Variant_6.png'} alt='ape' className="aboutus-apes mt-4 scroll-element" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row d-flex mt-5'>
                <div className='col-sm-4 justify-content-center d-flex'>
                    <div className='about-stats-div scroll-element'>
                        <YellowIcon className='traits-icons' />
                        <p className='traits-text1 text-center'>100</p>
                        <p className='traits-text2 text-center'>Traits</p>
                    </div>
                </div>
                <div className='col-sm-4 justify-content-center d-flex'>
                    <div className='about-stats-div scroll-element'>
                        <BlueIcon className='traits-icons' />
                        <p className='traits-text1 text-center'>{!contractDetected ? '0.02' : presaleCost ? presaleCost : '--'}<EtherIcon className='trait-ether-icon' /></p>
                        <p className='traits-text2 text-center'>Presale Cost</p>
                    </div>
                </div>
                <div className='col-sm-4 justify-content-center d-flex'>
                    <div className='about-stats-div scroll-element'>
                        <RedIcon className='traits-icons' />
                        <p className='traits-text1 text-center'>{!contractDetected ? '0.08' : publicCost ? publicCost : '--'}<EtherIcon className='trait-ether-icon' /></p>
                        <p className='traits-text2 text-center'>Public Sale Cost</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
