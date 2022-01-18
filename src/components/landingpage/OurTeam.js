import React from 'react'

const OurTeam = () => {
    return (
        <div className='container-fluid team-wrapper'>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <p className='heading1'>Meet Our Team</p>
                </div>

                <div className='row d-flex justify-content-center mt-5'>
                    <div className='col'>
                        <div className="card">
                            <img className="card-img-top" src={'/images/man.png'} alt="team member" />
                            <div className="card-body">
                                <div className='row d-flex justify-content-center'>
                                    <p className="card-title team-text1 text-center">Carter</p>
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <p className="team-text2 text-center">Director</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card">
                            <img className="card-img-top" src={'/images/man.png'} alt="ape" />
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
                        <div className="card">
                            <img className="card-img-top" src={'/images/man.png'} alt="ape" />
                            <div className="card-body">
                                <div className='row d-flex justify-content-center'>
                                    <p className="card-title team-text1 text-center">Carter</p>
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <p className="team-text2 text-center">Design</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card">
                            <img className="card-img-top" src={'/images/man.png'} alt="ape" />
                            <div className="card-body">
                                <div className='row d-flex justify-content-center'>
                                    <p className="card-title team-text1 text-center">Carter</p>
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
