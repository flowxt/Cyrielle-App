import Link from 'next/link';

const NavBar = () => {
  return (
    <header className="bg-neutral-950">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:py-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
             <img src='./logoES.jpg' alt="logo" className="h-16 w-16" />
            </a>
          </div>

          <div className="hidden md:block ">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 lg:text-xl ">
                <li>
                  <Link href="/" className="transition text-white hover:text-red-500/75">
                    Accueil
                  </Link>
                </li>
                
                <li>
                  <Link href="/team-building" className="transition text-white hover:text-red-500/75">
                    Team Building
                  </Link>
                </li>
                <li>
                  <Link href="/nos-concepts" className="transition text-white hover:text-red-500/75">
                    Nos Concepts
                  </Link>
                </li>
                <li>
                  <Link href="/nos-formations" className="transition text-white hover:text-red-500/75">
                    Nos Formations
                  </Link>
                </li>
                <li>
                  <Link href="/agenda" className="transition text-white hover:text-red-500/75">
                    Agenda
                  </Link>
                </li>
                <li>
                  <Link href="/galerie-scenarios" className="transition text-white hover:text-red-500/75">
                    Galerie - Scénarios
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="transition text-white hover:text-red-500/75">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex">
                <Link
                  className="rounded-3xl px-5 py-2.5 text-sm font-medium text-teal-600 bg-red-800 text-xl text-white hover:bg-red-700/75"
                  href="/contact"
                >
                  Parlons-en
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded p-2 text-gray-600 transition bg-gray-800 text-white hover:text-white/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;