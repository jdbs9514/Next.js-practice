import Navbar from "../components/Navbar";
import { Montserrat } from "next/font/google";
import './globals.css'

export const metadata = {
  title: 'Josue Benavides'
}

const montserrat = Montserrat({
  weight: ["300", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"]
}) 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
