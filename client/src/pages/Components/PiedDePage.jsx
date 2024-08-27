import React from "react";
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import logoCrossKnowledge from '../../assets/logoCrossKnowledge.png';

export function PiedDePage() {
  return (
    <footer className="bg-[#fefefe] text-[#000000] py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Cross Knowledge Section */}
        <div className="mb-6 md:mb-0 md:w-1/3 flex justify-center md:justify-start items-center">
          <img src={logoCrossKnowledge} alt="Cross~Knowledge Logo" className="h-24 md:h-28" />
        </div>

        {/* Quick Links Section */}
        <div className="mb-6 md:mb-0 md:w-1/3 text-center">
          <h3 className="text-lg font-semibold mb-4 text-[#24345a]">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#bc262c] transition-colors">Acceuil</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#bc262c] transition-colors">Services</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#bc262c] transition-colors">About</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="md:w-1/3 text-center md:text-right">
          <p className="flex items-center justify-center md:justify-end mb-2">
            <LocationOnIcon className="mr-2 text-[#24345a]" />
            18, Lotissements El Omrania, Ainallah, Dely Ibrahim
          </p>
          <p className="flex items-center justify-center md:justify-end mb-2">
            <PhoneIcon className="mr-2 text-[#24345a]" />
            +213 659 962 441
          </p>
          <p className="flex items-center justify-center md:justify-end">
            <EmailIcon className="mr-2 text-[#24345a]" />
            <a href="mailto:Crossknowledge_school@gmail.com" className="hover:text-[#bc262c] transition-colors">
              Crossknowledge_school@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="container mx-auto my-8">
        <hr className="border-[#aacab4]" />
      </div>

      {/* All Rights Reserved */}
      <div className="container mx-auto mt-4 text-center">
        <p className="text-sm text-[#24345a]">&copy; {new Date().getFullYear()} Cross Knowledge. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default PiedDePage;
