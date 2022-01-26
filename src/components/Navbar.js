import React, { useEffect, useState } from 'react'
import { ReactComponent as OpenseaIcon } from '../media/opensea.svg'
import { ReactComponent as DiscordIcon } from '../media/discord.svg'
import { ReactComponent as TwitterIcon } from '../media/twitter.svg'
import { ReactComponent as InstaIcon } from '../media/insta.svg'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const [navScroll, setNavScroll] = useState('navbar-wrap')
    const [scrollLogo, setScrollLogo] = useState('navbar-logo')

    useEffect(() => {
        window.addEventListener("scroll", function () {

            if (window.pageYOffset > 0) {
                setNavScroll('scrollNavBar')
                setScrollLogo('scrollNavLogo')
            } else {
                setNavScroll('navbar-wrap')
                setScrollLogo('navbar-logo')
            }
        });
    }, [])


    const navHomeHandler = () => {
        const element = document.getElementById("home");
        element.scrollIntoView({ behavior: "smooth", block: "start" })

    }
    const navAboutHandler = () => {
        const element = document.getElementById("about");
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
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${navScroll}`}>
            <div className='container-fluid ml-5 mr-5'>
                <a href='/' className="navbar-brand" id="brand-title" to="/"><img alt="logo" src={"/images/logo.png"} className='logo-img' id={scrollLogo}></img></a>
                <button className="navbar-toggler toggle-btn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav mt-3">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="activeLink" to="/"><p className='text_one' onClick={navHomeHandler}>Home</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="activeLink" to="/"><p className='text_one' onClick={navAboutHandler}>About</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="activeLink" to="/"><p className='text_one' onClick={navRoadmapHandler}>Roadmap</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="activeLink" to="/mynfts"><p className='text_one'>My NFTs</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="activeLink" to="/team"><p className='text_one'>Our Team</p></NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" activeClassName="activeLink" to="/"><p className='text_one ' onClick={navFaqHandler}>FAQs</p></NavLink>
                        </li>
                    </ul>

                    <ul className='navbar-nav'>
                        <li className="nav-item nav-social-container">
                            <a href='https://twitter.com/StubbornApeNFT' target={'_blank'} rel="noreferrer">
                                <TwitterIcon className='nav-social-icon' />
                            </a>
                            <a href='https://www.instagram.com/thestubbornapesociety/' target={'_blank'} rel="noreferrer">
                                <InstaIcon className='nav-social-icon ml-3' />
                            </a>
                            <a href='http://discord.gg/stubbornapesociety' target={'_blank'} rel="noreferrer">
                                <DiscordIcon className='nav-social-icon ml-3' />
                            </a>
                            <a href='http://opensea.io' target={'_blank'} rel="noreferrer">
                                <OpenseaIcon className='nav-social-icon ml-3' />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
