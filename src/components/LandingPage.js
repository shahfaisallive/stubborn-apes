import React from 'react'

import Header from './Header';
import Aboutus from './Aboutus';
import Specs from './Specs';
import Roadmap from './Roadmap.js'
import FAQs from './FAQs.js'
import Footer from './Footer';

const LandingPage = () => {
    return (
        <>
            <Header />
            <Aboutus />
            <Specs />
            <Roadmap />
            <FAQs />
            <Footer />
        </>
    )
}

export default LandingPage
