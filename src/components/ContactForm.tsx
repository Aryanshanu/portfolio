
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Loader2, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Direct email configuration 
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        to_email: "ganeshgoud0023@gmail.com"
      };

      // Using EmailJS public key approach - this doesn't require hiding API keys
      emailjs.init("public_key"); // Replace with your actual EmailJS public key

      const response = await emailjs.send(
        "gmail", // Replace with your EmailJS service ID after setting up Gmail service
        "template_contact", // Replace with your template ID
        templateParams
      );

      if (response.status === 200) {
        toast({
          title: "Message sent successfully! 🎉",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default"
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setError("Unable to send your message. Please try again later or email me directly.");
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-background dark:bg-background" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading flex items-center justify-center gap-2 text-foreground dark:text-foreground mb-8">
          <Mail className="h-6 w-6" />
          Contact Me
        </h2>
        
        {error && (
          <Alert className="mb-6 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertDescription className="text-red-600 dark:text-red-400 ml-2">
              {error}
            </AlertDescription>
          </Alert>
        )}
        
        <Alert className="mb-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <AlertDescription>
            <p className="text-sm">
              To configure this contact form with EmailJS:
            </p>
            <ol className="list-decimal ml-5 text-sm mt-2">
              <li>Create an account at <a href="https://www.emailjs.com/" className="text-blue-600 dark:text-blue-400 underline" target="_blank" rel="noopener noreferrer">EmailJS</a></li>
              <li>Add your email service (Gmail, Outlook, etc.)</li>
              <li>Create an email template</li>
              <li>Replace the placeholders in this code with your Public Key, Service ID, and Template ID</li>
            </ol>
            <p className="text-sm mt-2">
              Or contact me directly at: <a href="mailto:ganeshgoud0023@gmail.com" className="text-blue-600 dark:text-blue-400 underline">ganeshgoud0023@gmail.com</a>
            </p>
          </AlertDescription>
        </Alert>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-background dark:bg-background border-input dark:border-input"
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-background dark:bg-background border-input dark:border-input"
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="min-h-[150px] bg-background dark:bg-background border-input dark:border-input"
              disabled={isSubmitting}
            />
          </div>
          <div className="flex justify-between items-center flex-wrap gap-4">
            <Button 
              type="submit" 
              className="w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
            <a 
              href="mailto:ganeshgoud0023@gmail.com" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Or email me directly: ganeshgoud0023@gmail.com
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
