import { Geist, Geist_Mono, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // Spécifie les poids nécessaires
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "500"], // Spécifie les poids nécessaires
});

export const metadata = {
  metadataBase: new URL("https://www.enscenes.com"),
  generator: null,
  title: "Team Building en Haute-Savoie | En Scène Acting",
  description:
    "Expert en team building en Haute-Savoie : activités insolites, spectacles interactifs et concepts uniques pour renforcer la cohésion d'équipe. Interventions à Annecy, Chamonix et toute la région Auvergne-Rhône-Alpes.",
  keywords: [
    "team building Haute-Savoie",
    "cohésion équipe Annecy",
    "activité entreprise Haute-Savoie",
    "spectacle interactif",
    "escape game entreprise",
    "En Scènes Acting",
  ],
  openGraph: {
    type: "website",
    title: "Team Building en Haute-Savoie | En Scène Acting",
    description:
      "Expert en team building en Haute-Savoie : activités insolites et spectacles interactifs pour renforcer la cohésion d'équipe.",
    url: "https://www.enscenes.com",
    siteName: "En Scène Acting",
    locale: "fr_FR",
    images: [
      {
        url: "/logoES.jpg",
        width: 1200,
        height: 630,
        alt: "En Scène Acting - Team Building Haute-Savoie",
      },
    ],
  },
  alternates: {
    canonical: "https://www.enscenes.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    {
      name: "En Scène Acting",
      url: "https://www.enscenes.com",
    },
  ],
  icons: {
    icon: "/logoES.jpg",
    apple: "/logoES.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
