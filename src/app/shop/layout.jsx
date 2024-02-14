import Link from "next/link";

export const metadata = {
  title: "Shop Layout",
  description: "Shop Layout",
};

export default function ShopLayout({ children }) {
  return (
    <div>
      <div className="flex justify-center bg-zinc-700">
        <ul className="flex gap-8 ">
          <li className="text-white text-xl">
            <Link href="/shop">
              shop
            </Link>
          </li>
          <li className="text-white text-xl">
            <Link href="/shop/category">
              category
            </Link>
          </li>
          <li className="text-white text-xl">
            <Link href="/shop/computers">
              computers
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  )
}