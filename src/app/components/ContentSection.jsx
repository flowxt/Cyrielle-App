"use client";
import { motion } from 'framer-motion';

const ContentSection = ({ subtitle, description }) => {
    return (
      <div className="bg-gray-200 backdrop-blur-sm py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="border-2 border-red-600 rounded-lg p-8 shadow-xl bg-white/80 transition-all duration-300 hover:shadow-2xl"
          >
            <h3 className="text-xl md:text-2xl text-center font-light leading-relaxed">
              {subtitle}
            </h3>
            
            <div className="mt-6 border-t-2 border-red-500 pt-6">
              <p className="text-lg text-gray-800 font-light">
                {description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };