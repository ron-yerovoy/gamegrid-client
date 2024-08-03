'use client'
import { useState, useEffect } from 'react'
import { getSessionData } from '../actions'

export default function NewPost() {
  const [newPost, setNewPost] = useState({
    tags: [],
    game: [],
    platform: [],
    text: '',
    //shared: false,
  })
  const [userId, setUserId] = useState(null) //
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

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/posts/${userId}/post/insert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })

    const data = await response.json()

    if (response.ok) {
      // setPosts([newPost, ...posts]) // Add new post to the top of the posts array
      setNewPost({
        tags: [],
        game: [],
        platform: [],
        text: '',
      })
      alert(JSON.stringify(data))
      location.reload() // Refresh the page to see the new post
    } else {
      alert(JSON.stringify(data))
      console.log('Post failed to upload:\n', data.error)
    }
  }
  return (
    <div className=" flex flex-col items-center">
      <div className="w-full max-w-xl">
        <form onSubmit={handlePosts} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="text">
              {'Post a new message'}
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
    </div>
  )
}
