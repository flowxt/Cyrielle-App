// components/Footer.jsx
import Link from 'next/link';
import CustomButton from './CustomButton';

const Footer = () => {
  return (
    <footer className="bg-neutral-950">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-300">
      <img src='/logo-blanc.png' alt="logo" className="h-16 w-48  sm:w-52" />
    </div>

    <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-gray-400 font-poppins">
  <a href="mailto:contact@enscenes.com" className="text-gray-400">contact@enscenes.com</a>
  <br />
  <a href="tel:+33613287985" className="text-red-700">Tel : 06.13.28.79.85</a>
</p>

<ul className="mt-4 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 font-poppins">
          <li>
            <Link href="/" className="transition text-white hover:text-red-800">
              Accueil
            </Link>
          </li>

          <li>
            <Link href="/team-building" className="transition text-white hover:text-red-800">
              Team Building
            </Link>
          </li>

          <li>
            <Link href="/nos-concepts" className="transition text-white hover:text-red-800">
              Nos concepts
            </Link>
          </li>

          <li>
            <Link href="/nos-formations" className="transition text-white hover:text-red-800">
              Nos formations
            </Link>
          </li>

          <li>
            <Link href="/galerie-scenarios" className="transition text-white hover:text-red-800">
              Galerie - Scénarios
            </Link>
          </li>

          <li>
            <Link href="/agenda" className="transition text-white hover:text-red-800">
              Temoignages
            </Link>
          </li>
        </ul>
    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400 font-poppins">
    Suivez nous sur les réseaux sociaux
    </p>
    <div className="mt-8 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/company/en-scenes/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-red-400">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.58z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/en_scenes_acting/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-red-400">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.42.4.59.2 1.02.44 1.47.88.45.45.68.88.88 1.47.16.45.35 1.25.4 2.42.058 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.4 2.42-.2.59-.44 1.02-.88 1.47-.45.45-.88.68-1.47.88-.45.16-1.25.35-2.42.4-1.27.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.42-.4-.59-.2-1.02-.44-1.47-.88-.45-.45-.68-.88-.88-1.47-.16-.45-.35-1.25-.4-2.42-.058-1.27-.07-1.65-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.4-2.42.2-.59.44-1.02.88-1.47.45-.45.88-.68 1.47-.88.45-.16 1.25-.35 2.42-.4 1.27-.058 1.65-.07 4.85-.07zm0-2.16c-3.26 0-3.67.014-4.95.072-1.28.058-2.17.24-2.93.51-.8.28-1.47.65-2.12 1.3-.65.65-1.02 1.32-1.3 2.12-.27.76-.45 1.65-.51 2.93-.058 1.28-.072 1.69-.072 4.95s.014 3.67.072 4.95c.058 1.28.24 2.17.51 2.93.28.8.65 1.47 1.3 2.12.65.65 1.32 1.02 2.12 1.3.76.27 1.65.45 2.93.51 1.28.058 1.69.072 4.95.072s3.67-.014 4.95-.072c1.28-.058 2.17-.24 2.93-.51.8-.28 1.47-.65 2.12-1.3.65-.65 1.02-1.32 1.3-2.12.27-.76.45-1.65.51-2.93.058-1.28.072-1.69.072-4.95s-.014-3.67-.072-4.95c-.058-1.28-.24-2.17-.51-2.93-.28-.8-.65-1.47-1.3-2.12-.65-.65-1.32-1.02-2.12-1.3-.76-.27-1.65-.45-2.93-.51-1.28-.058-1.69-.072-4.95-.072zm0 5.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16-2.76-6.16-6.16-6.16zm0 10.16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.2c-.8 0-1.44-.64-1.44-1.44s.64-1.44 1.44-1.44 1.44.64 1.44 1.44-.64 1.44-1.44 1.44z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/EnScenesacting/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-red-400">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/>
            </svg>
          </a>
        </div>
       
          <Link href="/contact">
            <CustomButton text="Rencontrons-nous" additionalClasses="rounded-full" />
          </Link>
   
  </div>
</footer>
  );
};

export default Footer;