"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    postalCode: "",
    city: "",
    phone: "",
    email: "",
    message: "",
    enigmaAnswer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation du téléphone (autoriser uniquement les chiffres et les caractères spéciaux)
    if (name === "phone") {
      const phoneRegex = /^[0-9+\-().\s]*$/; // Autorise chiffres, +, -, (), ., espace
      if (!phoneRegex.test(value)) return;
    }

    // Validation du code postal (uniquement chiffres, max 5 caractères)
    if (name === "postalCode") {
      const postalRegex = /^[0-9]{0,5}$/; // Uniquement 5 chiffres max
      if (!postalRegex.test(value)) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    console.log("Formulaire soumis :", formData);
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <div className="px-6 py-8 sm:p-10">
          <h2 className="text-3xl font-bold text-red-700 text-center mb-8 font-poppins">
            Contactez-nous
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom et Prénom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 font-roboto">
                  Prénom
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 font-roboto"
                  required
                  placeholder="Saisissez votre prénom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 font-roboto">
                  Nom
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 font-roboto"
                  required
                   placeholder="Saisissez votre nom"
                />
              </div>
            </div>

            {/* Code Postal et Ville */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 font-roboto">
                  Code Postal
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 font-roboto"
                  required
                  placeholder="Saisissez votre code postal"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 font-roboto">
                  Ville
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 font-roboto"
                  required
                  placeholder="Saisissez votre ville"
                />
              </div>
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 font-roboto">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 font-roboto"
                required
                placeholder="Saisissez votre numéro de téléphone"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 font-roboto">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 font-roboto"
                required
                placeholder="Saisissez votre adresse email"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 font-roboto">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none font-roboto"
                required
                placeholder="Redigez votre message"
              />
            </div>

            {/* Réponse à l'énigme */}
            <div>
              <label className="block text-sm font-medium text-gray-700 font-roboto">
                Réponse à l'énigme <span className="text-gray-500">(si ça vous parle)</span>
              </label>
              <input
                type="text"
                name="enigmaAnswer"
                value={formData.enigmaAnswer}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 font-roboto"
                placeholder="Facultatif"
              />
            </div>

            {/* Bouton Envoyer */}
            <div>
              <button
                type="submit"
                className="w-full bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors font-roboto font-semibold"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
