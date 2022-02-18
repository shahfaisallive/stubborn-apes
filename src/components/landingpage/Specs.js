import React from 'react'
import { ReactComponent as ArrowIcon } from '../../media/arrow.svg'
import { Link } from 'react-router-dom'

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

                    <div className='specs-points mt-4'>
                        <p className='basic-text1'><ArrowIcon className='arrow-icon' />Every Stubborn Ape is Unique with 100 different traits</p>
                        <p className='basic-text1'><ArrowIcon className='arrow-icon' />Breed your NFT by combining two Stubborn Apes</p>
                        <p className='basic-text1'><ArrowIcon className='arrow-icon' />One Lucky Winner wins $10,000</p>
                    </div>

                    <Link to='/mintnft'>
                        <button className='button2 mt-5'>
                            Mint Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Specs
