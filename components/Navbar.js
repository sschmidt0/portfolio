import Link from 'next/link';

const Navbar = () => (
  <header>
    <nav>
      <div className="logo">
        <h2>Sarah Schmidt</h2>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/sobre-mi"><a>Sobre mí</a></Link>
      <Link href="/portafolio"><a>Portafolio</a></Link>
      <Link href="/curriculum"><a>Curriculum</a></Link>
      <Link href="/contacto"><a>Contacto</a></Link>
    </nav>
  </header>
);

export default Navbar;
