import { useState } from 'react';
import Name from '../assets/name.png';
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b shadow-sm bg-brown-100 border-brown-300">
      <div className="max-w-6xl px-5 mx-auto">
        <div className="flex items-center justify-between py-6">
          <div className="navbar-brand">
            <img src={Name} alt="Name" className='h-[10vh]' />
          </div>

          <button
            className="flex flex-col gap-1 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-black rounded"></span>
            <span className="w-6 h-0.5 bg-black rounded"></span>
            <span className="w-6 h-0.5 bg-black rounded"></span>
          </button>

          <ul className={`hidden md:flex list-none gap-8 items-center ${mobileMenuOpen ? 'block' : 'hidden'}`}>
            <li>
              <button onClick={() => scrollToSection('home')} className="font-medium transition-colors text-brown-700 hover:text-brown-400">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="font-medium transition-colors text-brown-700 hover:text-brown-400">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className="font-medium transition-colors text-brown-700 hover:text-brown-400">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="font-medium transition-colors text-brown-700 hover:text-brown-400">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="font-medium transition-colors text-brown-700 hover:text-brown-400">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="flex flex-col gap-0 pb-4 md:hidden">
            <li className="border-b border-brown-200">
              <button onClick={() => scrollToSection('home')} className="block w-full py-4 font-medium text-left text-brown-700 hover:text-brown-400">
                Home
              </button>
            </li>
            <li className="border-b border-brown-200">
              <button onClick={() => scrollToSection('about')} className="block w-full py-4 font-medium text-left text-brown-700 hover:text-brown-400">
                About
              </button>
            </li>
            <li className="border-b border-brown-200">
              <button onClick={() => scrollToSection('skills')} className="block w-full py-4 font-medium text-left text-brown-700 hover:text-brown-400">
                Skills
              </button>
            </li>
            <li className="border-b border-brown-200">
              <button onClick={() => scrollToSection('projects')} className="block w-full py-4 font-medium text-left text-brown-700 hover:text-brown-400">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="block w-full py-4 font-medium text-left text-brown-700 hover:text-brown-400">
                Contact
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
