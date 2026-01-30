'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export default function ClientDataPage() {
  // State management for posts data, loading state, and error handling
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Async function to fetch posts from JSONPlaceholder API
    const fetchPosts = async () => {
      try {
        // Set loading to true and clear any previous errors
        setIsLoading(true)
        setError(null)
        
        // Make API request to JSONPlaceholder posts endpoint
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        
        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        // Parse the JSON response and update posts state
        const data: Post[] = await response.json()
        setPosts(data)
      } catch (err) {
        // Handle any errors that occur during the fetch operation
        setError('Error fetching data. Please try again later.')
        console.error('Fetch error:', err)
      } finally {
        // Always set loading to false when the operation completes
        setIsLoading(false)
      }
    }

    // Call the fetch function when component mounts
    fetchPosts()
  }, []) // Empty dependency array ensures this runs only once after initial render

  // Loading state: Display spinner and loading message while data is being fetched
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mb-4"></div>
            <p className="text-pink-700 text-lg font-medium">Loading posts...</p>
          </div>
        </div>
      </div>
    )
  }

  // Error state: Display error message with retry option if fetch fails
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <div className="text-red-600 text-lg font-medium mb-2">⚠️ Error</div>
              <p className="text-red-700">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Success state: Display the fetched posts data
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Header section with title and navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-pink-900">Client-Side Data Fetching</h1>
            <Link 
              href="/" 
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </div>
          {/* Display count of fetched posts */}
          <p className="text-pink-700 mt-2">Fetched {posts.length} posts from JSONPlaceholder API</p>
        </div>
      </div>

      {/* Posts display section */}
      <div className="max-w-4xl mx-auto p-8">
        {/* Unordered list to display all posts as required */}
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow border border-pink-100 p-6">
              {/* Post metadata: ID and User ID */}
              <div className="flex items-center justify-between mb-3">
                <span className="bg-pink-100 text-pink-700 text-xs font-semibold px-2 py-1 rounded-full">
                  Post #{post.id}
                </span>
                <span className="text-pink-500 text-xs">
                  User {post.userId}
                </span>
              </div>
              
              {/* Post title - capitalized for better readability */}
              <h2 className="text-xl font-semibold text-pink-900 mb-3 capitalize">
                {post.title}
              </h2>
              
              {/* Post body content */}
              <p className="text-pink-700 leading-relaxed">
                {post.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
