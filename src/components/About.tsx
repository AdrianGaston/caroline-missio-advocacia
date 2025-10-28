import { Award, BookOpen, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988"
              alt="Dra. Caroline Missio"
              className="rounded-lg shadow-large w-full h-[500px] object-cover"
            />
          </div>

          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Sobre Dra. Caroline Missio
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Advogada com mais de 10 anos de experiência, especialista em Direito Civil, Trabalhista e de Família. Formada pela Universidade de São Paulo (USP), com pós-graduação em Direito Processual Civil e MBA em Gestão Jurídica.
            </p>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              Ao longo da carreira, tenho me dedicado a oferecer um atendimento personalizado e humanizado, buscando sempre as melhores soluções jurídicas para cada cliente. Minha atuação é pautada pela ética, transparência e compromisso com a justiça.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-4 text-center shadow-soft hover:shadow-medium transition-smooth">
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold text-sm">10+ Anos</h3>
                <p className="text-xs text-muted-foreground">de Experiência</p>
              </Card>
              <Card className="p-4 text-center shadow-soft hover:shadow-medium transition-smooth">
                <BookOpen className="h-8 w-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Especialização</h3>
                <p className="text-xs text-muted-foreground">Pós-Graduada</p>
              </Card>
              <Card className="p-4 text-center shadow-soft hover:shadow-medium transition-smooth">
                <Scale className="h-8 w-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold text-sm">OAB Ativa</h3>
                <p className="text-xs text-muted-foreground">Regularizada</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
