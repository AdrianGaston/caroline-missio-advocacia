import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const Testimonials = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).testimonials;

  const testimonials = [
    {
      name: t.client1.name,
      role: t.client1.role,
      content: t.client1.content,
      rating: 5,
    },
    {
      name: t.client2.name,
      role: t.client2.role,
      content: t.client2.content,
      rating: 5,
    },
    {
      name: t.client3.name,
      role: t.client3.role,
      content: t.client3.content,
      rating: 5,
    },
    {
      name: t.client4.name,
      role: t.client4.role,
      content: t.client4.content,
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-secondary/30">
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
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-medium transition-smooth animate-slide-up gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
