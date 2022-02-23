import React from 'react'

import Header from './Header';
import Aboutus from './Aboutus';
import Specs from './Specs';
import Roadmap from './Roadmap.js'
import FAQs from './FAQs.js'

const LandingPage = ({ days, hours, minutes, seconds, presaleCost, publicCost }) => {
    return (
        <>
            <Header seconds={seconds} minutes={minutes} hours={hours} days={days} />
            <Aboutus presaleCost={presaleCost} publicCost={publicCost} />
            <Specs />
            <Roadmap />
            <FAQs />
        </>
    )
}

export default LandingPage
