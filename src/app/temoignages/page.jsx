import TemoignagesClient from "./temoignages-client";

export const metadata = {
  title: "Témoignages et Avis | Expériences Immersives en Haute-Savoie | En Scènes Acting",
  description: "Découvrez les témoignages de nos clients et partenaires qui ont vécu nos expériences immersives et nos activités de team building en Haute-Savoie. Rejoignez notre communauté de spect'acteurs !",
  openGraph: {
    title: "Témoignages et Avis | Expériences Immersives en Haute-Savoie | En Scènes Acting",
    description: "Découvrez les témoignages de nos clients et partenaires qui ont vécu nos expériences immersives et nos activités de team building en Haute-Savoie. Rejoignez notre communauté de spect'acteurs !",
  }
};

// Composant page principal (côté serveur)
export default function TemoignagesPage() {
  return <TemoignagesClient />;
}