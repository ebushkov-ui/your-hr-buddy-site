const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-baseline gap-2" aria-label="Elaine Adamson Consulting">
          <span className="font-heading text-sm font-light tracking-[0.2em] uppercase">
            Elaine Adamson
          </span>
          <span className="font-heading text-sm font-light italic opacity-60">
            consulting
          </span>
        </div>
        <span className="text-sm opacity-50">
          © {new Date().getFullYear()} Elaine Adamson Consulting. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
