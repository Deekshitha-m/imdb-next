import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Providers from "./Providers";
import NavBar from "@/Components/NavBar";
import SearchBox from "@/Components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "Movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header/>
        <NavBar/>
        <SearchBox/>
      {children}
      </Providers>
      </body>
      
    </html>
  );
}
