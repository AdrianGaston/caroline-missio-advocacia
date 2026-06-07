import { useRef, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const AUTOPLAY_DELAY = 12000;
const RESUME_AFTER_INTERACTION = 30000;

const Testimonials = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).testimonials;

  const autoplay = useRef(
    Autoplay({
      delay: AUTOPLAY_DELAY,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleInteraction = useCallback(() => {
    const plugin = autoplay.current;
    if (!plugin) return;
    plugin.stop();
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      plugin.play();
    }, RESUME_AFTER_INTERACTION);
  }, []);

  const testimonials = [
    { name: t.client1.name, role: t.client1.role, content: t.client1.content, rating: 5 },
    { name: t.client2.name, role: t.client2.role, content: t.client2.content, rating: 5 },
    { name: t.client4.name, role: t.client4.role, content: t.client4.content, rating: 5 },
    { name: t.client3.name, role: t.client3.role, content: t.client3.content, rating: 5 },
    { name: t.client6.name, role: t.client6.role, content: t.client6.content, rating: 5 },
    { name: t.client5.name, role: t.client5.role, content: t.client5.content, rating: 5 },
    { name: t.client7.name, role: t.client7.role, content: t.client7.content, rating: 5 },
    { name: t.client8.name, role: t.client8.role, content: t.client8.content, rating: 5 },
    { name: t.client9.name, role: t.client9.role, content: t.client9.content, rating: 5 },
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

        <Carousel
          opts={{ align: "start", loop: true, dragFree: false }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="h-full shadow-soft hover:shadow-medium transition-smooth gradient-card">
                  <CardContent className="pt-6 h-full flex flex-col">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-foreground/80 mb-6 leading-relaxed italic flex-1">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      {testimonial.role && (
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center items-center gap-4 mt-8 relative">
            <CarouselPrevious
              onClick={handleInteraction}
              className="static translate-y-0 bg-primary text-primary-foreground hover:bg-primary/90 border-primary"
            />
            <CarouselNext
              onClick={handleInteraction}
              className="static translate-y-0 bg-primary text-primary-foreground hover:bg-primary/90 border-primary"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
