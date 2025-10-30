import { Award, BookOpen, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";
import draCarolinePhoto from "@/assets/dra-caroline.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const About = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).about;

  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img
              src={draCarolinePhoto}
              alt="Dra. Caroline Missio"
              className="rounded-lg shadow-large w-full h-[500px] object-cover"
            />
          </div>

          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {t.title}
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              {t.paragraph1}
            </p>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              {t.paragraph2}
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-4 text-center shadow-soft hover:shadow-medium transition-smooth">
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold text-sm">{t.years}</h3>
                <p className="text-xs text-muted-foreground">{t.experience}</p>
              </Card>
              <Card className="p-4 text-center shadow-soft hover:shadow-medium transition-smooth">
                <BookOpen className="h-8 w-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold text-sm">{t.specialization}</h3>
                <p className="text-xs text-muted-foreground">{t.postgraduate}</p>
              </Card>
              <Card className="p-4 text-center shadow-soft hover:shadow-medium transition-smooth">
                <Scale className="h-8 w-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold text-sm">{t.oab}</h3>
                <p className="text-xs text-muted-foreground">{t.regularized}</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
