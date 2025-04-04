"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from 'next/image';
import Modal from './Modal';

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

  const [formError, setFormError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormError("");

    // Validation du téléphone
    if (name === "phone") {
      const phoneRegex = /^[0-9+\-().\s]*$/;
      if (!phoneRegex.test(value)) return;
    }

    // Validation du code postal
    if (name === "postalCode") {
      const postalRegex = /^[0-9]{0,5}$/;
      if (!postalRegex.test(value)) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // Vérification des champs requis
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      setFormError("Merci de remplir tous les champs obligatoires (Prénom, Nom et Email)");
      return;
    }

    // Validation email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Merci de saisir une adresse email valide");
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Formulaire soumis avec succès");
        setModalMessage(`Merci ${formData.firstName} pour votre message !\nNous vous contacterons bientôt.`);
        setIsModalOpen(true);
        
        // Réinitialiser le formulaire
        setFormData({
          firstName: "",
          lastName: "",
          postalCode: "",
          city: "",
          phone: "",
          email: "",
          message: "",
          enigmaAnswer: "",
        });
      } else {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      console.error("Erreur:", error);
      setFormError("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gradient-to-b from-gray-200 to-gray-400 py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="hidden lg:block relative h-full">
            <Image
              src="/carte2.png"
              alt="Équipe en teambuilding"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-700/20 to-transparent" />
          </div>

          <div className="px-6 py-8 sm:p-10 lg:p-12">
            <h2 className="text-3xl font-bold text-red-700 text-center mb-8 font-poppins relative">
              Contactez-nous
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-600 rounded-full" />
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Prénom"
                    className="mt-1 block w-full px-12 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:ring-0 font-roboto transition-all dark:bg-white"
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">👤</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Nom"
                    className="mt-1 block w-full px-12 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:ring-0 font-roboto transition-all dark:bg-white"
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">👤</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="Code Postal"
                    className="mt-1 block w-full px-12 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:ring-0 font-roboto transition-all dark:bg-white"
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">📮</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Ville"
                    className="mt-1 block w-full px-12 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:ring-0 font-roboto transition-all dark:bg-white"
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">🏙️</span>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Téléphone"
                    className="mt-1 block w-full px-12 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:ring-0 font-roboto pl-12 transition-all dark:bg-white"
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">📱</span>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="mt-1 block w-full px-12 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:ring-0 font-roboto transition-all dark:bg-white"
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">📧</span>
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  className="mt-1 block w-full px-12 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:ring-0 font-roboto pl-12 resize-none transition-all dark:bg-white"
                />
                <span className="absolute left-4 top-5 text-gray-400">💬</span>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                <label className="block text-sm font-medium bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text font-poppins">
                  Énigme TeamBuilding ✨
                  <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text font-normal block mt-1 text-xs">
                    "Seulement si cela vous parle"
                  </span>
                </label>
                <input
                  type="text"
                  name="enigmaAnswer"
                  value={formData.enigmaAnswer}
                  onChange={handleChange}
                  placeholder="Votre réponse"
                  className="mt-2 block w-full px-4 py-2 bg-white border-2 border-red-100 rounded-lg focus:border-red-600 focus:ring-0 font-roboto"
                />
              </div>

              {formError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-red-500">⚠️</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700 font-roboto">
                        {formError}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 hover:shadow-xl transition-all font-poppins font-semibold text-lg flex items-center justify-center gap-2"
              >
                <span>✉️</span>
                Envoyer votre message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
    </section>
  );
};

export default ContactForm;