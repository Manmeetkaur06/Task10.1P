import React, { useState } from 'react';
import './NewsLetter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:5001/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
    
            const message = await response.text();
            setResponseMessage(message);
            setEmail(''); 
        } catch (error) {
            setResponseMessage('An error occurred while subscribing.');
        }
    };
    
    return (
        <div className="newsletter">
            <form onSubmit={handleSubmit} id="signup-form">
                <label htmlFor="email" className="newsletter-text">Subscribe to our Newsletter</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {responseMessage && <div className="responseMessage">{responseMessage}</div>}
        </div>
    );
};

export default Newsletter;
