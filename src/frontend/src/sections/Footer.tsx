import { ExternalLink, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const QUICK_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Equipment", href: "#equipment" },
  { label: "Certifications", href: "#certifications" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer
      className="bg-card border-t border-border"
      data-ocid="footer.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Left — Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-2xl font-black tracking-[0.18em] text-accent font-display block">
                GAYATRI
              </span>
              <span className="text-xs tracking-[0.22em] text-muted-foreground font-body uppercase">
                Metal Products
              </span>
            </div>
            <p className="text-sm italic text-accent/80 font-medium">
              "Where Precision Meets Passion"
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Manufacturers of Brass Precision Turned Components and all types
              of Brass &amp; Copper products since 1985. ISO 9001:2015
              certified, serving clients across India and international markets.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-accent border border-accent/30 rounded px-2.5 py-1">
                Est. 1985
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted-foreground border border-border rounded px-2.5 py-1">
                Jamnagar, Gujarat, India
              </span>
            </div>
          </div>

          {/* Middle — Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-foreground mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group"
                    data-ocid={`footer.${link.label.toLowerCase()}_link`}
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-200 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact Info */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-foreground mb-5">
              Contact Info
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="text-accent flex-shrink-0 mt-0.5"
                />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Plot No. 4025, Phase III, G.I.D.C,
                  <br />
                  Dared, Jamnagar (Gujarat) — 361004,
                  <br />
                  India
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+919898908290"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  data-ocid="footer.phone_primary_link"
                >
                  <Phone size={14} className="text-accent flex-shrink-0" />
                  +91 98989-08290
                </a>
                <a
                  href="tel:+918849391584"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  data-ocid="footer.phone_alt_link"
                >
                  <Phone size={14} className="text-accent flex-shrink-0" />
                  +91 8849391584
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:info@gayatrimetals.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  data-ocid="footer.email_info_link"
                >
                  <Mail size={14} className="text-accent flex-shrink-0" />
                  info@gayatrimetals.com
                </a>
                <a
                  href="mailto:sales@gayatrimetals.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  data-ocid="footer.email_sales_link"
                >
                  <Mail size={14} className="text-accent flex-shrink-0" />
                  sales@gayatrimetals.com
                </a>
              </div>

              {/* Follow Us */}
              <div className="mt-2">
                <h5 className="text-xs font-bold tracking-[0.15em] uppercase text-foreground mb-3">
                  Follow Us
                </h5>
                <a
                  href="https://www.linkedin.com/company/gayatrimp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  data-ocid="footer.linkedin_link"
                >
                  <Linkedin size={16} className="text-accent" />
                  linkedin.com/company/gayatrimp
                  <ExternalLink
                    size={11}
                    className="text-muted-foreground/50"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {year} Gayatri Metal Products. All rights reserved.</span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="inline-flex items-center gap-1.5 border border-accent/30 text-accent rounded px-2 py-0.5 font-semibold tracking-wide">
              ISO 9001:2015 Certified
            </span>
          </div>
          <span>
            Built with love using{" "}
            <a
              href={utm}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
              data-ocid="footer.caffeine_link"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
