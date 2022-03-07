import React from 'react'
import { ReactComponent as MailIcon } from '../media/mail.svg'
import { ReactComponent as OpenseaIcon } from '../media/opensea.svg'
import { ReactComponent as DiscordIcon } from '../media/discord.svg'
import { ReactComponent as TwitterIcon } from '../media/twitter.svg'
import { ReactComponent as InstaIcon } from '../media/insta.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const navHomeHandler = () => {
        const element = document.getElementById("home");
        element.scrollIntoView({ behavior: "smooth", block: "start" })

    }

    const navRoadmapHandler = () => {
        const element = document.getElementById("roadmap");
        element.scrollIntoView({ behavior: "smooth", block: "start" })

    }

    const navFaqHandler = () => {
        const element = document.getElementById("faqs");
        element.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className='footer-wrapper container-fluid'>
            <div className='row justify-content-center pb-3'>
                <div className='col-md-6'>
                    <div className='row d-flex justify-content-center'>
                        <img className='footer-logo' src={'/images/logo.png'} alt="ft-logo" />
                    </div>
                    <p className='ft-text1 text-center mt-4'>The Stubborn Ape Society is a collection of 7,000 Unique Stubborn Ape NFT’s</p>

                    <div className='row d-flex justify-content-center mt-4'>
                        <div className='col-xm-2'>
                            <NavLink to={'/'}>
                                <p className='ft-text2' onClick={navHomeHandler}>Home</p>
                            </NavLink>
                        </div>
                        <div className='col-xm-2'>
                            <NavLink to={'/mynfts'}>
                                <p className='ft-text2'>My NFTs</p>
                            </NavLink>
                        </div><div className='col-xm-2'>
                            <NavLink to={'/'}>
                                <p className='ft-text2' onClick={navRoadmapHandler}>Roadmap</p>
                            </NavLink>
                        </div>
                        <div className='col-xm-2'>
                            <NavLink to={'/team'}>
                                <p className='ft-text2'>Our Team</p>
                            </NavLink>
                        </div>
                        <div className='col-xm-2'>
                            <NavLink to={'/'}>
                                <p className='ft-text2' onClick={navFaqHandler}>FAQs</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <a href='https://upcomingnft.art/the-stubborn-ape-society/' target={'_blank'} rel="noreferrer">
                            <img className='footer-logo2 mt-3' src={'/images/upcoming-nft.png'} alt="ft-logo" />
                        </a>
                    </div>
                </div>
            </div>

            <hr style={{ borderStyle: 'solid', borderWidth: '1px' }}></hr>
            <div className='container-fluid row d-flex justify-content-center pr-5 pl-5' id='ftWebView'>
                <div className='col-4 d-flex'>
                    <p className='basic-text2'><MailIcon className="ft-icon mr-2" />Stubbornapesociety@gmail.com</p>
                </div>
                <div className='col-4'>
                    <p className='ft-text1 text-center'>Copyright © 2022 Mintown. All Rights Reserved.</p>
                </div>
                <div className='col-4 d-flex justify-content-end'>
                    <p className="basic-text1 mr-3">Follow us on: </p>
                    <div>
                        <a href='https://twitter.com/StubbornApeNFT' target={'_blank'} rel="noreferrer">
                            <TwitterIcon className="ft-icon ml-2" />
                        </a>
                        <a href='https://www.instagram.com/thestubbornapesociety/' target={'_blank'} rel="noreferrer">
                            <InstaIcon className="ft-icon ml-2" />
                        </a>
                        <a href='http://discord.gg/stubbornapesociety' target={'_blank'} rel="noreferrer">
                            <DiscordIcon className="ft-icon ml-2" />
                        </a>
                        <a href='http://opensea.io' target={'_blank'} rel="noreferrer">
                            <OpenseaIcon className="ft-icon ml-2" />
                        </a>
                    </div>
                </div>
            </div>


            <div className='container-fluid row justify-content-center pr-5 pl-5' id='ftMobView'>
                <div className='row justify-content-center'>
                    <p className='basic-text2'><MailIcon className="ft-icon mr-2" />Stubbornapesociety@gmail.com</p>
                </div>

                <div className='row d-flex justify-content-end'>
                    <p className="basic-text1 mr-3">Follow us on: </p>
                    <div>
                        <a href='https://twitter.com/StubbornApeNFT' target={'_blank'} rel="noreferrer">
                            <TwitterIcon className="ft-icon ml-2" />
                        </a>
                        <a href='https://www.instagram.com/thestubbornapesociety/' target={'_blank'} rel="noreferrer">
                            <InstaIcon className="ft-icon ml-2" />
                        </a>
                        <a href='http://discord.gg/stubbornapesociety' target={'_blank'} rel="noreferrer">
                            <DiscordIcon className="ft-icon ml-2" />
                        </a>
                        <a href='http://opensea.io' target={'_blank'} rel="noreferrer">
                            <OpenseaIcon className="ft-icon ml-2" />
                        </a>
                    </div>
                </div>
                <div className='row justify-content-center mt-3'>
                    <p className='ft-text1 copyright-text text-center'>Copyright © 2022 Mintown. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
