import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-2">
      <Link href="" className="text-red-600 font-semibold text-2xl">
        ST Markplace
      </Link>
      <nav className="flex items-center gap-4 font-semibold text-gray-800">
        <Link href="/products">Home</Link>
        <Link href="/products/new">Menu</Link>
        <Link href="/products">About</Link>
        <Link href="/products">Contact</Link>
        <Link href="#"
          className="bg-red-500 text-white px-8 py-2 rounded-full hover:bg-red-600 transition">
          Login
        </Link>
      </nav>
    </header>
  )
}