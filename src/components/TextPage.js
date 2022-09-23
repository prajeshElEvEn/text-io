import { onValue, push, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from '../config/config'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const TextPage = () => {

    const [message, setMessage] = useState('')
    const [currentUser, setCurrentUser] = useState('')
    const [chat, setChat] = useState([])

    const sendMessage = async () => {
        if (message) {
            const messageRef = ref(db, 'Messages')
            const msg = {
                message: message,
                user: currentUser,
                time: new Date().toLocaleTimeString()
            }
            await push(messageRef, msg)
            setMessage('')
        } else {
            toast.warn('Please type a message!', {
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

    useEffect(() => {
        setCurrentUser(localStorage.getItem('userName'))
        const getMessages = async () => {
            const messageRef = ref(db, 'Messages')
            await onValue(messageRef, (snapshot) => {
                const data = snapshot.val()
                let chat = []
                for (let id in data) {
                    chat.push({ id, ...data[id] })
                }
                setChat(chat)
            })
        }
        getMessages()
    }, [])


    return (
        <div className='text-container'>
            <div className='text'>
                <div className='text-box'>
                    <div className='text-chat'>
                        {
                            chat.map((msg) => {
                                return (
                                    msg.user === currentUser ?
                                        <div className='chat-box-container-right'>
                                            <div className='chat-box'>
                                                <div className='user'>
                                                    <span>from</span>
                                                    &nbsp;@
                                                    {
                                                        msg.user
                                                    }
                                                </div>
                                                <div className='chat'>
                                                    <div className='chat-message'>
                                                        <span>&#10093;</span>
                                                        &nbsp;
                                                        <span>
                                                            {
                                                                msg.message
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className='chat-time'>
                                                        <span>Sent @</span>
                                                        &nbsp;
                                                        {
                                                            msg.time
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className='chat-box-container'>
                                            <div className='chat-box'>
                                                <div className='user'>
                                                    <span>from</span>
                                                    &nbsp;@
                                                    {
                                                        msg.user
                                                    }
                                                </div>
                                                <div className='chat'>
                                                    <div className='chat-message'>
                                                        <span>&#10093;</span>
                                                        &nbsp;
                                                        <span>
                                                            {
                                                                msg.message
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className='chat-time'>
                                                        <span>Sent @</span>
                                                        &nbsp;
                                                        {
                                                            msg.time
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                )
                            })
                        }
                    </div>
                    <div className='text-input'>
                        <input
                            type='text'
                            placeholder='Type a message...'
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    sendMessage()
                                }
                            }}
                        />
                        <div
                            className='text-btn'
                            onClick={() => {
                                sendMessage()
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<polyline points="13 17 18 12 13 7"></polyline><line x1="6" y1="12" x2="18" y2="12"></line></svg>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default TextPage
