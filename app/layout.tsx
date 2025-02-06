import "./globals.css";
import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import ClientLayout from "@/components/client-layout";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Qissa - Where Stories Are Written",
  description: "Professional video production and storytelling company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout inter={inter} cairo={cairo}>
            <div className="sticky w-full h-screen overflow-hidden">
              <Navbar />
              <Hero></Hero>
            </div>
            <section style={{ height: "100vh" , overflow: "hidden", position: "relative",background: "black"}}>

            </section>
            <main>{children}</main>
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
