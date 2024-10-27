"use client"

import React from 'react'
import { useState } from 'react'
import { FormRegistration } from '../components/server/actions'
const page = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [fullName, setFullName] = useState<string>('')
  return (
    <div>
        <h1>Create Account</h1>
        <div>
            <label htmlFor="email">Email</label>
            <input 
                type="text" 
                id="email" 
                name="email" onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                id="password" 
                name="password" onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="fullName">Full Name</label>
            <input 
                type="text" 
                id="fullName" 
                name="fullName" onChange={(e) => setFullName(e.target.value)}
            />
            <div className='text-center'>
                <button onClick={() => {
                    const formData = new FormData();
                    formData.append("email", email);
                    formData.append("password", password);
                    formData.append("fullName", fullName);
                    fetch('/api/register', {
                        method: 'POST',
                        body: formData
                    }).then(response => {
                        if (response.ok) {
                            alert('Registration successful');
                        } else {
                            alert('Registration failed');
                        }
                    }).catch(error => {
                        console.error('Error:', error);
                        alert('Registration failed');
                    });
                }}>Register</button>
            </div>
        </div>
    </div>
  )
}

export default page