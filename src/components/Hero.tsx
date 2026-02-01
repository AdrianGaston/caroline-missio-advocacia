import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).hero;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(t.whatsappMessage)}`, "_blank");
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center gradient-hero">
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat opacity-15 bg-right md:bg-[center_right_10%] lg:bg-[center_right_20%]"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-accent hover:bg-accent/90 text-white font-medium shadow-large"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t.scheduleConsultation}
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
              {t.learnMore}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
