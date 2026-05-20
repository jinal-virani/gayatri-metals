import { CheckCircle, Eye, Leaf, Shield, Target } from "lucide-react";
import { motion } from "motion/react";

const policies = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "We intend to provide our customers with the best services from product development to delivery in engineering component contract manufacturing using world class technology with a smart system oriented work approach.",
  },
  {
    icon: Target,
    title: "Mission",
    description:
      "To produce variety of engineering components using world class technology and get 100% customer satisfaction in every area of business from product development to after sales service.",
  },
  {
    icon: CheckCircle,
    title: "Quality Policy",
    description:
      "An ISO 9001:2015 certification gives an assurance to our customer that our process will meet rigid international manufacturing and delivery standards.",
  },
  {
    icon: Shield,
    title: "Health & Safety",
    description:
      "At Gayatri Metal Products, we believe our team is our biggest asset. We have a stringent policy ensuring their health and safety, creating a hazard free working environment.",
  },
  {
    icon: Leaf,
    title: "Environment",
    description:
      "At Gayatri Metal Products, we believe firmly in giving the environment first priority. All our plans, policies and processes are scrutinized for their environmental impact.",
  },
];

export default function Policy() {
  return (
    <section
      id="policy"
      className="py-24 bg-background"
      data-ocid="policy.section"
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
            Company Policy
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Guiding principles that define how we operate, grow, and serve our
            customers and communities.
          </p>
        </motion.div>

        {/* Policy Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="policy.list"
        >
          {policies.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: "easeOut" as const,
              }}
              className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-4 hover:border-primary/50 transition-colors duration-300 group"
              data-ocid={`policy.item.${index + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
