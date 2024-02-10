import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-zinc-700">
      <h1 className="text-3xl px-4 py-4 ml-4 text-white">
        <Link href="/">
          Navbar
        </Link>
      </h1>
      <ul className="flex gap-4 mr-4 px-4 py-4 text-white">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/posts">
            posts
          </Link>
        </li>
      </ul>
    </nav>
  )
}