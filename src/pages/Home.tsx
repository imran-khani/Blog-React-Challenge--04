import { useEffect, useState } from "react"
import { BlogPosts } from '../../types/BlogTypes'
import BlogPost from '../components/BlogPost'
import { ClipLoader } from "react-spinners"
const Home = () => {

  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?limit=100')
        const data = await res.json()
        const blogs = data.blogs
        setPosts(blogs)
      } catch {
        throw new Error('Failed to fetch data')
      }
      finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [])

  if (posts.length === 0 && !isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pb-32">
        <h1 className="text-2xl font-bold text-center">No posts available</h1>
      </div>
    )
  }

  return (
    <>
      {
        isLoading ? (
          <div className="min-h-screen flex items-center justify-center pb-32">
            <ClipLoader color="rgb(99 102 241 / 1)" size={100} />
          </div>
        ) : (
          <div className="py-24 p-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {posts.map((post: BlogPosts) => (
                <BlogPost
                  key={post.id}
                  title={post.title}
                  photo_url={post.photo_url}
                  description={post.description}
                  id={post.id}
                  content_text={post.content_text}
                />
              ))}
            </div>
          </div>
        )
      }
    </>
  )
}

export default Home