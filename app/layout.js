import { Playfair_Display, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Bannah",
  description: "E-commerce perfumery website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
