// pages/Gallery.jsx
import GalleryClient from "./gallery-client";

// Métadonnées exportées pour le SEO
export const metadata = {
  title: "Galerie de Scénarios | Activités Team Building Immersives | En Scènes Acting",
  description: "Découvrez en image nos scénarios immersifs en Haute-Savoie : enquêtes, jeux de rôle, aventures au château et story games. Des activités team building originales pour votre entreprise.",
  openGraph: {
    title: "Galerie de Scénarios | Activités Team Building Immersives | En Scènes Acting",
    description: "Découvrez en image nos scénarios immersifs en Haute-Savoie : enquêtes, jeux de rôle, aventures au château et story games. Des activités team building originales pour votre entreprise.",
  }
};

// Composant page principal (côté serveur)
export default function GalleryPage() {
  return <GalleryClient />;
}