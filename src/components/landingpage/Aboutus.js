import React from 'react'

import { ReactComponent as BlueIcon } from '../../media/blue.svg'
import { ReactComponent as YellowIcon } from '../../media/yellow.svg'
import { ReactComponent as GreenIcon } from '../../media/green.svg'
import { ReactComponent as RedIcon } from '../../media/red.svg'
import { ReactComponent as EtherIcon } from '../../media/ether.svg'



const Aboutus = () => {
    return (
        <div className='container aboutus-wrapper' id='about'>
            <div className='row'>
                <div className='col-md-6 aboutus-left'>
                    <p className='heading1'>About Us</p>
                    <p className='basic-text1'>Once you decide to mint and join the Stubborn Ape Society, you are not minting just another NFT, you are receiving access to an exclusive society with endless benefits! Your Stubborn Ape will serve as your membership to the exclusive Stubborn Ape society. With our membership, you will gain access to exclusive giveaways, additional digital collectables, private events, and even have the ability to breed your NFT! </p>

                    <button className='button2 mt-4'>
                        Mint Now
                    </button>
                </div>

                <div className='col-md-6 aboutus-right'>
                    <div className='row'>
                        <div className='col-6 pt-5'>
                            <img src={'/images/white-ape.png'} alt='white-ape' className="aboutus-apes mt-3" />
                            <img src={'/images/blue-ape.png'} alt='white-ape' className="aboutus-apes mt-4" />
                        </div>
                        <div className='col-6'>
                            <img src={'/images/green-ape.png'} alt='white-ape' className="aboutus-apes" />
                            <img src={'/images/yellow-ape.png'} alt='white-ape' className="aboutus-apes mt-4" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row d-flex mt-5'>
                <div className='col-sm-4 justify-content-center d-flex'>
                    <div className='about-stats-div'>
                        <YellowIcon className='traits-icons' />
                        <p className='traits-text1 text-center'>100</p>
                        <p className='traits-text2 text-center'>Traits</p>
                    </div>
                </div>
                <div className='col-sm-4 justify-content-center d-flex'>
                    <div className='about-stats-div'>
                        <BlueIcon className='traits-icons' />
                        <p className='traits-text1 text-center'>0.06<EtherIcon className='trait-ether-icon'/></p>
                        <p className='traits-text2 text-center'>Presale Cost</p>
                    </div>
                </div>
                <div className='col-sm-4 justify-content-center d-flex'>
                    <div className='about-stats-div'>
                        <RedIcon className='traits-icons' />
                        <p className='traits-text1 text-center'>0.08<EtherIcon className='trait-ether-icon'/></p>
                        <p className='traits-text2 text-center'>Public Sale Cost</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
