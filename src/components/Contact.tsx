import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ganeshgoud0023@gmail.com",
      href: "mailto:ganeshgoud0023@gmail.com",
      description: "Get in touch for collaborations or opportunities"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone", 
      value: "+91 7995686260",
      href: "tel:+917995686260",
      description: "Available for professional discussions"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Hyderabad, India", 
      href: null,
      description: "Open to remote and hybrid opportunities"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.com/in/ganesh-kumar",
      description: "Professional network and updates",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub", 
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/ganesh-kumar",
      description: "Code repositories and open source contributions",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      name: "Hugging Face",
      icon: <ExternalLink className="w-6 h-6" />,
      url: "https://huggingface.co/ganesh-kumar", 
      description: "ML models and AI research contributions",
      color: "hover:text-yellow-600"
    }
  ];

  return (
    <section className="py-16 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center mb-12">Get In Touch</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="p-4 hover-lift hover-glow animate-slide-in-left"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{info.label}</h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-primary hover:text-primary/80 font-medium hover:underline transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-primary font-medium">{info.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Professional Links */}
            <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Professional Links</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <Card 
                    key={index}
                    className="p-4 hover-lift hover-glow animate-slide-in-left"
                    style={{ animationDelay: `${(index + 3) * 200}ms` }}
                  >
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className={`p-3 bg-secondary/50 rounded-lg text-muted-foreground transition-colors ${link.color}`}>
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                        <ExternalLink className="w-4 h-4 text-muted-foreground mt-2 group-hover:text-primary transition-colors" />
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Card className="p-8 h-full hover-glow">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-foreground">Let's Collaborate</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about advancing Responsible AI and building enterprise-grade solutions that make a real impact. 
                  Whether you're looking to implement AI governance frameworks, develop cutting-edge generative AI applications, 
                  or need expertise in LLM evaluation and red teaming, I'd love to discuss how we can work together.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Areas of Expertise:</h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Responsible AI & LLM Red Teaming</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Enterprise Generative AI Solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">MLOps & AI Governance Frameworks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Multimodal AI & RAG Systems</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="mailto:ganeshgoud0023@gmail.com?subject=Collaboration Opportunity"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover-scale"
                  >
                    <Mail className="w-5 h-5" />
                    Start a Conversation
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;