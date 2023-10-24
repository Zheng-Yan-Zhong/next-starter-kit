// import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
const inter = Inter({ subsets: ["latin"] });
import style from "./global.module.css";
import "./reset.css";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={style.container}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}