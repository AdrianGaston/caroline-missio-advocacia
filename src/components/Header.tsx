import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import LogoIcon from "@/components/LogoIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = getTranslation(language).header;

  const languages = [
    { code: "pt" as const, name: "Português", flag: "🇧🇷" },
    { code: "en" as const, name: "English", flag: "🇺🇸" },
    { code: "es" as const, name: "Español", flag: "🇪🇸" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Logo and text color based on scroll state
  const logoColor = isScrolled ? "#29445B" : "#d2bfb1";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-3 hover:opacity-80 transition-smooth"
          >
            <LogoIcon 
              className={`h-14 w-14 transition-all duration-500 ${
                isScrolled 
                  ? "brightness-[0.3] sepia-[0.5] saturate-[2] hue-rotate-[180deg]" 
                  : ""
              }`} 
            />
            <span 
              className="text-xl font-semibold font-playfair transition-all duration-500"
              style={{ color: logoColor }}
            >
              Caroline Missio
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className={`text-sm font-medium transition-all duration-500 hover:opacity-80 ${
                isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/85"
              }`}
            >
              {t.home}
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className={`text-sm font-medium transition-all duration-500 hover:opacity-80 ${
                isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/85"
              }`}
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className={`text-sm font-medium transition-all duration-500 hover:opacity-80 ${
                isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/85"
              }`}
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className={`text-sm font-medium transition-all duration-500 hover:opacity-80 ${
                isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/85"
              }`}
            >
              {t.testimonials}
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`text-2xl transition-all duration-500 hover:scale-110 focus:outline-none ${
                  isScrolled ? "opacity-100" : "drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                }`}>
                  {currentLanguage?.flag}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="cursor-pointer flex items-center gap-2"
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary/90"
            >
              {t.contact}
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => {
              const nav = document.getElementById("mobile-nav");
              nav?.classList.toggle("hidden");
            }}
          >
            <div className={`w-6 h-0.5 mb-1 transition-all duration-500 ${isScrolled ? "bg-primary" : "bg-white/85"}`}></div>
            <div className={`w-6 h-0.5 mb-1 transition-all duration-500 ${isScrolled ? "bg-primary" : "bg-white/85"}`}></div>
            <div className={`w-6 h-0.5 transition-all duration-500 ${isScrolled ? "bg-primary" : "bg-white/85"}`}></div>
          </button>
        </div>

        <div id="mobile-nav" className="hidden md:hidden pb-4">
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className={`text-sm font-medium transition-all duration-500 text-left hover:opacity-80 ${
                isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/85"
              }`}
            >
              {t.home}
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className={`text-sm font-medium transition-all duration-500 text-left hover:opacity-80 ${
                isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/85"
              }`}
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className={`text-sm font-medium transition-all duration-500 text-left hover:opacity-80 ${
                isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/85"
              }`}
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className={`text-sm font-medium transition-all duration-500 text-left hover:opacity-80 ${
                isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/85"
              }`}
            >
              {t.testimonials}
            </button>
            
            <div className="flex items-center gap-2 py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`text-2xl hover:scale-110 transition-smooth ${
                    language === lang.code ? "scale-110" : "opacity-60"
                  }`}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
            
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary/90 w-full"
            >
              {t.contact}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
