import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl shadow-2xl p-8 text-center sm:p-12"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Votre message a été envoyé
        </p>

        <h2 className="mt-6 text-xl font-bold">
          {message.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h2>

        <button
          className="mt-8 inline-block w-full rounded-full bg-gradient-to-r from-red-600 to-red-800 py-4 text-sm font-bold text-white shadow-xl"
          onClick={onClose}
        >
          Fermer
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;