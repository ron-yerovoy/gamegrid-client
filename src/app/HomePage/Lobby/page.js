'use client'
import { useState } from 'react'
import Head from 'next/head'

export default function Lobby() {
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
    <div className="min-h-screen flex bg-gradient-to-r from-blue-900 via-purple-600 to-pink-500">
      <Head>
        <title>Lobby</title>
      </Head>

      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white p-6 shadow-2xl">
        <h2 className="text-4xl font-extrabold mb-8">User Menu</h2>
        <ul className="space-y-6">
          <li className="hover:text-pink-300 transform transition duration-200">
            <a href="#">Lobby</a>
          </li>
          <li className="hover:text-pink-300 transform transition duration-200">
            <a href="#">My Profile</a>
          </li>
          <li className="hover:text-pink-300 transform transition duration-200">
            <a href="#">My Rank</a>
          </li>
          <li className="hover:text-pink-300 transform transition duration-200">
            <a href="#">Settings</a>
          </li>
          <li className="hover:text-pink-300 transform transition duration-200">
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-10">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-10">Posts</h1>
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-8 rounded-2xl shadow-xl mb-10 transform transition duration-500 hover:scale-105"
          >
            <p className="text-xl mb-4">{post.content}</p>
            <div className="flex items-center mt-4">
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-110"
                onClick={() => handleLike(post.id)}
              >
                Like ({post.likes})
              </button>
              <CommentForm postId={post.id} handleComment={handleComment} />
            </div>
            <div className="mt-4 space-y-2">
              {post.comments.map((comment, index) => (
                <p key={index} className="border-t pt-2">
                  {comment}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CommentForm({ postId, handleComment }) {
  const [comment, setComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      handleComment(postId, comment)
      setComment('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="ml-4 flex items-center">
      <input
        type="text"
        className="border rounded-full px-4 py-2 mr-2 flex-1"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 transform hover:scale-110"
      >
        Comment
      </button>
    </form>
  )
}
