import React from 'react';
import Navbar from './Components/Navbar';
import PiedDePage from './Components/PiedDePage';

function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 bg-neutralSilver mb-20 rounded-sm text-neutralDGrey">
        <div className="p-6 md:p-8 lg:p-10 mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutralDarkGrey font-semibold mb-6 md:mb-8 lg:mb-10 mt-8 md:mt-8">
            À propos de <span className="text-brandPrimary">Cross~Knowledge</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-neutralGrey   mb-6 md:mb-8 lg:mb-10">
            Cross~Knowledge est une école spécialisée dans l'<span className="text-brandPrimary">accompagnement scolaire personnalisé</span>, située à Dely Ibrahim. Depuis notre création, nous nous engageons à offrir une éducation de qualité et un suivi personnalisé pour aider chaque élève à réussir académiquement.
          </p>
        </div>
        
        <div className="p-6 md:p-8 lg:p-10 mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-neutralDarkGrey font-semibold  mb-4 md:mb-6 lg:mb-8">
            Notre <span className="text-brandPrimary">Histoire</span>
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-neutralGrey  mb-6 md:mb-8 lg:mb-10">
            Fondée avec la conviction que chaque enfant mérite une chance égale de réussir, Cross~Knowledge a évolué pour devenir un établissement de confiance dans le domaine de l'éducation. Nous avons aidé de nombreux élèves à surmonter leurs défis académiques et à atteindre leurs objectifs scolaires grâce à notre approche pédagogique unique.
          </p>
        </div>

        <div className="p-6 md:p-8 lg:p-10 mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-neutralDarkGrey font-semibold  mb-4 md:mb-6 lg:mb-8">
            Notre <span className="text-brandPrimary">Mission</span>
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-neutralGrey  mb-6 md:mb-8 lg:mb-10">
            Notre mission est de fournir un <span className="text-brandPrimary">soutien éducatif</span> qui répond aux besoins spécifiques de chaque élève. Nous croyons en une approche personnalisée, où chaque élève est soutenu individuellement pour maximiser son potentiel. Nous visons à inspirer la confiance et à encourager l'excellence académique dans un environnement d'apprentissage favorable.
          </p>
        </div>

        <div className="p-6 md:p-8 lg:p-10 mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-neutralDarkGrey font-semibold  mb-4 md:mb-6 lg:mb-8">
            Nos <span className="text-brandPrimary">Valeurs</span>
          </h3>
          <ul className="list-disc list-inside text-base md:text-lg lg:text-xl text-neutralGrey mb-6 md:mb-8 lg:mb-10 ">
            <li className="mb-4">
              <strong>Excellence :</strong> Nous visons l'<span className="text-brandPrimary">excellence</span> dans tout ce que nous faisons, de l'enseignement à l'encadrement des élèves.
            </li>
            <li className="mb-4">
              <strong>Respect :</strong> Nous croyons en l'importance du <span className="text-brandPrimary">respect</span> mutuel entre enseignants, élèves et parents.
            </li>
            <li className="mb-4">
              <strong>Engagement :</strong> Nous nous engageons à soutenir chaque élève dans son parcours éducatif.
            </li>
            <li className="mb-4">
              <strong>Innovation :</strong> Nous adoptons des <span className="text-brandPrimary">méthodes d'enseignement modernes</span> et flexibles pour répondre aux besoins changeants des élèves.
            </li>
          </ul>
        </div>

        <div className="p-6 md:p-8 lg:p-10 mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-neutralDarkGrey font-semibold  mb-4 md:mb-6 lg:mb-8">
            Pourquoi <span className="text-brandPrimary">Nous Choisir</span> ?
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-neutralGrey  mb-6 md:mb-8 lg:mb-10">
            Choisir Cross~Knowledge, c'est choisir une école qui place l'élève au centre de son approche pédagogique. Nos programmes sont conçus pour s'adapter aux besoins spécifiques de chaque élève, et notre équipe pédagogique est dévouée à la réussite de chaque étudiant. Nous offrons un environnement d'apprentissage stimulant, des <span className="text-brandPrimary">ressources pédagogiques de qualité</span>, et un soutien individualisé qui fait toute la différence.
          </p>
        </div>
      </main>
      <PiedDePage />
    </div>
  );
}

export default About;
