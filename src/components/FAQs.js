import React from 'react'
import { Accordion } from 'react-bootstrap'

const FAQs = () => {
    return (
        <div className='faqs-wrapper container-fluid' id='faqs'>
            <div className='container justify-content-center'>
                <p className='heading1 text-center mb-5'>Frequently Asked Questions</p>

                <div className='row'>
                    <div className='col-md-6'>
                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>How much is a Stubborn Ape?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>Where can I view my Stubborn Ape NFTS?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>When can we mint the Stubborn Ape Society Collection?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What Can I do with my Stubborn Ape?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <div className='col-md-6'>
                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>Are there any Secondary Sale Royalties?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What is the Total Supply?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What Blockchain will this be launched on?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>When will we be able to see rarity and where?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FAQs
