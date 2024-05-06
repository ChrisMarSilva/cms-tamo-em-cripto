import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider} from 'next-themes'

//const inter = Inter({ subsets: ["latin"] })
const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "CMS Tamo em Cripto",
  description: "Site para organizar as Criptos",
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable )}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}