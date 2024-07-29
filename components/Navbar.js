import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/talent">Talent</Link></li>
        <li><Link href="/companies">Companies</Link></li>
        <li><Link href="/trends">Trends</Link></li>
      </ul>
    </nav>
  );
}