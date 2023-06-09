import Head from "next/head";
import "./globals.css";
import "98.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KK Media",
  description: "Kevin Kuse Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/98.css" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
