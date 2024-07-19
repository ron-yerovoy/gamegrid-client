// pages/login.js
'use client'
import { useState } from 'react'
import BaseButton from '../components/baseButton'
import Link from 'next/link'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // Replace this with your actual login logic
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>This is the register page</p>
      <Link href="/">
        <BaseButton className="">Home</BaseButton>
      </Link>
    </main>
  )
}
