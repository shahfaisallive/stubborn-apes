import React from 'react'

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
            <div className='container-fluid row d-flex justify-content-center'>
                <div className='col-3'>
                    <p>asdasd sd asda dasds</p>
                </div>
                <div className='col-6'>
                    <p className='ft-text4 text-center'>Copyright © 2022 Mintown. All Rights Reserved.</p>
                </div>
                <div className='col-3 d-flex justify-content-end'>
                    <p>asdasd sd asda dasds</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
