import { useState } from "react";
import { MessageCircle, Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = getTranslation(language).contact;
  const heroT = getTranslation(language).hero;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t.requiredFields,
        description: t.fillRequired,
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: t.messageSent,
      description: t.messageSuccess,
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/5548991580285?text=${encodeURIComponent(heroT.whatsappMessage)}`, "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-slide-up space-y-6">
            {/* Contact Section */}
            <Card className="shadow-medium gradient-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-6">
                  {t.contactInfo}
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+5548991580285" 
                    className="flex items-start gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <Phone className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium">{t.phone}</p>
                      <p className="text-foreground/70">(48) 9 9158-0285</p>
                    </div>
                  </a>
                  
                  <a 
                    href={`https://wa.me/5548991580285?text=${encodeURIComponent(heroT.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <MessageCircle className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-foreground/70">(48) 9 9158-0285</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:caroline25949@oab-sc.org.br" 
                    className="flex items-start gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <Mail className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium">{t.email}</p>
                      <p className="text-foreground/70">caroline25949@oab-sc.org.br</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Section - Separate */}
            <Card className="shadow-medium gradient-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {t.socialMedia}
                </h3>
                <div className="flex gap-3">
                  <Button
                    size="icon"
                    variant="outline"
                    className="hover:bg-accent hover:text-white transition-smooth"
                    onClick={() => window.open("https://www.instagram.com/carolineadvogada.sc/", "_blank")}
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="hover:bg-accent hover:text-white transition-smooth"
                    onClick={() => window.open("https://www.linkedin.com/in/caroline-missio/", "_blank")}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-medium gradient-card animate-slide-up">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-6">
                {t.sendMessage}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder={`${t.fullName} *`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder={`${t.email} *`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    placeholder={t.phoneField}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder={`${t.message} *`}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  {t.sendButton}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
