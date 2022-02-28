import React, { useEffect, useState } from 'react'
import Web3 from 'web3';

const MintNFT = ({ accountAddress, contract, presaleCost, publicCost, presaleStarted, publicSaleStarted, paused }) => {
    const [totalMinted, setTotalMinted] = useState(null)
    const [maxSupply, setMaxSupply] = useState(null)
    const [maxMintAmount, setMaxMintAmount] = useState(null)
    const [mintAmount, setMintAmount] = useState(0)


    const mintApeHandler = async () => {
        setMintAmount(0)
        let price
        if (presaleStarted && mintAmount) {
            price = Web3.utils.toWei((mintAmount * parseFloat(presaleCost)).toString(), 'ether')
            console.log(price)
            await contract.methods
                .presaleMint()
                .send({ from: accountAddress, value: price })
        } else if (publicSaleStarted && mintAmount) {
            price = Web3.utils.toWei((mintAmount * parseFloat(publicCost)).toString(), 'ether')
            console.log(price)
            await contract.methods
                .publicSaleMint()
                .send({ from: accountAddress, value: price })
        }

    }

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

            const maxMintAmount = await contract.methods
                .maxMintAmount()
                .call();
            setMaxMintAmount(maxMintAmount)
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

                        <div className='row d-flex justify-content-center'>
                            <p className='mint-text2 text-center'>{accountAddress}</p>
                        </div>

                        {paused ? <p className='mint-text3 text-center mt-5'>Minting is Paused</p> :
                            presaleStarted && !publicSaleStarted ? <p className='mint-text3 text-center mt-5'>1 Stubborn Ape is {presaleCost} ETH.</p> :
                                publicSaleStarted && !presaleStarted ? <p className='mint-text3 text-center mt-5'>1 Stubborn Ape is {publicCost} ETH.</p> :
                                    !presaleStarted && !publicSaleStarted ? <p className='mint-text3 text-center mt-5'>Presale not active yet</p>
                                        : null}

                        {paused ? <p></p> : presaleStarted || publicSaleStarted ? <p className='mint-text2 text-center'>Excluding gas fees</p>
                            : null}


                        <div className='row d-flex justify-content-center'>
                            {paused ? <button className='button2 mt-3 opacity-50 border bg-success' disabled>
                                Mint
                            </button> :
                                presaleStarted || publicSaleStarted ? <div className='d-flex mt-3'>
                                    <button className='button7 mr-5 mt-1' onClick={() => { mintAmount > 0 ? setMintAmount(mintAmount - 1) : console.log('Negative mint amount not allowed') }}>
                                        <b>-</b>
                                    </button>
                                    <button className='button2' onClick={mintApeHandler}>
                                        Mint
                                    </button>
                                    <button className='button7 ml-5 mt-1' onClick={() => { mintAmount < maxMintAmount ? setMintAmount(mintAmount + 1) : console.log('Max mint amount per transaction raeched') }}>
                                        <b>+</b>
                                    </button>
                                </div> :
                                    <button className='button2 mt-3 opacity-50 border bg-success' disabled>
                                        Mint
                                    </button>}
                        </div>
                        <div className='d-flex justify-content-center'>
                            <p className='text-white mt-3'>Mint Amount:</p>
                            <p className='text-white ml-2 mt-3'>{mintAmount}</p>
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