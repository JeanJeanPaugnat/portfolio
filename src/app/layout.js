import { Funnel_Display } from "next/font/google";
import Header from '../components/Header';
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Footer } from "@/components/Footer";


// Import Funnel Display (regular + bold) from Google Fonts via next/font
const funnel = Funnel_Display({
  variable: '--font-funnel',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Portfolio | Jean Paugnat - Student & Developer Web",
  description: "Web developer portfolio of Jean Paugnat, showcasing projects, skills, and experience in web development.",
  icons: {
    icon: '/favicon.ico', // Chemin vers votre favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${funnel.variable} antialiased`} style={{ backgroundColor: "var(--foreground)" }}>
        <Navbar />
        
        <div className="pt-30">
          {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
