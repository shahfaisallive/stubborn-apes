import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ReactComponent as EtherIcon } from '../../media/ether.svg'
import { ReactComponent as OpenseaIcon } from '../../media/opensea.svg'


const NFTGallery = ({ contract, metamaskConnected }) => {
    const [loadingData, setLoadingData] = useState(false)
    const [nftList, setNftList] = useState([])
    const [loadingError, setLoadingError] = useState(false)
    const [revealed, setRevealed] = useState(null)
    const [baseURI, setBaseURI] = useState('')
    const [unrevealedURI, setUnrevealedURI] = useState('')
    const [totalMinted, setTotalMinted] = useState(null)


    useEffect(() => {
        window.scrollTo(0, 0)
        setLoadingData(true)
        async function fetchData() {
            const revealed = await contract.methods
                .revealed()
                .call();
            setRevealed(revealed)

            const baseURI = await contract.methods
                .baseURI()
                .call();
            setBaseURI(baseURI)

            const unrevealedURI = await contract.methods
                .notRevealedUri()
                .call();
            setUnrevealedURI(unrevealedURI)

            const totalMinted = await contract.methods
                ._mintedItems()
                .call();
            setTotalMinted(totalMinted)

            let nftArray = []
            for (let i = 1; i <= totalMinted; i++) {
                try {
                    const metaDataObj = await axios.get(`${!revealed ? unrevealedURI : baseURI + i.toString() + '.json'}`)
                    nftArray.push(metaDataObj.data)
                } catch (error) {
                    console.log(error)
                    setLoadingData(false)
                    setLoadingError(true)
                }
            }

            setNftList(nftArray)
            console.log(nftList)

            setLoadingData(false)
        }
        fetchData()
    }, [contract])

    return (
        <div className='container-fluid mynft-wrapper'>
            <div className='container'>
                <div className='row d-flex'>
                    <p className='mynft-text1 mr-2'>Home</p>
                    <span className='mynft-text1'> &gt; </span>
                    <p className='mynft-text2 ml-2'>NFT Gallery</p>
                </div>

                <div className='row mt-3'>
                    <p className='heading3'>Minted NFTs</p>
                </div>

                {!metamaskConnected ? <div className='row d-flex justify-content-center mt-5'>
                    <p className='mynft-text3'>Please connect your Metamask to Ethereum Mainnet to view the Minted NFTs</p>
                </div> :
                    <div className='row d-flex mt-3'>
                        {loadingData ? <div className='col-12 d-flex justify-content-center'>
                            <div className="spinner-border text-success" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div> : loadingError ? <div className='col-12 d-flex justify-content-center mt-5'>
                            <p className='mynft-text3 text-center text-danger'>Oops!! An error occured while fetching NFT Metadata. <br /> Kindly comeback after sometime</p>
                        </div> : nftList.length === 0 ? <div className='col-12 d-flex justify-content-center mt-5'>
                            <p className='mynft-text3 text-center text-success'>Seems like Stubborn Apes minting is not opened yet</p>
                        </div> :
                            nftList.map((nft, i) => (
                                <div className='col-3'>
                                    <div className="card">
                                        {/* <Link to={'/nftdetail'}> */}
                                        <img className="card-img-top mt-3" src={nft.image} alt="ape" />
                                        {/* </Link> */}
                                        <div className="card-body">
                                            <div className='row d-flex justify-content-center'>
                                                <p className="card-title">{nft.name}</p>
                                                {/* <p className="nft-price">0.08 <EtherIcon className='ether-icon' /></p> */}
                                            </div>

                                            <div className='row d-flex justify-content-center mt-2'>
                                                <a href={`https://opensea.io/assets/${contract._address}/${i + 1}`} rel="noreferrer" target={'_blank'}>
                                                    <button className='button3'>
                                                        <OpenseaIcon className='mr-2 mb-1' />
                                                        View on Opensea
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>}


                {/* <div className='row d-flex justify-content-center mt-5'>
                    <ul className="pagination justify-content-center bg-dark">
                        <li className="page-item">
                            <a className="page-link" href="#" tabindex="-1">Prev</a>
                        </li>
                        <li className="page-item"><a class="page-link" href="#">1</a></li>
                        <li className="page-item"><a class="page-link" href="#">2</a></li>
                        <li className="page-item"><a class="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </div> */}


            </div>
        </div>
    )
}

export default NFTGallery
