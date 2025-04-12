import React from 'react'
import './components.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();
    const enterGarden = () => {
        navigate('/gallery');
    }

    return (
        <>
            <div className='landing_container'>
                <h1>
                    <strong>Welcome to Plants & Pots🌼</strong>
                </h1>
                <button className='cta_btn' onClick={() => enterGarden()}>Enter the Nursery</button>
            </div>
        </>
    )
}

export default LandingPage