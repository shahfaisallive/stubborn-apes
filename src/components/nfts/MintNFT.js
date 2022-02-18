import React from 'react'
import MintBg from '../../media/banner.png'

const MintNFT = () => {
    return (
        <div className='mintnft-wrapper container-fluid d-flex justify-content-center'>
            <div className='row container'>
                <div className='col-md-6 mintnft-left'>
                    <p className='heading1 text-center'>MINT YOUR NFT</p>
                    <div className='mint-box mt-5'>
                        <p className='mint-text1 text-center'>0/7000</p>
                        <p className='mint-text2 text-center'>0x0b7C7Efe2183fEf476b5f86cE53dA612c5dC89b6</p>
                        <p className='mint-text3 text-center mt-5'>1 Stubborn Ape 0.08 ETH.</p>
                        <p className='mint-text2 text-center'>Excluding gas fees</p>

                        <div className='row d-flex justify-content-center'>
                            <button className='button2 mt-3'>
                                Mint an Ape
                            </button>
                        </div>
                    </div>

                    <p className='mint-text4 text-center mt-2 ml-1 mr-1'>Please make sure you are connected to the right network (Ethereum Mainnet) and the correct address.
                        Please note: once you make the purchase, you cannot undo this action. We have set the gas limit to
                        285000 for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit.</p>

                </div>

                <div className='col-md-6 mintnft-right pt-5 pl-5' >
                    {/* <div className='mint-nft-gallery' style={{ backgroundImage: `url(${MintBg})`, backgroundSize: '100%', backgroundRepeat: 'repeat-y' }}>
                        
                    </div> */}
                    <img src={'/images/double-ape.png'} className='specs-img-ape mt-5 ml-5' alt='double-ape' />
                </div>
            </div>
        </div>
    )
}

export default MintNFT