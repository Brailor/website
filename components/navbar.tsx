import Link from 'next/link';

const PAGES = ['blog', 'about_me', 'portfolio', 'contact_me'];
export default function Navbar() {
  return (
    <div>
      {PAGES.map((page) => {
        return (
          <Link key={page} href={`/${page}`}>
            <a>{page}</a>
          </Link>
        );
      })}
    </div>
  );
}
