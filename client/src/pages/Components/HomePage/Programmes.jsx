import React from "react";
import { Link } from "react-router-dom";  

function Programmes() {
  const programmes = [
    {
      id: 1,
      title: "Cours de soutien scolaire personnalisés",
      summary: "Des séances adaptées pour renforcer les compétences des élèves.",
    },
    {
      id: 2,
      title: "Préparation aux examens",
      summary: "Programmes pour réussir les examens nationaux et internationaux.",
    },
    {
      id: 3,
      title: "Suivi scolaire et évaluation",
      summary: "Évaluations régulières pour suivre les progrès des élèves.",
    },
    {
      id: 4,
      title: "Programme CNED réglementé",
      summary: "Programme académique officiel avec soutien personnalisé.",
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 bg-neutralSilver mb-30 rounded-sm text-neutralDGrey ">
      <div className="text-center md:w-1/2 mx-auto p-10">
        <h2 className="text-4xl text-neutralDarkGrey font-semibold mb-8">
          Programmes et Services de Cross~Knowledge
        </h2>
      </div>
      {/* all programs */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {programmes.map((program) => (
          <div
            key={program.id}
            className="relative mb-12 p-8 bg-white shadow-lg rounded-lg cursor-pointer transition-transform transform hover:scale-105"
          >
            <h3 className="mb-4 text-2xl font-semibold text-neutralGray">
              {program.title}
            </h3>
            <p className="text-lg text-neutralGrey">
              {program.summary}
            </p>
            <div className="mt-4">
              <Link
                to="/services"  // Utilisez le composant Link avec l'URL de la page des services
                className="font-bold text-brandPrimary hover:text-neutral-700"
              >
                Plus de détails
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block ml-2"
                  viewBox="0 0 17 11"
                  fill="none"
                  width="17"
                  height="11"
                >
                  <path
                    d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programmes;
