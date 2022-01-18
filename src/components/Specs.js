import React from 'react'
import { ReactComponent as ArrowIcon } from '../media/arrow.svg'

const Specs = () => {
    return (
        <div className='container-fluid specs-wrapper justify-content-center d-flex'>
            <div className='row container'>
                <div className='col-md-6 specs-left justify-content-start d-flex'>
                    <img src={'/images/double-ape.png'} className='specs-img-ape' alt='double-ape' />
                </div>
                <div className='col-md-6 specs-right'>
                    <p className='heading1'>Rarity and Specs</p>
                    <p className='basic-text1'>We strive to build the strongest community for our members by creating endless value</p>

                    <div className='specs-points mt-5'>
                        <p className='basic-text1'><ArrowIcon className='arrow-icon' />Every Stubborn Ape is Unique with 100 different traits</p>
                        <p className='basic-text1'><ArrowIcon className='arrow-icon' />Legendary Stubborn Ape #777 wins $10,000</p>
                        <p className='basic-text1'><ArrowIcon className='arrow-icon' />Breed your NFT by combining two Stubborn Apes</p>
                    </div>

                    <button className='button2 mt-4'>
                        Mint Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Specs
