'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import 'daisyui'
import { getSessionData } from '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({
    tags: [],
    game: [],
    platform: [],
    text: '',
    shared: false,
  })
  const [userId, setUserId] = useState(null) // Add state for userId
  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/posts/${userId}/posts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      if (response.ok) {
        setPosts(data.posts_list)
      } else {
        console.log('Failed to fetch posts:', data.error)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  // Fetch userId when the component mounts
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const id = await getSessionData()
        setUserId(id) // Set userId once it is resolved
      } catch (error) {
        console.error('Error fetching user ID:', error)
      }
    }

    fetchUserId()
  }, [])

  // Fetch posts when userId is available
  useEffect(() => {
    if (userId) {
      fetchPosts()
    }
  }, [userId]) // Dependency array includes userId

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'tags' || name === 'game' || name === 'platform') {
      setNewPost({ ...newPost, [name]: value.split(',') })
    } else {
      setNewPost({ ...newPost, [name]: value })
    }
  }

  const handlePosts = async (e) => {
    e.preventDefault()
    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (!userId) {
      console.error('User ID is not available')
      return
    }

    const response = await fetch(`http://localhost:3001/api/posts/${userId}/post/insert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })

    const data = await response.json()

    if (response.ok) {
      setPosts([newPost, ...posts]) // Add new post to the top of the posts array
      setNewPost({
        tags: [],
        game: [],
        platform: [],
        text: '',
      })
      alert(JSON.stringify(data))
    } else {
      alert(JSON.stringify(data))
      console.log('Post failed to upload:\n', data.error)
    }
  }

  const handleLikeClick = async (postIndex) => {
    if (!userId) {
      console.error('User ID is not available')
      return
    }
    const updatedPosts = [...posts]
    const post = updatedPosts[postIndex]

    // Check if the user has already liked the post
    const userIndex = post.likes.users.indexOf(userId)
    const isLiked = userIndex !== -1

    // Update local state
    if (isLiked) {
      // User already liked the post, remove the like
      try {
        const response = await fetch(
          `http://localhost:3001/api/posts/${posts[postIndex]._id}/${userId}/unlike`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Failed to update like status')
        }
      } catch (error) {
        console.error('Error updating like status:', error)
      }
      post.liked = false
    } else {
      // User has not liked the post yet, add the like
      // Send the updated like status to the server
      try {
        const response = await fetch(
          `http://localhost:3001/api/posts/${posts[postIndex]._id}/${userId}/like`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Failed to update like status')
        }
      } catch (error) {
        console.error('Error updating like status:', error)
      }
      post.liked = true
    }

    // Update the local state
    setPosts(updatedPosts)
    fetchPosts()
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>Lobby</title>
      </Head>
      <div className="w-full max-w-lg p-4">
        <form onSubmit={handlePosts} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="text">
              {userId ? 'Post a new message' : 'Login to post a new message'}
            </label>
            <input
              id="text"
              name="text"
              type="text"
              value={newPost.text}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="tags">
              Tags (comma separated)
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              value={newPost.tags.join(',')}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="game">
              Games (comma separated)
            </label>
            <input
              id="game"
              name="game"
              type="text"
              value={newPost.game.join(',')}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="platform">
              Platforms (comma separated)
            </label>
            <input
              id="platform"
              name="platform"
              type="text"
              value={newPost.platform.join(',')}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Post
            </button>
          </div>
        </form>
      </div>

      <div className="w-full max-w-lg">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black">
            <p>Text: {post.text}</p>
            <p>Tags: {post.tags.join(', ')}</p>
            <p>Games: {post.game.join(', ')}</p>
            <p>Platforms: {post.platform.join(', ')}</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <button onClick={() => handleLikeClick(index)}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`mr-2 transition-colors duration-300 ${
                      post.liked ? 'text-green-500' : 'text-gray-500'
                    }`}
                  />
                </button>
                <span>{post.likes.count}</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faShare} className="mr-2 text-gray-500" />
                <span>Shares</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
