import React from 'react'
import { ReactComponent as MailIcon } from '../media/mail.svg'
import { ReactComponent as CallIcon } from '../media/call.svg'
import { ReactComponent as OpenseaIcon } from '../media/opensea.svg'
import { ReactComponent as DiscordIcon } from '../media/discord.svg'
import { ReactComponent as TwitterIcon } from '../media/twitter.svg'
import { ReactComponent as InstaIcon } from '../media/insta.svg'

const Footer = () => {
    return (
        <div className='footer-wrapper container-fluid'>
            <div className='row justify-content-center pb-3'>
                <div className='col-md-6'>
                    <div className='row d-flex justify-content-center'>
                        <img className='footer-logo' src={'/images/logo.png'} alt="ft-logo" />
                    </div>
                    <p className='ft-text1 text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>

                    <div className='row d-flex justify-content-center mt-4'>
                        <div className='col-2'>
                            <p className='ft-text2'>Home</p>
                        </div>
                        <div className='col-2'>
                            <p className='ft-text2'>My NFTs</p>
                        </div><div className='col-2'>
                            <p className='ft-text2'>Roadmap</p>
                        </div>
                        <div className='col-2'>
                            <p className='ft-text2'>Our Team</p>
                        </div>
                        <div className='col-2'>
                            <p className='ft-text2'>FAQs</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr style={{ borderStyle: 'solid', borderWidth: '1px' }}></hr>
            <div className='container-fluid row d-flex justify-content-center pr-5 pl-5'>
                <div className='col-4 d-flex'>
                    <p className='basic-text2'><MailIcon className="ft-icon" />  mintown@gmail.com</p>
                    <p className='basic-text2 ml-3'><CallIcon className="ft-icon" />  021 3657 3258 15</p>
                </div>
                <div className='col-4'>
                    <p className='ft-text1 text-center'>Copyright © 2022 Mintown. All Rights Reserved.</p>
                </div>
                <div className='col-4 d-flex justify-content-end'>
                    <p className="basic-text1 mr-3">Follow us on: </p>
                    <div>
                        <TwitterIcon className="ft-icon ml-2" />
                        <InstaIcon className="ft-icon ml-2" />
                        <DiscordIcon className="ft-icon ml-2" />
                        <OpenseaIcon className="ft-icon ml-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
