import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Matching the template variables in EmailJS
    const templateParams = {
      email: email, // This should match the template variable {{email}}
      message: message, // This should match the template variable {{message}}
    };

    emailjs.send('service_kllw0cn', 'template_h6cwsns', templateParams, 'mn3GX1NBak2d4F251')
      .then((response) => {
        setSuccess(true);
        setError(null);
        setEmail('');
        setMessage('');
      }, (err) => {
        setError('Une erreur est survenue. Veuillez réessayer.');
        setSuccess(false);
      });
  };

  return (
    <div>
      {success && <p className="text-center text-green-500">Merci de nous avoir contacté!</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-md mx-auto p-4 border rounded shadow-md">
        <label htmlFor="email" className="font-semibold">Adresse email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
        
        <label htmlFor="message" className="font-semibold">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 p-2 rounded h-32"
        />
        
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
