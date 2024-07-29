'use client'
import { useState } from 'react'
import Head from 'next/head'
import 'daisyui'

export default function Posts(userId) {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    id: '',
    date: '',
    tag: [],
    game: [],
    platform: [],
    text: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handlePosts = async (e) => {
    e.preventDefault();

    // delay for loading components
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(`http://localhost:3001/api/posts/${posts.id}/insert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Post successfully uploaded:\n', data);
      // Add new post to the posts array
      setPosts([...posts, newPost]);
      // Clear the new post form
      setNewPost({
        id: '',
        date: '',
        tag: [],
        game: [],
        platform: [],
        text: '',
      });
      // Redirect to home page on success
      alert(JSON.stringify(data));
      window.location.href = `/HomePage/${data.userid}`;
    } else {
      alert(JSON.stringify(data));
      console.log('Post failed to upload:\n', data.error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>Lobby</title>
      </Head>
      <div className="w-full max-w-lg p-4 ">
        <form onSubmit={handlePosts} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2 " htmlFor="text">
              Post Text
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
          <div key={index} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
