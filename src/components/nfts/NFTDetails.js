import React from 'react'
import { ReactComponent as ShareIcon } from '../../media/share.svg'
import { ReactComponent as HeartIcon } from '../../media/heart.svg'
import { ReactComponent as EtherIcon } from '../../media/ether.svg'
import { ReactComponent as OpenseaIcon } from '../../media/opensea.svg'
import { Link } from 'react-router-dom'


const NFTDetails = ({ days, hours, minutes, seconds }) => {
    return (
        <div className='container-fluid mynft-wrapper'>
            <div className='container pb-5'>
                <div className='row d-flex'>
                    <p className='mynft-text1 mr-2'>Home</p>
                    <span className='mynft-text1'> &gt; </span>
                    <p className='mynft-text1 ml-2'>My NFTs</p>
                    <span className='mynft-text1'> &gt; </span>
                    <p className='mynft-text2 ml-2'>Preatent</p>
                </div>

                <div className='row mt-3 d-flex'>
                    <div className='col-md-4'>
                        <img src={'/images/Variant_2.png'} className="nft-detail-img" alt='ape' />
                        <div className='row mt-4'>
                            <div className='details-timer-div'>
                                <div className='text-center'>
                                    <div className='timer-div2'>
                                        <span className='mr-2'>{days}</span>  :  <span className='mr-2 ml-2'>{hours}</span>  :  <span className='mr-2 ml-2'>{minutes}</span>  :  <span className='ml-2'>{seconds}</span>
                                    </div>
                                    <div className='timer-div-text2'>
                                        {/* <p>Days         :           Hours           :           Minutes         :           Seconds</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-7 nftdetails-right'>
                        <div className='row d-flex'>
                            <div className='col-8 pl-0'>
                                <p className='nft-name-text'>Stubborn Ape #777</p>
                            </div>
                            <div className='col-4 d-flex justify-content-end'>
                                <ShareIcon className='detail-page-icon mr-3' />
                                <HeartIcon className='detail-page-icon' />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col pl-0'>
                                <p className='mynft-text1 mt-1'>Owned By</p>
                                <div className='row d-flex ml-1'>
                                    <img src={'/images/man.png'} alt='owner' className='ownerImg' />
                                    <p className='owner-text'>Brandon Wagner</p>
                                </div>

                                <p className='basic-text3 mt-3'>Price</p>
                                <div className='row d-flex nft-price-div'>
                                    <div className='col d-flex'>
                                        <span><p className='detail-price-text'><EtherIcon className='ether-icon mr-2' />0.059</p></span>
                                        <p className='detail-price-text2'>($39.99 USD)</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='row d-flex details-btn-container'>
                            <button className='button4 ml-2' id='detailbtn1'>
                                Place a Bid
                            </button>
                            <button className='button2 ml-3' id='detailbtn2'>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* RELATED PRODUCTS */}
            <div className='container mt-5'>
                <div className='row d-flex justify-content-center'>
                    <p className='heading1'>Related Products</p>
                </div>

                <div className='row d-flex mt-3'>
                    <div className='col'>
                        <div className="card">
                            <Link to={'/nftdetail'}>
                                <img className="card-img-top" src={'/images/red-ape.png'} alt="ape" />
                            </Link>
                            <div className="card-body">
                                <div className='row d-flex'>
                                    <p className="card-title">Stubborn Ape</p>
                                    <p className="nft-price">0.08 <EtherIcon className='ether-icon' /></p>
                                </div>

                                <div className='row d-flex justify-content-center mt-4'>
                                    <button className='button3'>
                                        <OpenseaIcon className='mr-2 mb-1' />
                                        View on Opensea
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card">
                            <Link to={'/nftdetail'}>
                                <img className="card-img-top" src={'/images/red-ape.png'} alt="ape" />
                            </Link>
                            <div className="card-body">
                                <div className='row d-flex'>
                                    <p className="card-title">Stubborn Ape</p>
                                    <p className="nft-price">0.08 <EtherIcon className='ether-icon' /></p>
                                </div>

                                <div className='row d-flex justify-content-center mt-4'>
                                    <button className='button3'>
                                        <OpenseaIcon className='mr-2 mb-1' />
                                        View on Opensea
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card">
                            <Link to={'/nftdetail'}>
                                <img className="card-img-top" src={'/images/red-ape.png'} alt="ape" />
                            </Link>
                            <div className="card-body">
                                <div className='row d-flex'>
                                    <p className="card-title">Stubborn Ape</p>
                                    <p className="nft-price">0.08 <EtherIcon className='ether-icon' /></p>
                                </div>

                                <div className='row d-flex justify-content-center mt-4'>
                                    <button className='button3'>
                                        <OpenseaIcon className='mr-2 mb-1' />
                                        View on Opensea
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card">
                            <Link to={'/nftdetail'}>
                                <img className="card-img-top" src={'/images/red-ape.png'} alt="ape" />
                            </Link>
                            <div className="card-body">
                                <div className='row d-flex'>
                                    <p className="card-title">Stubborn Ape</p>
                                    <p className="nft-price">0.08 <EtherIcon className='ether-icon' /></p>
                                </div>

                                <div className='row d-flex justify-content-center mt-4'>
                                    <button className='button3'>
                                        <OpenseaIcon className='mr-2 mb-1' />
                                        View on Opensea
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card">
                            <Link to={'/nftdetail'}>
                                <img className="card-img-top" src={'/images/red-ape.png'} alt="ape" />
                            </Link>
                            <div className="card-body">
                                <div className='row d-flex'>
                                    <p className="card-title">Stubborn Ape</p>
                                    <p className="nft-price">0.08 <EtherIcon className='ether-icon' /></p>
                                </div>

                                <div className='row d-flex justify-content-center mt-4'>
                                    <button className='button3'>
                                        <OpenseaIcon className='mr-2 mb-1' />
                                        View on Opensea
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row d-flex mt-3'>
                    <div className='col'>
                        <div className="card">
                            <Link to={'/nftdetail'}>
                                <img className="card-img-top" src={'/images/red-ape.png'} alt="ape" />
                            </Link>
                            <div className="card-body">
                                <div className='row d-flex'>
                                    <p className="card-title">Stubborn Ape</p>
                                    <p className="nft-price">0.08 <EtherIcon className='ether-icon' /></p>
                                </div>

                                <div className='row d-flex justify-content-center mt-4'>
                                    <button className='button3'>
                                        <OpenseaIcon className='mr-2 mb-1' />
                                        View on Opensea
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card">
                            <Link to={'/nftdetail'}>
                                <img className="card-img-top" src={'/images/red-ape.png'} alt="ape" />
                            </Link>
                            <div className="card-body">
                                <div className='row d-flex'>
                                    <p className="card-title">Stubborn Ape</p>
                                    <p className="nft-price">0.08 <EtherIcon className='ether-icon' /></p>
                                </div>

                                <div className='row d-flex justify-content-center mt-4'>
                                    <button className='button3'>
                                        <OpenseaIcon className='mr-2 mb-1' />
                                        View on Opensea
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card">
                            <Link to={'/nftdetail'}>
                                <img className="card-img-top" src={'/images/red-ape.png'} alt="ape" />
                            </Link>
                            <div className="card-body">
                                <div className='row d-flex'>
                                    <p className="card-title">Stubborn Ape</p>
                                    <p className="nft-price">0.08 <EtherIcon className='ether-icon' /></p>
                                </div>

                                <div className='row d-flex justify-content-center mt-4'>
                                    <button className='button3'>
                                        <OpenseaIcon className='mr-2 mb-1' />
                                        View on Opensea
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card">
                            <Link to={'/nftdetail'}>
                                <img className="card-img-top" src={'/images/red-ape.png'} alt="ape" />
                            </Link>
                            <div className="card-body">
                                <div className='row d-flex'>
                                    <p className="card-title">Stubborn Ape</p>
                                    <p className="nft-price">0.08 <EtherIcon className='ether-icon' /></p>
                                </div>

                                <div className='row d-flex justify-content-center mt-4'>
                                    <button className='button3'>
                                        <OpenseaIcon className='mr-2 mb-1' />
                                        View on Opensea
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card">
                            <Link to={'/nftdetail'}>
                                <img className="card-img-top" src={'/images/red-ape.png'} alt="ape" />
                            </Link>
                            <div className="card-body">
                                <div className='row d-flex'>
                                    <p className="card-title">Stubborn Ape</p>
                                    <p className="nft-price">0.08 <EtherIcon className='ether-icon' /></p>
                                </div>

                                <div className='row d-flex justify-content-center mt-4'>
                                    <button className='button3'>
                                        <OpenseaIcon className='mr-2 mb-1' />
                                        View on Opensea
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='row d-flex justify-content-center'>
                    <button className='button2 mt-5'>
                        View All
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NFTDetails
