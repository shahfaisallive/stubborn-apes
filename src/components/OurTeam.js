import React, { useEffect } from 'react'

const OurTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='container-fluid team-wrapper'>
            <div className='container'>
                <div className='row d-flex'>
                    <p className='mynft-text1 mr-2'>Home</p>
                    <span className='mynft-text1'> &gt; </span>
                    <p className='mynft-text2 ml-2'>Our Team</p>
                </div>

                <div className='row d-flex justify-content-center mt-5'>
                    <p className='heading1'>Meet Our Team</p>
                </div>

                <div className='row d-flex justify-content-center mt-5'>
                    <div className='col'>
                        <div className="card team-card">
                            <div className='img-container'>
                                <img className="card-img-top team-img" src={'/images/Variant_1.png'} alt="team member" />
                                <div className='team-social-div'>
                                    <a href='https://www.linkedin.com/in/scancoandrew' target={'_blank'} rel="noreferrer" >
                                        <img src="https://img.icons8.com/plasticine/100/000000/linkedin.png" alt='linkedin icon' className='team-social-icon' />
                                    </a>
                                    <a href="http://discord.gg/stubbornapesociety" target={'_blank'} rel="noreferrer">
                                        <img src="https://img.icons8.com/plasticine/100/000000/discord-logo.png" alt='discord icon' className='team-social-icon' />
                                    </a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className='row d-flex justify-content-center'>
                                    <p className="card-title team-text1 text-center">Andrew</p>
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <p className="team-text2 text-center">Director</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card team-card">
                            <img className="card-img-top team-img" src={'/images/Variant_9_blue.png'} alt="ape" />
                            <div className="card-body">
                                <div className='row d-flex justify-content-center'>
                                    <p className="card-title team-text1 text-center">Carter</p>
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <p className="team-text2 text-center">Marketing</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card team-card">
                            <div className='img-container'>
                                <img className="card-img-top team-img" src={'/images/Variant_2.png'} alt="ape" />
                                <div className='team-social-div'>
                                    <a href='https://www.linkedin.com/in/noumanr/' target={'_blank'} rel="noreferrer" >
                                        <img src="https://img.icons8.com/plasticine/100/000000/linkedin.png" alt='linkedin icon' className='team-social-icon' />
                                    </a>
                                    <a href="http://discord.gg/stubbornapesociety" target={'_blank'} rel="noreferrer">
                                        <img src="https://img.icons8.com/plasticine/100/000000/discord-logo.png" alt='discord icon' className='team-social-icon' />
                                    </a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className='row d-flex justify-content-center'>
                                    <p className="card-title team-text1 text-center">Nauman</p>
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <p className="team-text2 text-center">Design</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card team-card">
                            <div className='img-container'>
                                <img className="card-img-top team-img" src={'/images/Variant_9.png'} alt="ape" />
                                <div className='team-social-div'>
                                    <a href='https://www.linkedin.com/in/ahmad-ali-360/' target={'_blank'} rel="noreferrer" >
                                        <img src="https://img.icons8.com/plasticine/100/000000/linkedin.png" alt='linkedin icon' className='team-social-icon' />
                                    </a>
                                    <a href="https://discordapp.com/users/242028262727876608" target={'_blank'} rel="noreferrer">
                                        <img src="https://img.icons8.com/plasticine/100/000000/discord-logo.png" alt='discord icon' className='team-social-icon' />
                                    </a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className='row d-flex justify-content-center'>
                                    <p className="card-title team-text1 text-center">Ahmad</p>
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <p className="team-text2 text-center">Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam
