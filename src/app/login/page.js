// pages/login.js
'use client' // זה הופך את הרכיב הזה לרכיב צד לקוח
// pages/login.js
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <main
      className="flex min-h-screen items-center justify-center p-6  "
      style={{ backgroundImage: 'url(back_rd.jpg)' }}
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-200 rounded-lg shadow-md border-2 border-black">
        <h1 className="text-5xl font-bold text-center border-2 border-gray-400 p-4">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">
              E-mail:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 border rounded-md border-black"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password:{' '}
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-1 border rounded-md border-black"
            />
          </div>
          <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded-md">
            Login boy..
          </button>
          <button type="submit" className="w-full py-2 text-white bg-green-600 rounded-md">
            Register
          </button>
        </form>
      </div>
    </main>
  )
}
