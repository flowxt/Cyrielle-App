/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
};

// Ceci est l'animation à effacer si elle ne veut pas le bouton animé
// animation: {
//   wiggleWithPause: "wiggleWithPause 10s ease-in-out infinite", // Trépignement toutes les 10 secondes
//   border: "borderEffect 3s linear infinite", // Animation de la bordure
// },
// keyframes: {
//   wiggleWithPause: {
//     "0%, 90%": { transform: "translateX(0)" }, // Pas de mouvement pendant 90% de la durée
//     "92%, 96%": { transform: "translateX(-2px)" }, // Mouvement à gauche
//     "94%": { transform: "translateX(2px)" }, // Mouvement à droite
//     "98%": { transform: "translateX(-1px)" }, // Retour à gauche
//   },
//   borderEffect: {
//     "0%": { "border-color": "rgba(255, 0, 0, 0.4)" },
//     "50%": { "border-color": "rgba(255, 0, 0, 1)" },
//     "100%": { "border-color": "rgba(255, 0, 0, 0.4)" },
//   },
// },
