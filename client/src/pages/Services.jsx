import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PiedDePage from "./Components/PiedDePage";
import contactImage from "../assets/contact.svg";

function Services() {
  const navigate = useNavigate();

  const handleInscriptionClick = () => {
    navigate("/inscription");
  };

  return (
    <div>
      <Navbar />
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 bg-neutralSilver rounded-sm text-neutralDGrey">
        {/* Title Section */}
        <div className="mt-2 py-4 text-center mb-10">
          <h3 className="text-3xl text-neutralDarkGrey font-semibold">
            Nos <span className="text-brandPrimary">Programmes</span> et
            Services
          </h3>
        </div>

        {/* Programme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 bg-white shadow-lg rounded-lg mb-12">
          <div className="bg-neutralLighterGrey p-6 rounded-md">
            <h3 className="text-2xl text-neutralDarkGrey font-semibold mb-4">
              Programme CNED réglementé
            </h3>
            <p className="text-lg text-neutralGrey mb-4">
              En partenariat avec le CNED, une inscription au CNED en classe
              réglementée est envisageable, permettant aux élèves de suivre un
              programme académique officiel tout en bénéficiant de notre soutien
              personnalisé.
            </p>
          </div>

          <div className="bg-neutralLighterGrey p-6 rounded-md">
            <h3 className="text-2xl text-neutralDarkGrey font-semibold mb-4">
              Cours de soutien scolaire personnalisés
            </h3>
            <p className="text-lg text-neutralGrey mb-4">
              Des séances de tutorat adaptées aux besoins individuels des
              élèves, couvrant toutes les matières principales, pour renforcer
              leurs compétences et leurs connaissances.
            </p>
          </div>

          <div className="bg-neutralLighterGrey p-6 rounded-md">
            <h3 className="text-2xl text-neutralDarkGrey font-semibold mb-4">
              Préparation aux examens
            </h3>
            <p className="text-lg text-neutralGrey mb-4">
              Des programmes de préparation aux examens nationaux et
              internationaux, avec des techniques de révision efficaces et des
              simulations d'examen.
            </p>
          </div>

          <div className="bg-neutralLighterGrey p-6 rounded-md">
            <h3 className="text-2xl text-neutralDarkGrey font-semibold mb-4">
              Suivi scolaire et évaluation
            </h3>
            <p className="text-lg text-neutralGrey mb-4">
              Un suivi continu des progrès des élèves, avec des évaluations
              régulières pour identifier les points forts et les domaines à
              améliorer.
            </p>
          </div>
        </div>

        {/* Registration Button */}
        <div className="text-center mt-12 mb-8">
          <button
            onClick={handleInscriptionClick}
            className="px-7 py-3 bg-[#24345a] text-white text-lg rounded-lg hover:bg-neutralDGrey transition-all duration-300"
          >
            S'inscrire Maintenant
          </button>
        </div>

        {/* Contact Section */}
        <div className="mt-20 pb-20">
          <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={contactImage}
                  alt="Contactez-nous"
                  className="w-full h-auto object-cover max-w-lg md:max-w-lg"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl text-neutralDarkGrey font-semibold mb-4">
                  Contactez-nous
                </h3>
                <p className="text-lg md:text-xl text-neutralGrey mb-8">
                  Pour en savoir plus sur nos programmes et services, ou pour
                  inscrire votre enfant à l'école Cross~Knowledge, veuillez nous
                  contacter au{" "}
                  <span className="text-brandPrimary">[0659 962 441]</span> ou
                  visiter notre établissement au{" "}
                  <span className="text-brandPrimary">
                    18, Lotissements El Omrania, Ainallah, Dely Ibrahim
                  </span>
                  . Nous serons ravis de répondre à toutes vos questions et de
                  vous accompagner dans le parcours éducatif de votre enfant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PiedDePage />
    </div>
  );
}

export default Services;
