import React from 'react'

import { ReactComponent as CircleIcon1 } from '../../media/circle1.svg'
import { ReactComponent as CircleIcon2 } from '../../media/circle2.svg'
import { ReactComponent as CircleIcon3 } from '../../media/circle3.svg'
import { ReactComponent as CircleIcon4 } from '../../media/circle4.svg'
import { ReactComponent as CircleIcon5 } from '../../media/circle5.svg'
import { ReactComponent as CircleIcon6 } from '../../media/circle6.svg'

import { ReactComponent as Line } from '../../media/line.svg'
import { ReactComponent as Line1 } from '../../media/line1.svg'
import { ReactComponent as Line2 } from '../../media/line2.svg'
import { ReactComponent as Line3 } from '../../media/line3.svg'





const Roadmap = () => {
    return (
        <div className='container-fluid roadmap-wrapper justify-content-center d-flex' id='roadmap'>
            <div className='container'>
                <div className='row justify-content-center roadmap-title-div'>
                    <p className='heading1 mb-5'>Roadmap</p>
                </div>

                <div className='row mt-5' id='webView'>
                    <div className='col-sm-5 rm-left'>
                        <div className='roadmap-single-div' id='rm2'>
                            <p className='heading2'>Give Aways 10-20%</p>
                            <p className='basic-text2'>Get Ready for some insane giveaways! There are going to multiple chances leading up to launch day where fans can enter for a chance to win their very own Stubborn Ape NFT, giving them access out exclusive Stubborn Ape Society. Whoever is lucky enough to mint Stubborn Ape #777 will win $10,000!</p>
                        </div>

                        <div className='roadmap-single-div' id='rm4'>
                            <p className='heading2'>Exclusive Member only Merchandise 40-60%</p>
                            <p className='basic-text2'>Owners of Stubborn Apes will have the opportunity to access one of kind Stubborn Ape Merch you can rep everywhere you go!</p>
                        </div>

                        <div className='roadmap-single-div' id='rm6'>
                            <p className='heading2'>Stubborn Ape Society In the Metaverse 80-100%</p>
                            <p className='basic-text2'>We will purchase land for the Stubborn Ape Society where we can host private events in the Metaverse!</p>
                        </div>
                    </div>

                    <div className='col-sm-2 rm-mid justify-content-center'>
                        <CircleIcon1 className='circle-icon' />
                        <Line className='line-icon' />
                        <CircleIcon2 className='circle-icon' />
                        <Line className='line-icon' />
                        <CircleIcon3 className='circle-icon' />
                        <Line className='line-icon' />
                        <CircleIcon4 className='circle-icon' />
                        <Line className='line-icon' />
                        <CircleIcon5 className='circle-icon' />
                        <Line className='line-icon' />
                        <CircleIcon6 className='circle-icon' />
                    </div>

                    <div className='col-sm-5 rm-right '>
                        <div className='roadmap-single-div' id='rm1'>
                            <p className='heading2'>The Basics 0-10%</p>
                            <p className='basic-text2'>For us, we know every great project needs a proper foundation. Our priority is to create an owner driven community that allows for you to receive the most return of investment for your unique NFT. As the community grows, as will the perks that come with owning a Stubborn Ape. As we develop more functionality, we strive to ensure the best quality and value for the Stubborn Ape Society.</p>
                        </div>

                        <div className='roadmap-single-div' id='rm3'>
                            <p className='heading2'>Project Launch 20-40%</p>
                            <p className='basic-text2'>On April 16th at 12pm, 7,000 Stubborn Apes are released to the Ethereum Blockchain! Don’t miss your chance to mint a Legendary Stubborn Ape and join our exclusive society. </p>
                        </div>

                        <div className='roadmap-single-div' id='rm5'>
                            <p className='heading2'>Stubborn Ape Breeding Feature 60-80%</p>
                            <p className='basic-text2'>Holders of 2 Stubborn Apes will have the ability to breed them and create a 2nd Gen Rare Stubborn Ape</p>
                        </div>
                    </div>
                </div>



                {/* ONLY FOR MOBILE DISPLAY */}
                <div className='row mt-5' id='mobileView'>
                    <div className='col-2 rm-left'>
                        <CircleIcon1 className='circle-icon' />
                        <Line1 className='line-icon' />
                        <CircleIcon2 className='circle-icon' />
                        <Line2 className='line-icon' />
                        <CircleIcon3 className='circle-icon' />
                        <Line3 className='line-icon' />
                        <CircleIcon4 className='circle-icon' />
                        <Line3 className='line-icon' />
                        <CircleIcon5 className='circle-icon' />
                        <Line3 className='line-icon' />
                        <CircleIcon6 className='circle-icon' />
                    </div>

                    <div className='col-10 rm-right '>
                        <div className='roadmap-single-div' id='rm1'>
                            <p className='heading2'>The Basics 0-10%</p>
                            <p className='basic-text2'>For us, we know every great project needs a proper foundation. Our priority is to create an owner driven community that allows for you to receive the most return of investment for your unique NFT. As the community grows, as will the perks that come with owning a Stubborn Ape. As we develop more functionality, we strive to ensure the best quality and value for the Stubborn Ape Society.</p>
                        </div>

                        <div className='roadmap-single-div' id='rm2'>
                            <p className='heading2'>Give Aways 10-20%</p>
                            <p className='basic-text2'>Get Ready for some insane giveaways! There are going to multiple chances leading up to launch day where fans can enter for a chance to win their very own Stubborn Ape NFT, giving them access out exclusive Stubborn Ape Society. Whoever is lucky enough to mint Stubborn Ape #777 will win $10,000!</p>
                        </div>

                        <div className='roadmap-single-div' id='rm3'>
                            <p className='heading2'>Project Launch 20-40%</p>
                            <p className='basic-text2'>On April 16th at 12pm, 7,000 Stubborn Apes are released to the Ethereum Blockchain! Don’t miss your chance to mint a Legendary Stubborn Ape and join our exclusive society. </p>
                        </div>

                        <div className='roadmap-single-div' id='rm4'>
                            <p className='heading2'>Exclusive Member only Merchandise 40-60%</p>
                            <p className='basic-text2'>Owners of Stubborn Apes will have the opportunity to access one of kind Stubborn Ape Merch you can rep everywhere you go!</p>
                        </div>

                        <div className='roadmap-single-div' id='rm5'>
                            <p className='heading2'>Stubborn Ape Breeding Feature 60-80%</p>
                            <p className='basic-text2'>Holders of 2 Stubborn Apes will have the ability to breed them and create a 2nd Gen Rare Stubborn Ape</p>
                        </div>

                        <div className='roadmap-single-div' id='rm6'>
                            <p className='heading2'>Stubborn Ape Society In the Metaverse 80-100%</p>
                            <p className='basic-text2'>We will purchase land for the Stubborn Ape Society where we can host private events in the Metaverse!</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Roadmap
