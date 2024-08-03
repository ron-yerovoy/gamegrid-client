'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { getSessionData } from '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Posts({ keyPost }) {
  const [sharePost, setSharePost] = useState({
    shared_post: {
      original_owner: '',
      original_post: '',
    },
  })
  const [posts, setPosts] = useState([])
  const [updatedPosts, setUpdatedPosts] = useState(posts)

  // const [newPost, setNewPost] = useState({
  //   tags: [],
  //   game: [],
  //   platform: [],
  //   text: '',
  //   //shared: false,
  // })
  const [userId, setUserId] = useState(null) // Add state for userId
  const fetchPosts = async () => {
    try {
      if (keyPost === 'following') {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/posts/${userId}/${keyPost}/posts`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        const data = await response.json()
        if (response.ok) {
          setPosts(data.posts_list)
        } else {
          console.log('Failed to fetch posts:', data.error)
        }
      }
      if (keyPost === 'all') {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/posts/${keyPost}posts`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const data = await response.json()
        if (response.ok) {
          let post_data = data.posts_list
          console.log(post_data)
          setPosts(post_data)
        } else {
          console.log('Failed to fetch posts:', data.error)
        }
      } else {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/posts/${keyPost}/posts`, {
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

  const handleSaveClick = async (postIndex) => {
    if (!userId) {
      console.error('User ID is not available')
      return
    }

    const updatedPosts = [...posts]
    const post = updatedPosts[postIndex]

    // Check if the user has already saved the post
    const userIndex = post.saves.users.indexOf(userId)
    const isSaved = userIndex !== -1

    try {
      let response

      if (isSaved) {
        // User already saved the post, remove the save
        response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/posts/${post._id}/${userId}/unsave`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
      } else {
        // User has not saved the post yet, add the save
        response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/posts/${post._id}/${userId}/save`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update save status')
      }

      // Update local state
      if (isSaved) {
        post.saves.users.splice(userIndex, 1) // Remove user from saves array
        post.saved = false
      } else {
        post.saves.users.push(userId) // Add user to saves array
        post.saved = true
      }

      setPosts(updatedPosts) // Trigger re-render
      fetchPosts() // Refresh posts list
    } catch (error) {
      console.error('Error updating save status:', error)
    }
  }
  const handleShare = async (postIndex) => {
    if (!userId) {
      console.error('User ID is not available')
      return
    }

    const updatedPosts = [...posts]
    let sharePostData = {}
    try {
      if (posts[postIndex].shared) {
        sharePostData = {
          shared_post: {
            original_owner: posts[postIndex].shared_post.original_owner,
            original_post: posts[postIndex]._id,
          },
        }
      } else {
        sharePostData = {
          shared_post: {
            original_owner: posts[postIndex].user_id,
            original_post: posts[postIndex]._id,
          },
        }
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/posts/${userId}/post/share`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sharePostData),
      })

      const data = await response.json()
      if (response.ok) {
        setSharePost({ shared_post: { original_owner: '', original_post: '' } })
        updatedPosts[postIndex] = {
          ...updatedPosts[postIndex],
          shared: true,
          shared_post: sharePostData.shared_post,
        }
      } else {
        throw new Error(data.error || 'Failed to update like status')
      }
    } catch (error) {
      console.error('Error updating share status:', error)
    }

    // Update the local state
    setPosts(updatedPosts)
    fetchPosts() // Refresh posts list
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
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/posts/${posts[postIndex]._id}/${userId}/unlike`,
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
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/posts/${posts[postIndex]._id}/${userId}/like`,
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

  useEffect(() => {
    const fetchOriginalPostsAndUserData = async () => {
      const newPosts = await Promise.all(
        posts.map(async (post) => {
          let updatedPost = { ...post }
          if (post.shared) {
            try {
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/posts/${post.shared_post.original_post}/post`,
                {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              )
              const data = await response.json()

              if (response.ok) {
                updatedPost = {
                  ...updatedPost,
                  text: data.text,
                  tags: data.tags,
                  game: data.game,
                  platform: data.platform,
                }
              }
            } catch (error) {
              console.error('Error fetching original post:', error)
            }

            try {
              const og_userResponse = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/users/${post.shared_post.original_owner}/data`
              )
              const original_data = await og_userResponse.json()

              if (og_userResponse.ok) {
                updatedPost = { ...updatedPost, og_user: original_data.nickname }
              }
            } catch (error) {
              console.error('Error fetching original user data:', error)
            }
          }

          try {
            const userResponse = await fetch(
              `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/users/${post.user_id}/data`
            )
            const userData = await userResponse.json()

            if (userResponse.ok) {
              updatedPost = { ...updatedPost, userNickname: userData.nickname }
            }
          } catch (error) {
            console.error('Error fetching user data:', error)
          }

          return updatedPost
        })
      )
      setUpdatedPosts(newPosts)
    }

    fetchOriginalPostsAndUserData()
  }, [posts])

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-lg">
        {updatedPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black">
            <Link href={`/HomePage/Profile/${post.user_id}`}>
              <p>
                {post.shared
                  ? `${post.userNickname} has shared form: ${post.og_user}`
                  : `${post.userNickname}`}
              </p>
            </Link>
            <p>Text: {post.text ? post.text : 'post unavailable'}</p>
            <p>Tags: {post.tags ? post.tags.join(', ') : 'post unavailable'}</p>
            <p>Games: {post.game ? post.game.join(', ') : 'post unavailable'}</p>
            <p>Platforms: {post.platform ? post.platform.join(', ') : 'post unavailable'}</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <button onClick={() => handleLikeClick(index)}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`mr-2 transition-colors duration-300 ${
                      post.likes.users.indexOf(userId) !== -1 ? 'text-green-500' : 'text-gray-500'
                    }`}
                  />
                </button>
                <span>{post.likes.count}</span>
              </div>
              <div className="flex items-center">
                <button onClick={() => handleSaveClick(index)}>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className={`mr-2 transition-colors duration-300 ${
                      post.saves.users.indexOf(userId) !== -1 ? 'text-blue-500' : 'text-gray-500'
                    }`}
                  />
                </button>
                <span>{post.saves.count}</span>
              </div>
              <div className="flex items-center">
                <button onClick={() => handleShare(index)}>
                  <FontAwesomeIcon
                    icon={faShare}
                    className={`mr-2 transition-colors duration-300 ${
                      post.shares.users.indexOf(userId) !== -1 ? 'text-blue-500' : 'text-gray-500'
                    }`}
                  />
                </button>
                <span>{post.shares.count}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
