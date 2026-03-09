import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Contact</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-6">
              Let's talk about
              <br />
              your people<span className="text-accent">.</span>
            </h2>
            <p className="text-lg opacity-70 mb-10 leading-relaxed max-w-md">
              Whether you need a one-off compliance review or an ongoing HR partner, we're here to help.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "hello@elaineadamson.com" },
                { icon: Phone, text: "+44 (0) 7700 900 000" },
                { icon: MapPin, text: "London, United Kingdom" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 opacity-70">
                  <item.icon className="h-5 w-5 text-accent" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-lg p-8 md:p-10">
            <h3 className="font-heading text-2xl font-bold mb-6">Book a Free Consultation</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Full Name</label>
                <input
                  type="text"
                  className="w-full h-11 px-4 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  className="w-full h-11 px-4 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  placeholder="Tell us about your HR needs..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base h-12"
              >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
