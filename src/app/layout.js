import { Funnel_Display } from "next/font/google";
import Header from '../components/Header';
import "./globals.css";
import { Footer } from "@/components/Footer";

// Import Funnel Display (regular + bold) from Google Fonts via next/font
const funnel = Funnel_Display({
  variable: '--font-funnel',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio de développeur web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${funnel.variable} antialiased`}>
        <Header /> {/* Le Header sera visible sur toutes les pages */}
        <div className="pt-16">
          {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
