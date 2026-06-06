import { BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const Publications = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).publications;

  return (
    <section id="publicacoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <Card className="shadow-soft hover:shadow-large transition-smooth border-border/50 gradient-card">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                    {t.area}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary font-playfair leading-snug mb-4">
                    {t.article1.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {t.article1.description}
                  </p>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90"
                  >
                    <a
                      href="https://revistaoabsc.org/esasc/article/view/80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.readArticle}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;
