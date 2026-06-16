import { useEffect } from "react";

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
    <section id="contact" className="bg-accent py-24 md:py-32 px-6">
      <div className="container mx-auto">
        <div
          className="bg-card text-card-foreground p-10 md:p-20 flex flex-col lg:flex-row gap-16 shadow-2xl relative overflow-hidden"
          style={{ borderRadius: "60px" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-background rounded-full -mr-32 -mt-32 opacity-50" />

          <div className="lg:w-1/2 relative">
            <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
              Tell me what
              <br />
              is broken<span className="text-accent">.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-md leading-relaxed">
              If something is cracking on your people side and you do not know where to start, that is the conversation. Book a call to your right.
            </p>
            <div className="space-y-3">
              <p className="text-lg font-bold">elaine@elaineadamson.com</p>
              <p className="text-muted-foreground">(650) 520-0339</p>
              <p className="text-muted-foreground">Bay Area, CA</p>
            </div>
          </div>

          <div
            className="lg:w-1/2 bg-background p-6 md:p-8 relative"
            style={{ borderRadius: "32px" }}
          >
            <h3 className="font-heading text-2xl font-bold mb-6">Book a call</h3>
            <div
              id="cal-inline-embed"
              className="w-full overflow-hidden rounded-2xl"
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
