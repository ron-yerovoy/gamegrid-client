'use client'
import { useState } from 'react'
import Head from 'next/head'
import 'daisyui'

export default function Posts() {
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
    <div className="min-h-screen flex">
      <Head>
        <title>Lobby</title>
      </Head>

      {/* Main Content */}
      <div className="w-full bg-gray-100 p-10">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-10 px-80">My Lobby</h1>
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-8 rounded-2xl shadow-xl mb-10  transition duration-500 ">
            <div className="flex items-center gap-4 mb-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full bg-gray-300"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-20 bg-gray-300"></div>
                <div className="skeleton h-4 w-28 bg-gray-300"></div>
              </div>
            </div>
            <p className="text-xl mb-4">{post.content}</p>
            <div className="flex items-center mt-4">
              <button
                className="btn btn-primary text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300  hover:scale-110"
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
        className="input input-bordered flex-1 mr-2"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-success text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 transform hover:scale-110"
      >
        Comment
      </button>
    </form>
  )
}
