import PostCard from "@/components/PostCard";

// fetch data
async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  await new Promise(resolve => setTimeout(resolve, 5000))

  return data;
}

const page = async() =>  {

  const posts = await loadPosts()

  return (
    <div className="bg-zinc-800 grid grid-cols-4 gap-1 m-0 p-5">
      {
        posts.map(post => (
          <PostCard post={post} key={post.id} />
        ))
      }
    </div>
  )
}

export default page