import User from '../components/user'

export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-800 h-screen">
      <div className="flex justify-center">
        <h1 className="mt-10 text-3xl font-semibold text-white">
          Hello World
        </h1>
      </div>
      <div className="flex justify-center mt-10 text-white text-xl">
        <User />
      </div>
    </div>
  )
}
