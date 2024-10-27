"use client"
import React, { useState } from 'react'
import { FormSubmission } from './server/actions'


const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    // const bebasNeue=Bebas_Neue({
    //     display:'swap',
    //     weight:['400']
    // })
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-xs">
                <h1 className='text-center block mb-4'>Login</h1>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className='text-center'>
                        <button 
                            onClick={() => {
                                const formData = new FormData();
                                formData.append('email', email);
                                formData.append('password', password);
                                FormSubmission(formData);
                            }} 
                            className='rounded-md text-white bg-orange-500 px-4 py-2 uppercase'
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login