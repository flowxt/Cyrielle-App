import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contactez-nous | En Scènes Acting",
  description: "Besoin d'informations sur nos prestations de team building en Haute-Savoie ? Contactez notre équipe pour un devis personnalisé ou des renseignements sur nos services.",
  openGraph: {
    title: "Contactez-nous | En Scènes Acting",
    description: "Besoin d'informations sur nos prestations de team building en Haute-Savoie ? Contactez notre équipe pour un devis personnalisé ou des renseignements sur nos services.",
  }
};

export default function Contact() {
    return (
     <ContactForm />
    );
  }