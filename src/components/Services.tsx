import { Users, Briefcase, Home, FileText, Heart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Direito Civil",
      description: "Contratos, indenizações, responsabilidade civil e questões patrimoniais.",
    },
    {
      icon: Briefcase,
      title: "Direito Trabalhista",
      description: "Rescisões, verbas trabalhistas, ações contra empregadores e acordos.",
    },
    {
      icon: Heart,
      title: "Direito de Família",
      description: "Divórcio, pensão alimentícia, guarda de filhos e partilha de bens.",
    },
    {
      icon: Users,
      title: "Direito Contratual",
      description: "Elaboração, revisão e negociação de contratos diversos.",
    },
    {
      icon: Home,
      title: "Direito Previdenciário",
      description: "Aposentadorias, benefícios do INSS e revisões de valores.",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Atendimento especializado nas principais áreas do direito, sempre com foco em soluções práticas e eficientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-large transition-smooth animate-slide-up border-border/50 gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <service.icon className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-xl font-semibold text-primary">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-foreground/70 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
