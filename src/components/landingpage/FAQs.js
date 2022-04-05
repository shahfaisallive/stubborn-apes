import React, { useEffect } from 'react'
import { Accordion } from 'react-bootstrap'
import ScrollReveal from 'scrollreveal'

const FAQs = () => {
    const options = {
        delay: 1,
        duration: 2000,
        rotate: {
            x: 100,
            y: 0,
            z: 0,
        },
    }
    useEffect(() => {
        ScrollReveal().reveal('.faqs-wrapper', options)
    }, [])

    return (
        <div className='faqs-wrapper container-fluid' id='faqs'>
            <div className='container justify-content-center'>
                <p className='heading1 text-center mb-5'>Frequently Asked Questions</p>

                <div className='row'>
                    <div className='col-md-6'>
                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex' className='accordian-btn'>How much is a Stubborn Ape?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    There will be two presales ahead of the public launch on 4/16 at 12pm EST. Please join our Discord to learn how you can join the whitelist and take advantage of the presale launch. Price at Public Launch will start at 0.08 ETH+gas.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>Where can I view my Stubborn Ape NFTS?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Once you mint your Stubborn Ape Society NFT, you will be able to see it by connecting your crypto wallet to OpenSea.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>When can we mint the Stubborn Ape Society Collection?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    The Public Launch will be held on April 16, 2022 at 12pm EST, While presale will take place on April 14 at 5pm EST.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What Can I do with my Stubborn Ape?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Once you own two Stubborn Apes, You will be able to breed them and create a 2nd Gen Rare Stubborn Ape. You can also use your Stubborn ape as a profile picture online and even sell your Stubborn ape for Profits.
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
                                    4% of the Secondary sales will be deducted in royalties for the Stubborn Ape Society Team. An additional 4% will also be used solely to grow the Stubborn Ape Society Community through marketing. This will allow us to stay competitive maintaining the floor for our holders.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What is the Total Supply?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    7000 unique NFT’s make up the Stubborn Ape Society.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>What Blockchain will this be launched on?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Ethereum 721 contract- A huge update allowing for massive savings in gas fees.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="0" className='faq-single-div'>
                                <Accordion.Button bsPrefix='faq-text1 d-flex'>When will we be able to see rarity and where?
                                    <img src={'/images/dropicon.png'} alt='drop icon' className='drop-icon' />
                                </Accordion.Button>
                                <Accordion.Body bsPrefix='faq-text2'>
                                    Post Launch and after the reveal, rarity characteristics will be available on opensea.
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
