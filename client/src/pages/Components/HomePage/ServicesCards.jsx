import React from "react";
import teamIcon from '../../../assets/teamIcon.svg';
import apprentissage from '../../../assets/apprentissage.svg';
import flexibility from '../../../assets/flexibility.svg';
import ressources from '../../../assets/ressources.svg';


function ServicesCards() {
  const services = [
    {
      id: 1,
      title: "Équipe pédagogique qualifiée",
      description: "Enseignants passionnés et hautement qualifiés.",
      image: teamIcon, 
    },
    {
      id: 2,
      title: "Environnement d'apprentissage favorable",
      description: "Environnement positif où chaque élève se sent valorisé.",
      image: apprentissage, 
    },
    {
      id: 3,
      title: "Flexibilité et adaptabilité",
      description: "Méthodes et horaires ajustés aux besoins spécifiques.",
      image: flexibility,
    },
    {
      id: 4,
      title: "Ressources pédagogiques de qualité",
      description: "Ressources modernes pour enrichir l'apprentissage.",
      image: ressources,
    },
  ];


  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      
      <div className="md:w-1/2 mx-auto text-center">
        <h2 className="text-5xl text-neutralDGrey   mb-10">
          Pourquoi choisir Cross~Knowledge ?
        </h2>
        <p className="text-neutralGrey text-bold text-xl">Découvrez les avantages de <span className="text-brandPrimary"> notre école</span></p>
      </div>

      <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#EBF8F5] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt={service.title} className="m-1.5 w-16 h-16" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-neutralGrey text-lg">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesCards;
