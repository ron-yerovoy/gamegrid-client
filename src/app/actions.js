'use server'
 
import { cookies } from 'next/headers'
 
export async function loginbtn(sessionData) {
  const encryptedSessionData = sessionData // Encrypt your session data
  cookies().set('session', encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/HomePage',
  })
}

