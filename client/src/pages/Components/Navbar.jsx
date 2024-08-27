import React, { useState, useEffect } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import ContactForm from './HomePage/ContactForm';
import logoCrossKnowledge from '../../assets/logoCrossKnowledge.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { link: 'Accueil', path: '/' },
    { link: 'Services', path: '/services' },
    { link: 'À propos', path: '/about' },
  ];

  return (
    <header className="w-full  top-0 left-0 right-0 z-50">
      <nav className={`py-4 lg:px-14 px-4  ${isSticky ? 'sticky top-0 left-0 right-0 mt-0 bg-white shadow-lg' : ''}`}>
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <img src={logoCrossKnowledge} alt="Cross~Knowledge Logo" className="h-24" />
          </NavLink>

          <ul className="hidden md:flex space-x-12">
            {navItems.map(({ link, path }) => (
              <NavLink
                to={path}
                exact
                activeClassName="text-brandPrimary"
                className="cursor-pointer block text-base text-gray900 hover:text-[#aacab4] first:font-medium"
                key={path}
              >
                {link}
              </NavLink>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <button
              onClick={togglePopup}
              className="bg-[#24345a]    text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey"
            >
              Contacter-nous
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-neutralDGrey focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-neutralDGrey" />
              ) : (
                <FaBars className="h-6 w-6 text-neutralDGrey" />
              )}
            </button>
          </div>
        </div>

        <div className={`space-y-4 px-4 py-7 mt-16 bg-brandPrimary ${isMenuOpen ? 'block fixed top-0 right-0 left-0 z-40' : 'hidden'}`}>
          {isMenuOpen && (
            <ul className="flex flex-col items-center space-y-4">
              {navItems.map(({ link, path }) => (
                <NavLink
                  to={path}
                  exact
                  activeClassName="text-brandPrimary"
                  className="cursor-pointer block text-base text-white hover:text-neutralDGrey first:font-medium"
                  key={path}
                >
                  {link}
                </NavLink>
              ))}
              <button
                onClick={togglePopup}
                className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey"
              >
                Contacter-nous
              </button>
            </ul>
          )}
        </div>
      </nav>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaXmark className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-semibold text-center mb-4">Contacter-nous</h2>
            <p className="text-lg text-center mb-4"><strong>Email:</strong> Crossknowledge_school@gmail.com</p>
            <p className="text-lg text-center mb-4"><strong>Téléphone:</strong> +213 659 962 441</p>
            <p className="text-lg text-center mb-6"><strong>Adresse:</strong> 18, Lotissements El Omrania, Ainallah, Dely Ibrahim</p>
            <ContactForm />
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
