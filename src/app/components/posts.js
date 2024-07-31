'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import 'daisyui'
import { getSessionData } from '../actions'

const userId = getSessionData()
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    userid: userId,
    date: '',
    tags: [],
    game: [],
    platform: [],
    text: '',
    shared: false,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/posts/${userId}/posts`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (response.ok) {
          setPosts(data.posts);
        } else {
          console.log('Failed to fetch posts:', data.error);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tags' || name === 'game' || name === 'platform') {
      setNewPost({ ...newPost, [name]: value.split(',') });
    } else {
      setNewPost({ ...newPost, [name]: value });
    }
  };

  const handlePosts = async (e) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(`http://localhost:3001/api/posts/${userId}/post/insert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });
    const data = await response.json();

    if (response.ok) {
      console.log(":::::::::::check",posts)
      setPosts([newPost, ...posts]); // Add new post to the top of the posts array
      setNewPost({
        userid: userId.id,
        date: '',
        tags: [],
        game: [],
        platform: [],
        text: '',
      });

      alert(JSON.stringify(data));
    } else {
      alert(JSON.stringify(data));
      console.log('Post failed to upload:\n', data.error);
    }
    
  };
  console.log(':::',newPost)

  return (

    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>Lobby</title>
      </Head>
      <div className="w-full max-w-lg p-4">
        <form onSubmit={handlePosts} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="text">
              {userId ? "Post a new message" : "Login to post a new message"}
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
            <label className="block text-black text-sm font-bold mb-2" htmlFor="tag">
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
          </div>
        ))}
      </div>
    </div>
  );
}
