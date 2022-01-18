import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-bootstrap'
import { ReactComponent as OpenseaIcon } from '../media/opensea.svg'
import { ReactComponent as DiscordIcon } from '../media/discord.svg'
import { ReactComponent as TwitterIcon } from '../media/twitter.svg'
import { ReactComponent as InstaIcon } from '../media/insta.svg'


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
        // const element = document.getElementById("home");
        // element.scrollIntoView({ behavior: "smooth", block: "start" })

    }
    const navAboutHandler = () => {
        // const element = document.getElementById("about");
        // element.scrollIntoView({ behavior: "smooth", block: "start" })

    }
    const navMyNftHandler = () => {
        // const element = document.getElementById("perks");
        // element.scrollIntoView({ behavior: "smooth", block: "start" })

    }
    const navRoadmapHandler = () => {
        // const element = document.getElementById("roadmap");
        // element.scrollIntoView({ behavior: "smooth", block: "start" })

    }
    const navTeamHandler = () => {
        // const element = document.getElementById("ourteam");
        // element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    const navFaqHandler = () => {
        // const element = document.getElementById("faqs");
        // element.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${navScroll}`}>
            <div className='container-fluid ml-5 mr-5'>
                <NavLink className="navbar-brand" id="brand-title" to="/"><img alt="logo" src={"/images/logo.png"} className='logo-img' id={scrollLogo}></img></NavLink>
                <button className="navbar-toggler toggle-btn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav mt-3">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="activeLink" to="#"><p className='text_one' onClick={navHomeHandler}>Home</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="activeLink" to="#"><p className='text_one' onClick={navAboutHandler}>About</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="activeLink" to="#"><p className='text_one' onClick={navRoadmapHandler}>Roadmap</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="activeLink" to="/mynfts"><p className='text_one' onClick={navMyNftHandler}>My NFTs</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="activeLink" to="#"><p className='text_one' onClick={navTeamHandler}>Our Team</p></NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" activeClassName="activeLink" to="#"><p className='text_one ' onClick={navFaqHandler}>FAQs</p></NavLink>
                        </li>
                    </ul>

                    <ul className='navbar-nav'>
                        <li className="nav-item nav-social-container">
                            <TwitterIcon className='nav-social-icon' />
                            <InstaIcon className='nav-social-icon ml-3' />
                            <DiscordIcon className='nav-social-icon ml-3' />
                            <OpenseaIcon className='nav-social-icon ml-3' />
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
