import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className='flex justify-between items-center p-4 bg-gray-300 text-white'>
        <img src='./next.svg' alt='logo' className='w-20 h-20' />
      <ul className='flex justify-between items-center space-x-4 text-gray-800'>
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/team-building">Team Building</Link></li>
        <li><Link href="/nos-concepts">Nos Concepts</Link></li>
        <li><Link href="/nos-formations">Nos Formations</Link></li>
        <li><Link href="/agenda">Agenda</Link></li>
        <li><Link href="/galerie-scenarios">Galerie - Scénarios</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Parlons-en</button>
    </nav>
  );
}