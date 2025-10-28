import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Cliente - Direito de Família",
      content: "Profissional extremamente competente e empática. Me ajudou em um momento muito difícil do meu divórcio, sempre com atenção e dedicação. Recomendo de olhos fechados!",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Cliente - Direito Trabalhista",
      content: "Excelente advogada! Conseguiu resolver meu caso trabalhista de forma rápida e eficiente. Sempre disponível para esclarecer dúvidas e muito profissional.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Cliente - Direito Civil",
      content: "Dra. Caroline é uma profissional exemplar. Me orientou perfeitamente em uma questão contratual complexa. Sua dedicação e conhecimento fizeram toda a diferença no resultado positivo.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            O que dizem meus clientes
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            A satisfação dos meus clientes é a maior recompensa do meu trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
