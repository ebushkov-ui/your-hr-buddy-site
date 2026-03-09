const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading text-lg font-bold">
          Elaine Adamson<span className="text-accent">.</span>
        </span>
        <span className="text-sm opacity-50">
          © {new Date().getFullYear()} Elaine Adamson Consulting. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
