import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "She takes the time to diagnose before jumping to solutions. She stepped into a complex mix of vendors, country-specific requirements, and operational gaps, quickly brought structure to the chaos, and turned it into systems that are practical, scalable, and easy to run. For any people leader scaling internationally, building infrastructure, or trying to bring order to a fast-growing organization, she would be an exceptional partner to have on your team.",
    attribution: "Jennifer Rouse, Chief People Officer, Alumni Ventures",
    context: "Client: international expansion program",
    blob: "60% 40% 30% 70% / 60% 30% 70% 40%",
  },
  {
    quote:
      "There hasn't been a process she couldn't improve, a project she couldn't wrangle in, or a new system she couldn't figure out, and always in record time.",
    attribution: "Former Manager",
    context: "Worked with Elaine directly",
    blob: "40% 60% 70% 30% / 50% 60% 40% 50%",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="bg-card pb-24 md:pb-32 px-6 relative z-10"
    >
      <div className="container mx-auto">
        <div className="mb-16 max-w-xl">
          <span className="text-sm font-body font-bold text-accent uppercase tracking-[0.2em] block mb-4">
            What people say
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight leading-none text-foreground">
            In their words<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className={`relative bg-background p-10 md:p-12 ${
                i === 1 ? "md:mt-12" : ""
              }`}
              style={{ borderRadius: t.blob }}
            >
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                <Quote className="h-5 w-5" strokeWidth={2} />
              </div>
              <blockquote className="font-heading text-lg md:text-xl leading-relaxed text-foreground mb-8">
                "{t.quote}"
              </blockquote>
              <figcaption className="border-t border-border pt-5">
                <div className="font-heading font-bold text-foreground">
                  {t.attribution}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t.context}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
