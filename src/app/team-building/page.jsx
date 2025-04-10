import TeamBuildingClient from "./team-building-client";

export const metadata = {
  title: "Team Building en Haute-Savoie | Activités de Cohésion d'Équipe | En Scènes Acting",
  description: "Renforcez la cohésion de votre équipe avec nos activités de team building en Haute-Savoie. Jeux de rôle, scénarios interactifs et défis ludiques pour développer communication et leadership.",
  openGraph: {
    title: "Team Building en Haute-Savoie | Activités de Cohésion d'Équipe | En Scènes Acting",
    description: "Renforcez la cohésion de votre équipe avec nos activités de team building en Haute-Savoie. Jeux de rôle, scénarios interactifs et défis ludiques pour développer communication et leadership.",
  }
};

// Composant page principal (côté serveur)
export default function TeamBuildingPage() {
  return <TeamBuildingClient />;
}