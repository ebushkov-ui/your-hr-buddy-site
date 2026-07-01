import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiagnosticForm from "@/components/diagnostic/DiagnosticForm";

const Diagnostic = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-accent/10 blur-3xl -z-10"
          style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
        />
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10"
          >
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-heading font-bold text-accent uppercase tracking-[0.2em] block mb-4">
              Diagnostic
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-6">
              The HR Operations
              <br />
              health check<span className="text-accent">.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Diagnosing what's actually broken is the first thing I do with every client — so it's the first thing I'll do with you. Answer seven questions and get an honest Green / Yellow / Red read on your HR foundation.
            </p>
          </div>
          <div className="max-w-3xl">
            <DiagnosticForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Diagnostic;
