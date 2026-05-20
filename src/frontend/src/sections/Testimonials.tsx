import { Star } from "lucide-react";
import { motion } from "motion/react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Gayatri Metal Products consistently delivers precision components that meet our exact specifications. Their quality control is exceptional.",
    name: "Rajesh Shah",
    role: "Procurement Manager",
    company: "Atlas Industries",
    location: "Mumbai",
  },
  {
    quote:
      "We have been sourcing brass components from Gayatri for over 8 years. Their ISO certification and adherence to international standards gives us complete confidence.",
    name: "Priya Mehta",
    role: "Director",
    company: "TechCom Electricals",
    location: "Pune",
  },
  {
    quote:
      "Outstanding turnaround times and impeccable quality on custom-made components. Highly recommended for any precision engineering needs.",
    name: "Suresh Patel",
    role: "CEO",
    company: "Precision Auto Parts",
    location: "Ahmedabad",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-muted/30"
      data-ocid="testimonials.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Client Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-accent" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="flex flex-col justify-between p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors duration-300"
              data-ocid={`testimonials.item.${index + 1}`}
            >
              <div>
                <span
                  className="block text-6xl font-serif leading-none mb-4 select-none text-accent"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <div className="flex gap-1 mb-5" aria-label="5 stars">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={`star-${n}`}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground/85 italic text-sm leading-relaxed mb-6">
                  {t.quote}
                </p>
              </div>
              <div className="border-t border-border pt-5">
                <p className="text-foreground font-semibold font-display">
                  {t.name}
                </p>
                <p className="text-accent text-xs font-medium mt-0.5">
                  {t.role}, {t.company}
                </p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
