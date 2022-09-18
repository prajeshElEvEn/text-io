import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const nav = useNavigate()
    return (
        <div className='home-container'>
            <div className='home'>
                <div className='input-box'>
                    <input type='text' placeholder='@username' />
                    <div className='input-btn'
                        onClick={() => nav('/text')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<polyline points="13 17 18 12 13 7"></polyline><line x1="6" y1="12" x2="18" y2="12"></line></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
