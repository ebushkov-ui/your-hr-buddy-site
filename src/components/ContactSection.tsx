import { useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          let cal = C.Cal;
          let ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function (...apiArgs: any[]) {
              p(api, apiArgs);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // @ts-ignore
    window.Cal("init", "elaine-adamson", { origin: "https://app.cal.com" });
    // @ts-ignore
    window.Cal.ns["elaine-adamson"]("inline", {
      elementOrSelector: "#cal-inline-embed",
      calLink: "elaine-adamson",
      layout: "month_view",
    });
    // @ts-ignore
    window.Cal.ns["elaine-adamson"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest">Contact</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-6">
              Tell me what
              <br />
              is broken<span className="text-accent">.</span>
            </h2>
            <p className="text-lg opacity-70 mb-10 leading-relaxed max-w-md">
              If something is cracking on your people side and you do not know where to start, that is the conversation. Book a call below or send me a note.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "elaine@elaineadamson.com" },
                { icon: Phone, text: "(650) 520-0339" },
                { icon: MapPin, text: "Bay Area, CA" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 opacity-70">
                  <item.icon className="h-5 w-5 text-accent" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-lg p-4 md:p-6">
            <h3 className="font-heading text-2xl font-bold mb-4">Book a call</h3>
            <div
              id="cal-inline-embed"
              className="w-full overflow-hidden rounded-md"
              style={{ minHeight: "600px" }}
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Or email me at{" "}
              <a
                href="mailto:elaine@elaineadamson.com"
                className="text-accent hover:underline font-medium"
              >
                elaine@elaineadamson.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
