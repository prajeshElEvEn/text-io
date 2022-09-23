import { push, ref } from 'firebase/database'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../config/config'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const HomePage = () => {

    const [username, setUsername] = useState('')
    const nav = useNavigate()

    const saveUser = async () => {
        if (username) {
            if (username.length > 2 && username.length < 13) {
                localStorage.clear()
                localStorage.setItem('userName', username)
                const userRef = ref(db, 'Users')
                const user = {
                    username: username
                }
                await push(userRef, user)
                nav('/text')
                setUsername('')
            } else {
                toast.warn('Username must be 3-12 characters!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        } else {
            toast.warn('Please enter a username!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    return (
        <div className='home-container'>
            <div className='home'>
                <div className='input-box'>
                    <input
                        type='text'
                        placeholder='@username'
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                saveUser()
                            }
                        }}
                    />
                    <div className='input-btn'
                        onClick={() => {
                            saveUser()
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<polyline points="13 17 18 12 13 7"></polyline><line x1="6" y1="12" x2="18" y2="12"></line></svg>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default HomePage
