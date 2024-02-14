import Posts from '../page'
import { Suspense } from 'react'

async function loadPosts(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data;
}

const page = async ({ params }) => {
  const post = await loadPosts(params.postId)
  return (
    <div className="bg-zinc-800">
      <div className="flex justify-center">
        <h1 className="text-white text-2xl font-semibold mt-10">{post.id} - {post.title}</h1>
      </div>
      <div className="flex justify-center">
        <p className="text-white px-10 mt-10 mb-4">{post.body}</p>
      </div>
      <div className="flex justify-center">
        <hr className="w-[50%]" />
      </div>
      <div className="flex justify-center">
        <h3 className="text-white mt-10 text-2xl">Otras publicaciones</h3>
      </div>
      <Suspense 
        fallback={
          <div className="flex justify-center">
            <h3 className="text-white mt-10 h-screen">Loading...</h3>
          </div>
        }
      >
        <Posts />
      </Suspense>
    </div>

  )
}

export default page