import Link from 'next/link';

const Nav = () => (
  <nav>
    <style jsx>{`
      nav a {
        text-transform: uppercase;
      }
      nav a:not(:first-child) {
        margin-left: 15px;
      }
    `}</style>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/tv-shows">
      <a>TV Shows</a>
    </Link>
    <Link href="/abc?slug=123" as="/abc/123">
      <a>Link with query</a>
    </Link>
    <Link href="/materialui">
      <a>Material-UI</a>
    </Link>
  </nav>
);

export default Nav;
