import { useState } from "react";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" className={className}>
    <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="none"
    stroke="currentColor"
    strokeWidth="16"
    strokeLinejoin="round"
    strokeLinecap="round"
    className={className}
  >
    <path d="M376 8h-72c-64 0-116 40-116 112v48h-52v88h52v248h116V256h68l12-88h-80v-42c0-14 14-26 28-26h44V8z" />
  </svg>
);


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
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (data: typeof formData) => {
    const next: { name?: string; email?: string; message?: string } = {};
    if (!data.name.trim()) next.name = "Informe seu nome.";
    else if (data.name.trim().length > 100) next.name = "O nome deve ter no máximo 100 caracteres.";

    const email = data.email.trim();
    if (!email) next.email = "Informe um e-mail válido.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 255)
      next.email = "Informe um e-mail válido.";

    if (!data.message.trim()) next.message = "Informe sua mensagem.";
    else if (data.message.trim().length > 1000)
      next.message = "A mensagem deve ter no máximo 1000 caracteres.";

    return next;
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      toast({
        title: t.requiredFields,
        description: t.fillRequired,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mbdejgzj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({ title: t.messageSent, description: t.messageSuccess });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({
        title: t.requiredFields,
        description: t.fillRequired,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="animate-slide-up space-y-6 flex flex-col h-full">
            <Card className="shadow-medium gradient-card flex-1 flex flex-col">
              <CardContent className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-primary mb-6">
                  {t.contactInfo}
                </h3>

                <div className="space-y-4">
                  <a
                    href={`https://wa.me/5548991580285?text=${encodeURIComponent(heroT.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <WhatsAppIcon className="h-7 w-7 -ml-1 -mt-0.5 text-accent shrink-0" />
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

            <Card className="shadow-medium gradient-card flex-1 flex flex-col">
              <CardContent className="p-6 flex-1 flex flex-col justify-start">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {t.socialMedia}
                </h3>
                <div className="flex gap-3">
                  <Button
                    size="icon"
                    variant="outline"
                    className="hover:bg-accent hover:text-white transition-smooth"
                    onClick={() => window.open("https://www.instagram.com/carolineadvogada.sc?igsh=NmMwYm9neTd4ZDVx", "_blank")}
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
                  <Button
                    size="icon"
                    variant="outline"
                    className="hover:bg-accent hover:text-white transition-smooth"
                    onClick={() => window.open("https://www.facebook.com/caroline.missio.advogada", "_blank")}
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-medium gradient-card animate-slide-up h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-6">
                {t.sendMessage}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <Input
                    placeholder={`${t.fullName} *`}
                    value={formData.name}
                    maxLength={100}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    onChange={(e) => updateField("name", e.target.value)}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1 text-sm text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder={`${t.email} *`}
                    value={formData.email}
                    maxLength={255}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1 text-sm text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    placeholder={t.phoneField}
                    value={formData.phone}
                    maxLength={30}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                </div>

                <div>
                  <Textarea
                    placeholder={`${t.message} *`}
                    rows={5}
                    value={formData.message}
                    maxLength={1000}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    onChange={(e) => updateField("message", e.target.value)}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="mt-1 text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>


                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90">
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
