import React from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ServicesCards from "./Components/HomePage/ServicesCards";
import About from "./Components/HomePage/About";
import Programmes from "./Components/HomePage/Programmes";
import PiedDePage from "./Components/PiedDePage";
import NotreMission from "./Components/HomePage/NotreMission";
import professor from "../assets/professor.svg";
import graduation from "../assets/graduation.svg";
import mission from "../assets/mission.svg";
import bac from "../assets/bac.svg";

function Home() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <Navbar />
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto h-auto w-full bg-white">
        <Carousel className="w-full h-[120vh] md:h-[70vh] lg:h-[75vh] rounded-lg overflow-hidden">
          {/* Slide 1: Ouverture des Inscriptions pour le Bac Français 2024/2025 */}
          <div className="h-full flex flex-col md:flex-row-reverse items-center justify-center gap-6 py-8 md:py-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={bac}
                alt="Ouverture des Inscriptions pour le Bac Français 2024/2025"
                className="w-4/5 h-auto md:w-3/4 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:ml-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#24345a] leading-tight">
                <span className="text-[#bc262c]">Ouverture des Inscriptions</span> pour le Bac Français 2024/2025
              </h1>
              <p className="text-base sm:text-lg text-[#4a4a4a] mb-8">
                Que vous soyez <span className="font-semibold text-[#bc262c]">lycéen</span> ou <span className="font-semibold text-[#bc262c]">parent</span>, cela vous intéresse ! La nouvelle école, <span className="font-semibold text-[#bc262c]">Cross~Knowledge</span>, vous propose des cours de soutien pour préparer vos anticipés et la terminale dans des conditions optimales.
              </p>
              <Link to="/inscription">
                <button className="px-6 py-3 bg-[#bc262c] text-white font-semibold rounded-lg shadow-lg hover:bg-[#a11b1b] transition duration-300 transform hover:scale-105">
                  Inscrivez-vous Maintenant
                </button>
              </Link>
            </div>
          </div>

          {/* Slide 2: Introduction à Cross~Knowledge */}
          <div className="h-full flex flex-col md:flex-row-reverse items-center justify-center gap-6 py-8 md:py-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={graduation}
                alt="Introduction à Cross~Knowledge"
                className="w-4/5 h-auto md:w-3/4 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:ml-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#24345a] leading-tight">
                <span className="text-[#bc262c]">Bienvenue</span> à Cross~Knowledge
              </h1>
              <p className="text-base sm:text-lg text-[#4a4a4a] mb-8">
                Votre partenaire de confiance pour une réussite scolaire assurée.
              </p>
              <Link to="/about">
                <button className="px-6 py-3 bg-[#bc262c] text-white font-semibold rounded-lg shadow-lg hover:bg-[#a11b1b] transition duration-300 transform hover:scale-105">
                  En savoir plus
                </button>
              </Link>
            </div>
          </div>

          {/* Slide 3: Programmes Éducatifs CNED et Plus */}
          <div className="h-full flex flex-col md:flex-row-reverse items-center justify-center gap-6 py-8 md:py-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={professor}
                alt="Programmes Éducatifs CNED et Plus"
                className="w-4/5 h-auto md:w-3/4 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:ml-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#24345a] leading-tight">
                Explorez Nos <span className="text-[#bc262c]">Programmes CNED</span> et Bien Plus
              </h1>
              <p className="text-base sm:text-lg text-[#4a4a4a] mb-8">
                Plongez dans une offre éducative diversifiée avec notre <span className="font-semibold text-[#bc262c]">Programme CNED</span>.
              </p>
              <Link to="/services">
                <button className="px-6 py-3 bg-[#bc262c] text-white font-semibold rounded-lg shadow-lg hover:bg-[#a11b1b] transition duration-300 transform hover:scale-105">
                  Découvrez Nos Programmes
                </button>
              </Link>
            </div>
          </div>

          {/* Slide 4: Engagement envers l'Excellence Éducative */}
          <div className="h-full flex flex-col md:flex-row-reverse items-center justify-center gap-6 py-8 md:py-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={mission}
                alt="Engagement envers l'Excellence Éducative"
                className="w-4/5 h-auto md:w-3/4 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:ml-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#24345a] leading-tight">
                Notre <span className="text-[#bc262c]">Engagement</span>
              </h1>
              <p className="text-base sm:text-lg text-[#4a4a4a] mb-8">
                Nous nous engageons à créer un parcours académique sur mesure pour chaque étudiant.
              </p>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto mt-12">
        <ServicesCards />
        <About />
        <Programmes />
        <NotreMission />
      </div>

      <PiedDePage />
    </div>
  );
}

export default Home;
