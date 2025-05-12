"use client";

import React from 'react';
import Link from 'next/link';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Politique de Confidentialité
        </h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Utilisation des cookies
          </h2>
          <p className="text-gray-700 mb-4">
            En Scènes Acting utilise des cookies pour améliorer votre expérience de navigation. Ces cookies sont essentiels pour le bon fonctionnement de notre site et nous aident à :
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Mémoriser vos préférences de navigation</li>
            <li>Analyser le trafic du site pour l'améliorer</li>
            <li>Sécuriser votre navigation</li>
            <li>Personnaliser votre expérience utilisateur</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Que sont les cookies ?
          </h2>
          <p className="text-gray-700 mb-6">
            Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous permettent de vous offrir une meilleure expérience de navigation.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Vos droits
          </h2>
          <p className="text-gray-700 mb-6">
            Conformément au RGPD, vous avez le droit d'accepter ou de refuser les cookies non essentiels. Vous pouvez modifier vos préférences à tout moment.
          </p>
        </div>

        <div className="mt-8 border-t pt-6">
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-b from-red-700 to-red-900 text-white font-poppins rounded-lg hover:scale-105 transition-all"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}