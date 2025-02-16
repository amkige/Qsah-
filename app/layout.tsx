import "./globals.css";

import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ClientLayout from "@/components/client-layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Qsah - Where Stories Are Written",
  description: "Professional video production and storytelling company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout inter={inter} cairo={cairo}>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
