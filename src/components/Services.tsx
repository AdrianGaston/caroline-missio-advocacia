import { Plane, Home, ShoppingCart, FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const Services = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).services;

  const services = [
    {
      icon: Plane,
      title: t.migration.title,
      description: t.migration.description,
    },
    {
      icon: Home,
      title: t.social.title,
      description: t.social.description,
    },
    {
      icon: ShoppingCart,
      title: t.consumer.title,
      description: t.consumer.description,
    },
    {
      icon: FileText,
      title: t.civil.title,
      description: t.civil.description,
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
