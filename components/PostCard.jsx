"use client"
import Link from "next/link"

const PostCard = ({ post }) => {
  return (
    <div key={post.id} className="p-4 border bg-blue-900">
      <Link href={`posts/${post.id}`}>
        <h2 className="text-white font-semibold text-xl">{post.id} - {post.title}</h2>
      </Link>
      <p className="text-white mt-2">{post.body}</p>
      <button onClick={() => alert("esto funciona")} className="text-zinc-700 border px-4 mt-4 rounded bg-white">
        click
      </button>
    </div>
  )
}

export default PostCard