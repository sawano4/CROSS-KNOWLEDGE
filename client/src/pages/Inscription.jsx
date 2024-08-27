import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import PiedDePage from "./Components/PiedDePage";

function Inscription() {
  const [email, setEmail] = useState("");
  const [passport, setPassport] = useState(null);
  const [parent1Phone, setParent1Phone] = useState("");
  const [parent2Phone, setParent2Phone] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setPassport(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!passport) {
      setError("Veuillez télécharger une photocopie du passeport.");
      return;
    }

    if (passport.size > 5 * 1024 * 1024) {
      // 5 MB limit
      setError("Le fichier est trop volumineux (limite : 5MB).");
      return;
    }

    // Prepare the form data
    const formData = new FormData();
    formData.append("lastName", e.target.lastName.value);
    formData.append("firstName", e.target.firstName.value);
    formData.append("email", email);
    formData.append("dob", e.target.dob.value);
    formData.append("schoolLevel", e.target.schoolLevel.value);
    formData.append("subjects", e.target.subjects.value);
    formData.append("program", e.target.program.value);
    formData.append("parent1Phone", parent1Phone);
    formData.append("parent2Phone", parent2Phone);
    formData.append("passport", passport);

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        setError(null);
        e.target.reset(); // Reset form inputs
        setEmail("");
        setPassport(null);
        setParent1Phone("");
        setParent2Phone("");
      } else {
        const result = await response.json();
        setError(result.message || "Erreur lors de l'envoi du formulaire.");
      }
    } catch (error) {
      setError("Erreur lors de l'envoi du formulaire.");
      console.error(error); // Log the error for debugging
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <div className="flex-grow flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8 mb-20">
        {success ? (
          <div className="max-w-4xl mx-auto p-6 bg-green-100 text-green-800 border border-green-300 rounded-md mt-8 mb-8">
            <p className="text-2xl font-semibold">
              Merci pour votre pré-inscription, nous vous recontacterons plus
              tard !
            </p>
          </div>
        ) : (
          <div className="w-full max-w-4xl">
            <h2 className="text-4xl text-[#24345a] text-center">
              Formulaire D'inscription
            </h2>
            <form
              onSubmit={handleFormSubmit}
              className="space-y-6 p-6 bg-white rounded-lg shadow-md mt-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Numéro de téléphone du parent 1
                  </label>
                  <input
                    type="tel"
                    value={parent1Phone}
                    onChange={(e) => setParent1Phone(e.target.value)}
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#24345a] focus:ring-[#24345a] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Numéro de téléphone du parent 2
                  </label>
                  <input
                    type="tel"
                    value={parent2Phone}
                    onChange={(e) => setParent2Phone(e.target.value)}
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#24345a] focus:ring-[#24345a] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Nom de l'élève
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#24345a] focus:ring-[#24345a] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Prénom de l'élève
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#24345a] focus:ring-[#24345a] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#24345a] focus:ring-[#24345a] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Date de naissance
                  </label>
                  <input
                    type="date"
                    name="dob"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#24345a] focus:ring-[#24345a] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Niveau scolaire
                  </label>
                  <input
                    type="text"
                    name="schoolLevel"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#24345a] focus:ring-[#24345a] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Matières à étudier
                  </label>
                  <input
                    type="text"
                    name="subjects"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#24345a] focus:ring-[#24345a] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Choix de programme
                  </label>
                  <select
                    name="program"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#24345a] focus:ring-[#24345a] sm:text-sm"
                  >
                    <option value="CNED régulé">CNED régulé</option>
                    <option value="Cours de soutien">Cours de soutien</option>
                    <option value="CNED libre">CNED libre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Photocopie du passeport
                  </label>
                  <input
                    type="file"
                    name="passport"
                    accept="image/*,application/pdf"
                    onChange={handleFileChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#24345a] focus:ring-[#24345a] sm:text-sm"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#24345a] text-white rounded-md hover:bg-[#bc262c] focus:outline-none focus:ring-2 focus:ring-[#bc262c] focus:ring-opacity-50"
              >
                Envoyer
              </button>
            </form>

            {error && <div className="text-red-600 mt-4">{error}</div>}
          </div>
        )}
      </div>

      <PiedDePage />
    </div>
  );
}

export default Inscription;
