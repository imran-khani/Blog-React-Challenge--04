import { useEffect, useState } from "react"
import { BlogPosts } from "../../types/BlogTypes"
import { useParams } from "react-router-dom"

const PostFullPage = () => {
    const { id } = useParams()
    const [post, setPost] = useState<BlogPosts | null>(null)

    useEffect(() => {

        const getData = async () => {
            try {
                const res = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?limit=100')
                const data = await res.json()
                const blogs = data.blogs
                // Find the post based on the id

                const matchedPost = blogs.find((post: BlogPosts) => post.title.toLowerCase().split(' ').join('-').slice(0, 50) === id)
                setPost(matchedPost || null)
            } catch {
                throw new Error('Failed to fetch data')
            }
        }
        getData()
    }, [id])



    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
            <div className="flex flex-col gap-y-5">
                <div className="relative aspect-auto">
                    <img
                        src={post?.photo_url}
                        alt={post?.title}
                        className="w-full h-96 object-cover rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-y-5">
                    <h1 className="text-3xl font-bold">{post?.title}</h1>
                    <p className="text-gray-500">{post?.description}</p>
                    <p className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post?.content_html || post?.content_text || '' }}
                    >
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PostFullPage 
