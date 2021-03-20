import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
       </Link>
      <Link href="/posts">
        <a>Posts</a>
       </Link>
       <Link href="/contact">
        <a>Contact
       </a>
       </Link>
    </div>
  )
}