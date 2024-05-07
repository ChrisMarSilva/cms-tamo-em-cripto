import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CMS Tamo em Cripto",
  description: "Site para organizar as Criptos",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  // const user = await getUser();
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
