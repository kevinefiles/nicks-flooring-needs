import type { Metadata, Viewport } from "next"
import { Fraunces, Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

export const viewport: Viewport = {
  themeColor: "#071833",
}

export const metadata: Metadata = {
  title: "Nick's Flooring Needs | Epoxy Flooring",
  description:
    "Epoxy flooring for garages, basements, shops, and patios. Build a quote ticket and paste it into the Facebook thread with your floor photos.",
  openGraph: {
    title: "Nick's Flooring Needs",
    description: "Flake, solid, and metallic epoxy floors. Start with the photos you already posted.",
    type: "website",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
