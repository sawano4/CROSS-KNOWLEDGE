import React from "react";
import school from "../../../assets/school.svg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const navigateAbout = () => {
    navigate("/about");
  }

  return (
    <div className="mb-20">
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 md:flex-none">
            <img
              src={school}
              alt="Cross~Knowledge"
              className="w-full h-auto md:h-96 object-cover"
            />
          </div>
          <div className="flex-1 md:w-3/5">
            <h2 className="text-3xl md:text-4xl text-neutralDGrey font-semibold mb-4">
              Présentation de l'École Cross~Knowledge
            </h2>
            <p className="text-lg md:text-xl text-neutralGrey mb-8">
              L'école Cross~Knowledge est dédiée à l'accompagnement scolaire personnalisé et au soutien éducatif. Nous offrons une gamme complète de services éducatifs pour répondre aux besoins spécifiques de chaque élève.
            </p>
            <button className="px-6 py-2 bg-[#24345a] text-white rounded hover:bg-neutralDGrey transition-all duration-300 transform hover:-translate-y-1" onClick={navigateAbout}>
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
