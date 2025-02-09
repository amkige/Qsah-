"use client";

import { useDirection } from "@/hooks/use-direction";
import { NextFont } from "next/dist/compiled/@next/font";

interface ClientLayoutProps {
  children: React.ReactNode;
  inter: NextFont;
  cairo: NextFont;
}

export default function ClientLayout({
  children,
  inter,
  cairo,
}: ClientLayoutProps) {
  const { direction } = useDirection();

  return (
    <div
      dir={direction}
      className={direction === "rtl" ? cairo.className : inter.className}
    >
      {children}
    </div>
  );
}
