import FormationsClient from "./formations-client";

export const metadata = {
  title: "Nos Formations | Cohésion d'Équipe & Communication | En Scènes Acting",
  description: "Développez la cohésion d'équipe et améliorez la communication avec nos formations en Haute-Savoie. Découvrez des approches originales basées sur les techniques théâtrales pour renforcer votre équipe.",
  openGraph: {
    title: "Nos Formations | Cohésion d'Équipe & Communication | En Scènes Acting",
    description: "Développez la cohésion d'équipe et améliorez la communication avec nos formations en Haute-Savoie. Découvrez des approches originales basées sur les techniques théâtrales pour renforcer votre équipe.",
  }
};

// Composant page principal (côté serveur)
export default function FormationsPage() {
  return <FormationsClient />;
}