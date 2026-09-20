import { Poppins } from "next/font/google";
import "./globals.css";
import Navber from "@/components/layout/Navber";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";


const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kids-home-omega.vercel.app/";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Kids Home | Educational Toys & Learning Products",
    template: "%s | Little Learners",
  },

  description:
    "Discover fun and educational toys, learning games, flash cards, puzzles, and activity products designed to make learning enjoyable for children.",

  applicationName: "Kids Home",

  authors: [
    {
      name: "Kids Home",
    },
  ],

  creator: "Kids Home",
  publisher: "Kids Home",

  keywords: [
    "educational toys",
    "kids learning toys",
    "children educational products",
    "learning games",
    "kids toys",
    "flash cards for kids",
    "educational games",
    "learning activities",
    "children toys",
  ],

  alternates: {
    canonical: "/",
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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",

    siteName: "Kids Home",

    title: "Kids Home | Educational Toys & Learning Products",

    description:
      "Discover fun and educational toys, learning games, flash cards, puzzles, and activity products designed to make learning enjoyable for children.",

    images: [
      {
        url: "https://i.ibb.co/6JbPjvVx/hero.png",
        width: 640,
        height: 405,
        alt: "Children playing and learning with educational toys",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Kids Home | Educational Toys & Learning Products",

    description:
      "Fun and educational toys, games, flash cards, puzzles, and learning products for children.",

    images: ["https://i.ibb.co/6JbPjvVx/hero.png"],
  },

  icons: {
    icon: "https://i.ibb.co/m5D7Cwwk/favicon.png",
    shortcut: "https://i.ibb.co/m5D7Cwwk/favicon.png",
    apple: "https://i.ibb.co/m5D7Cwwk/favicon.png",
  },

  category: "ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} h-full antialiased`}>
      <body className="min-h-screen flex flex-col">
        <header className="py-2 w-11/12 mx-auto">
          <Navber></Navber>
        </header>
        <main className="flex-1 py-2 w-11/12 mx-auto">{children}
        <Toaster position="top-center" />
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
