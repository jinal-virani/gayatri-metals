import { Award, FileCheck, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const certCards = [
  {
    code: "ISO 9001:2015",
    title: "Quality Management System",
    description:
      "Internationally recognized standard that ensures consistent quality in manufacturing processes, demonstrating our commitment to superior product delivery and continuous improvement.",
    icon: Award,
  },
  {
    code: "ISO IATF 16949",
    title: "Automotive Quality Management",
    description:
      "The global automotive quality standard combining ISO 9001 with automotive-specific requirements, certifying our capability to supply precision components to the automotive industry.",
    icon: ShieldCheck,
  },
];

const standards = ["ASTM", "BS", "EN", "JIS", "DIN", "ISO"];

const documents = [
  "Mode Effects Analysis",
  "PPAP Documentation",
  "Inspection Reports",
  "Material Test Certificate",
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-card"
      data-ocid="certifications.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Quality Certifications &amp; Standards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Recognised internationally for our rigorous quality systems and
            adherence to global manufacturing standards.
          </p>
        </motion.div>

        {/* Cert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {certCards.map(({ code, title, description, icon: Icon }, index) => (
            <motion.div
              key={code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut" as const,
              }}
              className="relative bg-background border-2 border-primary/40 rounded-2xl p-8 overflow-hidden group hover:border-primary transition-colors duration-300"
              data-ocid={`certifications.card.${index + 1}`}
            >
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-300" />
              <Icon className="w-10 h-10 text-primary mb-5" />
              <div className="text-2xl font-display font-extrabold text-primary mb-1">
                {code}
              </div>
              <div className="text-lg font-semibold text-foreground mb-3">
                {title}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* International Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
          className="mb-12"
        >
          <h3 className="text-center text-lg font-semibold text-foreground mb-6">
            International Standards Compliance
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {standards.map((std, index) => (
              <motion.div
                key={std}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                  ease: "easeOut" as const,
                }}
                className="bg-background border border-primary/40 text-primary font-bold text-base px-6 py-2.5 rounded-full hover:bg-primary/10 transition-colors duration-200"
                data-ocid={`certifications.standard.${index + 1}`}
              >
                {std}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Documents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
          className="bg-background border border-border rounded-2xl p-8"
          data-ocid="certifications.documents"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-primary" />
            Quality Documentation
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {documents.map((doc, index) => (
              <motion.div
                key={doc}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut" as const,
                }}
                className="flex items-center gap-3 text-sm text-muted-foreground"
                data-ocid={`certifications.doc.${index + 1}`}
              >
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                {doc}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
