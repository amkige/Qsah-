"use client";

import { Menu, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useDirection } from "@/hooks/use-direction";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";


const menuItems = [
  { title: { en: "Home", ar: "الرئيسية" }, href: "#home" },
  { title: { en: "About Us", ar: "من نحن" }, href: "#about" },
  { title: { en: "Our Work", ar: "اعمالنا" }, href: "#work" },
  { title: { en: "Contact Us", ar: "تواصل معنا" }, href: "#contact" },
];

  // { title: { en: "Our Office", ar: "مكتبنا" }, href: "#office" },
  // { title: { en: "Studio", ar: "الاستوديو" }, href: "#studio" },
  // { title: { en: "Contact", ar: "التواصل" }, href: "#contact" },
  // { title: { en: "Careers", ar: "التوظيف" }, href: "#careers" },
export default function Navbar() {
  const { direction, toggleDirection } = useDirection();
  const isRTL = direction === "rtl";

  return (
    <nav className=" w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-[#edbe6e]" />
              </Button>
            </SheetTrigger>
            <SheetContent side={isRTL ? "right" : "left"}>
              <SheetTitle className="text-[#edbe6e]">
                {isRTL ? "القائمة الرئيسية" : "Main Menu"}
              </SheetTitle>
              <div className="mt-8 flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg hover:text-[#edbe6e] transition-colors"
                  >
                    {isRTL ? item.title.ar : item.title.en}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <img src="/logo.png" style={{ width: "25px" }} alt="" />
          {/* <span className="text-2xl font-bold text-[#edbe6e]">قِصَّة</span> */}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDirection}
            className="hover:bg-transparent"
          >
            <Languages className="h-5 w-5 text-[#edbe6e]" />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
