import React from 'react'

const TextPage = () => {
    return (
        <div className='text-container'>
            <div className='text'>
                <div className='text-box'>
                    <div className='text-chat'>
                        <div className='chat-box-container'>
                            <div className='chat-box'>
                                <div className='user'>
                                    <span>from</span>
                                    &nbsp;
                                    @username
                                </div>
                                <div className='chat'>
                                    <div className='chat-message'>
                                        <span>&#10093;</span>
                                        &nbsp;
                                        <span>Message is too long so it will be truncated. And more onto the next line. but this is the last line. so it should be truncated.</span>
                                    </div>
                                    <div className='chat-time'>
                                        <span>Sent @</span>
                                        &nbsp;
                                        12:00pm
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='chat-box-container-left'>
                            <div className='chat-box'>
                                <div className='user'>
                                    <span>from</span>
                                    &nbsp;
                                    @username
                                </div>
                                <div className='chat'>
                                    <div className='chat-message'>
                                        <span>&#10093;</span>
                                        &nbsp;
                                        <span>Message is too long so it will be truncated. And more onto the next line. but this is the last line. so it should be truncated.</span>
                                    </div>
                                    <div className='chat-time'>
                                        <span>Sent @</span>
                                        &nbsp;
                                        12:00pm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-input'>
                        <input type='text' placeholder='Type a message...' />
                        <div className='text-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<polyline points="13 17 18 12 13 7"></polyline><line x1="6" y1="12" x2="18" y2="12"></line></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextPage
