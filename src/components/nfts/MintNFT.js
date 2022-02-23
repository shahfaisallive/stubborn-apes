import React, { useEffect, useState } from 'react'

const MintNFT = ({ accountAddress, contract, presaleCost, publicCost, presaleExpired }) => {
    const [totalMinted, setTotalMinted] = useState(null)
    const [maxSupply, setMaxSupply] = useState(null)

    useEffect(() => {
        async function fetchData() {

            const totalMinted = await contract.methods
                ._mintedItems()
                .call();
            setTotalMinted(totalMinted)

            const maxSupply = await contract.methods
                .MAX_ITEMS()
                .call();
            setMaxSupply(maxSupply)
        }
        fetchData()
    }, [contract])

    return (
        <div className='mintnft-wrapper container-fluid d-flex justify-content-center'>
            <div className='row container'>
                <div className='col-md-6 mintnft-left'>
                    <p className='heading1 text-center'>MINT YOUR NFT</p>
                    <div className='mint-box mt-5'>
                        <div className='row d-flex justify-content-center'>
                            {!totalMinted || !maxSupply ? <div className="spinner-border spinner-border mb-4 text-success spinner-loader" role="status" /> :
                                <p className='mint-text1 text-center'>{totalMinted}/{maxSupply}</p>}
                        </div>

                        <p className='mint-text2 text-center'>{accountAddress}</p>
                        {presaleExpired ? <p className='mint-text3 text-center mt-5'>1 Stubborn Ape is {presaleCost} ETH.</p> :
                            !presaleExpired ? <p className='mint-text3 text-center mt-5'>Presale not active yet</p> :
                                <p className='mint-text3 text-center mt-5'>{publicCost}</p>}

                        <p className='mint-text2 text-center'>Excluding gas fees</p>

                        <div className='row d-flex justify-content-center'>
                            {presaleExpired ? <button className='button2 mt-3'>
                                Mint
                            </button> :
                                <button className='button2 mt-3 opacity-50 border bg-success' disabled>
                                    Mint
                                </button>}
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