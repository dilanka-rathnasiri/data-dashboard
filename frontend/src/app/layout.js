import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "@/app/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Data Dashboard",
  description: "Sample data dashboard web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
