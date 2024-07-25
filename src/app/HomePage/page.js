'use client'
import { useState } from 'react'
import Head from 'next/head'
import Posts from '../components/posts'

export default function HomePage() {
  const [posts, setPosts] = useState([
    { id: 1, content: 'This is the first post!', likes: 0, comments: [] },
    { id: 2, content: 'This is the second post!', likes: 0, comments: [] },
  ])

  const handleLike = (id) => {
    setPosts(posts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post)))
  }

  const handleComment = (id, comment) => {
    setPosts(
      posts.map((post) => (post.id === id ? { ...post, comments: [...post.comments, comment] } : post))
    )
  }

  return (
    <div className="min-h-screen flex-auto w-full">
      <Head>
        <title>Lobby</title>
      </Head>

      <Posts />
    </div>
  )
}
