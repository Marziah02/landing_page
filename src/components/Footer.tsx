import {
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  const links = [
    { icon: <FaXTwitter />, url: "https://twitter.com" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
    { icon: <FaYoutube />, url: "https://youtube.com" },
    { icon: <FaWhatsapp />, url: "https://wa.me/880" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
  ];
  return (
    <footer className="max-w-[2000px] mx-auto bg-background py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-2">
          <div>
            <h3 className="text-2xl font-bold mb-6">10x Galaxy Ltd.</h3>
          </div>
          <div className="md:flex justify-between gap-12">
            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://perfectcode.ai/dashboard"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    PerfectCode.ai
                  </a>
                </li>
                <li>
                  <a
                    href="https://palegreen-badger-420606.hostingersite.com/coming-soon/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    StoryMaster.ai
                  </a>
                </li>
                <li>
                  <a
                    href="https://palegreen-badger-420606.hostingersite.com/coming-soon/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Photo360.ai
                  </a>
                </li>
                <li>
                  <a
                    href="https://palegreen-badger-420606.hostingersite.com/coming-soon/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    MeetingPilot.ai
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end mb-12">
          <div className="flex flex-col items-start gap-2 text-black">
            <p className="text-sm font-semibold">Find us on</p>
            <div className="flex gap-1">
              {links.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-900 hover:bg-neutral-800 w-10 h-10 flex items-center justify-center rounded-md transition-all border border-neutral-700 hover:border-neutral-500 text-2xl text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 10x. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
        {/* Large GALAXY Text */}
        <div className="text-center bg-white py-10">
          <section className="text-center">
            <h1
              className="font-sans text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-none tracking-[-0.04em] font-bold text-transparent select-none bg-white"
              // Responsive font-size: scales nicely across viewports
              style={{
                WebkitTextStroke:
                  "4px gradient(90deg, hsl(var(--stellar-glow)), hsl(var(--primary)))",
                textStroke:
                  "4px gradient(90deg, hsl(var(--stellar-glow)), hsl(var(--primary)))",
                WebkitTextFillColor: "black",
                // Use clamp for smooth scaling (min 4rem, preferred 16vw, max 14rem)
              }}
            >
              10x GALAXY
            </h1>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
