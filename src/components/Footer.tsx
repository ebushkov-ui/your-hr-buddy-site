import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Elaine Adamson" className="h-8 brightness-0 invert" />
        <span className="text-sm opacity-50">
          © {new Date().getFullYear()} Elaine Adamson Consulting. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
