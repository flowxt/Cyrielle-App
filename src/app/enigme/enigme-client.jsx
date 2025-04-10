import EnigmeClient from './enigme-client';

export const metadata = {
  title: "Énigmes Mystérieuses | Jeu d'Investigation | En Scènes Acting",
  description: "Déchiffrez des énigmes et messages codés lors de nos activités d'investigation en Haute-Savoie. Une expérience immersive idéale pour les team buildings et événements d'entreprise.",
  openGraph: {
    title: "Énigmes Mystérieuses | Jeu d'Investigation | En Scènes Acting",
    description: "Déchiffrez des énigmes et messages codés lors de nos activités d'investigation en Haute-Savoie. Une expérience immersive idéale pour les team buildings et événements d'entreprise.",
  }
};

export default function EnigmePage() {
  return <EnigmeClient />;
}