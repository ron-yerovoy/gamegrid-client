'use server'
import Head from "next/head"
import Posts from "../components/posts"
import { cookies } from "next/headers"

export default async function HomePage() {
    return (
        <div className="min-h-screen flex-auto w-full  ">
          <Head>
            <title>Lobby</title>
          </Head>
          <Posts userId={getSessionData()}/>
        </div>
      )
}

export async function getSessionData(req) {
  const encryptedSessionData = cookies().get('session')?.value
  return encryptedSessionData ? encryptedSessionData : null
}