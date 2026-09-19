import { Poppins } from "next/font/google";
import "./globals.css";
import Navber from "@/components/layout/Navber";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title:{
    default: "Kids Home",
    template: "%s | Kids Home"
  },
  description: "Browse our collection of educational toys and learning tools for kids.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} h-full antialiased`}>
      <body className="min-h-screen flex flex-col">
        <header className="py-2 w-11/12 mx-auto">
          <Navber></Navber>
        </header>
        <main className="flex-1 py-2 w-11/12 mx-auto">{children}</main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
