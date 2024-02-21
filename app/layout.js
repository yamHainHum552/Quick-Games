import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quick Games",
  description:
    "Here you can play quick games like tictactoe, rockpaperscissors and flip-a-coin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main
          className="px-8 pb-20 flex flex-col items-center justify-center mx-auto h-full"
          data-theme="dark"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
