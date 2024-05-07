import { Link } from "react-router-dom"
import { BlogPosts } from "../../types/BlogTypes"




const BlogPost = ({
    title,
    photo_url,
}: BlogPosts) => {

    const postSlug = title.toLowerCase().split(' ').join('-').slice(0, 50)
    return (
        <Link to={`/${postSlug}`}
            className="flex flex-col gap-y-2"
        >
            <div className="border border-indigo-200 rounded-md">
                <div className="relative aspect-auto">
                    <img
                        src={photo_url}
                        alt={title}

                        className="w-full h-full object-cover rounded-t-md"
                    />

                    <h2 className="font-bold line-clamp-1 p-2">
                        {title}
                    </h2>


                </div>
            </div>

        </Link>
    )
}

export default BlogPost