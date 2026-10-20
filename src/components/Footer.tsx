const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-baseline gap-2" aria-label="Elaine Adamson Consulting">
          <span className="font-body text-sm font-light tracking-[0.2em] uppercase">
            Elaine Adamson
          </span>
          <span className="font-heading text-sm font-light italic opacity-60">
            consulting
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://www.linkedin.com/in/elainebushkov"
            target="_blank"
            rel="noopener"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            LinkedIn
          </a>
          <span className="opacity-50">
            © {new Date().getFullYear()} Elaine Adamson Consulting. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
