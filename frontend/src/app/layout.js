import { Montserrat, Freehand, Gloria_Hallelujah} from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const freehand = Gloria_Hallelujah({
  weight: "400",
  variable: "--font-freehand",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sidewalk",
  description: "Sidewalk - Coming Soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${freehand.variable}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
