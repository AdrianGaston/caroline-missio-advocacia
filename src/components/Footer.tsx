import { Scale } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = getTranslation(language).footer;

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-6 w-6" />
              <span className="text-lg font-semibold">Dra. Caroline Missio</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {t.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contactTitle}</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>{t.phone}: (11) 99999-9999</p>
              <p>{t.email}: contato@carolinemissio.adv.br</p>
              <p>{t.addressLabel}: Av. Paulista, 1000 - São Paulo, SP</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.areasTitle}</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>{t.civilLaw}</li>
              <li>{t.laborLaw}</li>
              <li>{t.familyLaw}</li>
              <li>{t.contractualLaw}</li>
              <li>{t.socialLaw}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
          <p>© {currentYear} Dra. Caroline Missio - {t.rights}</p>
          <p className="mt-2">OAB/SP 123.456 | CRP 12345-6</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
