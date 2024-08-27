import React from 'react';
import engagement from '../../../assets/engagement.svg';


function NotreMission() {
  return (
    <div className='mb-20'>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={engagement}
              alt="Notre Mission"
              className="w-full h-auto object-cover max-w-lg md:max-w-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl text-neutralDGrey font-semibold mb-4">
              Notre <span className='text-brandPrimary'>Mission</span>
            </h2>
            <p className="text-lg md:text-xl text-neutralGrey mb-8">
              Notre mission est de garantir un suivi scolaire rigoureux et adapté, permettant à chaque élève de maximiser son potentiel académique et de réussir ses études avec succès. 
              Nous croyons fermement que chaque enfant mérite une éducation de qualité et un accompagnement individualisé pour surmonter ses difficultés scolaires et atteindre l'excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotreMission;
