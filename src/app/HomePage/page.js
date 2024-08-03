'use server'
import Head from 'next/head'
import Posts from '../components/posts'
import NewPost from '../components/newPost'

export default async function HomePage() {
  return (
    <div className="min-h-screen flex-auto w-full  ">
      <Head>
        <title>Lobby</title>
      </Head>
      <div className="">
        <NewPost  />
        <Posts keyPost={'all'} />
      </div>
    </div>
  )
}
