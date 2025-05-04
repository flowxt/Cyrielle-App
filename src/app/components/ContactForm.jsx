"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from 'next/image';
import Modal from './Modal';
import Link from 'next/link';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    enigmaAnswer: "",
    gdprConsent: false
  });

  const [formError, setFormError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormError("");

    // Validation du téléphone
    if (name === "phone") {
      const phoneRegex = /^[0-9+\-().\s]*$/;
      if (!phoneRegex.test(value)) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // Vérification des champs requis
    if (!formData.name.trim() || !formData.email.trim()) {
      setFormError("Merci de remplir tous les champs obligatoires (Nom et Email)");
      return;
    }

    // Validation email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Merci de saisir une adresse email valide");
      return;
    }

    // Vérification du consentement RGPD
    if (!formData.gdprConsent) {
      setFormError("Veuillez accepter la politique de confidentialité pour continuer");
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
        setModalMessage(`Merci ${formData.name} pour votre message !\nNous vous contacterons bientôt.`);
        setIsModalOpen(true);
        
        // Réinitialiser le formulaire
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          enigmaAnswer: "",
          gdprConsent: false
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
              alt="Équipe d'En Scènes Acting travaillant sur un projet de team building"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-700/20 to-transparent" />
          </div>

          <div className="px-6 py-8 sm:p-10 lg:p-12">
            <h2 className="text-3xl font-bold text-red-700 text-center mb-8 font-poppins relative">
              Nous contacter
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-600 rounded-full" />
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <label htmlFor="name" className="sr-only">Votre nom</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nom"
                    required
                    aria-required="true"
                    className="mt-1 block w-full px-12 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:ring-0 font-roboto transition-all dark:bg-white"
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">👤</span>
                </div>
                
                <div className="relative">
                  <label htmlFor="phone" className="sr-only">Votre numéro de téléphone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Téléphone"
                    className="mt-1 block w-full px-12 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:ring-0 font-roboto transition-all dark:bg-white"
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">📱</span>
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="sr-only">Votre adresse email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    aria-required="true"
                    className="mt-1 block w-full px-12 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:ring-0 font-roboto transition-all dark:bg-white"
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">📧</span>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="sr-only">Votre message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  rows="4"
                  className="mt-1 block w-full px-12 py-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:ring-0 font-roboto resize-none transition-all dark:bg-white"
                />
                <span className="absolute left-4 top-5 text-gray-400">💬</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <label htmlFor="enigmaAnswer" className="block text-sm font-medium text-gray-800 mb-2">
                  Énigme TeamBuilding ✨
                  <span className="text-gray-500 font-normal block mt-1 text-xs">
                    Si vous avez une réponse à l'énigme, indiquez-la ici
                  </span>
                </label>
                <input
                  id="enigmaAnswer"
                  type="text"
                  name="enigmaAnswer"
                  value={formData.enigmaAnswer}
                  onChange={handleChange}
                  placeholder="Votre réponse (facultatif)"
                  className="block w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:border-red-600 focus:ring-0 font-roboto"
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="gdprConsent"
                    name="gdprConsent"
                    type="checkbox"
                    checked={formData.gdprConsent}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="gdprConsent" className="text-gray-700">
                    J'accepte que mes données soient utilisées pour répondre à ma demande, conformément à la{' '}
                    <Link href="/politique-confidentialite" className="text-red-600 hover:underline">
                      politique de confidentialité
                    </Link>
                  </label>
                </div>
              </div>

              {formError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md"
                  role="alert"
                  aria-live="assertive"
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
                Envoyer mon message
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