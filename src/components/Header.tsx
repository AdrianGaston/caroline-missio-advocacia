import { useState, useEffect } from "react";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
            className="flex items-center gap-2 hover:opacity-80 transition-smooth"
          >
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold text-primary">
              Dra. Caroline Missio
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
            >
              Depoimentos
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary/90"
            >
              Contato
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => {
              const nav = document.getElementById("mobile-nav");
              nav?.classList.toggle("hidden");
            }}
          >
            <div className="w-6 h-0.5 bg-primary mb-1"></div>
            <div className="w-6 h-0.5 bg-primary mb-1"></div>
            <div className="w-6 h-0.5 bg-primary"></div>
          </button>
        </div>

        <div id="mobile-nav" className="hidden md:hidden pb-4">
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth text-left"
            >
              Depoimentos
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary/90 w-full"
            >
              Contato
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
