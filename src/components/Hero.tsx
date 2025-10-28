import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá, gostaria de agendar uma consulta", "_blank");
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center gradient-hero">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Defendendo seus direitos com ética e dedicação
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Advocacia especializada em Direito Civil, Trabalhista e de Família com atendimento humanizado e soluções jurídicas eficazes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-accent hover:bg-accent/90 text-white font-medium shadow-large"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Agende uma Consulta
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("sobre");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Conheça mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
