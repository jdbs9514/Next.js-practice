import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col bg-zinc-800 h-screen">
      <div className="flex justify-center"> 
        <h1 className="mt-10 text-3xl font-semibold text-white">
          404 Not Found
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="text-white">
          The page you are looking for does not exist.
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-blue-500">
          <Link href="/">
            Go back to the home page
          </Link>
        </p>
      </div>
    </div>
  )
}