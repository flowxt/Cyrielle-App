import ConceptsClient from "./concepts-client";

export const metadata = {
  title: "Nos Concepts | Spectacles Interactifs & Escape Games | En Scènes Acting",
  description: "Découvrez nos concepts originaux de team building en Haute-Savoie : spectacles interactifs, escape games itinérants et aventures immersives pour des souvenirs inoubliables en entreprise.",
  openGraph: {
    title: "Nos Concepts | Spectacles Interactifs & Escape Games | En Scènes Acting",
    description: "Découvrez nos concepts originaux de team building en Haute-Savoie : spectacles interactifs, escape games itinérants et aventures immersives pour des souvenirs inoubliables en entreprise.",
  }
};

// Composant page principal (côté serveur)
export default function ConceptsPage() {
  return <ConceptsClient />;
}