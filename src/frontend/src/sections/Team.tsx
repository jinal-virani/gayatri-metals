import { motion } from "motion/react";

interface TeamMember {
  initials: string;
  name: string;
  title: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    initials: "MK",
    name: "Mukesh Kataria",
    title: "CEO",
    bio: "With decades of experience in precision manufacturing, Mukesh leads Gayatri Metal Products with a vision for quality, innovation, and global excellence.",
  },
  {
    initials: "VK",
    name: "Vatsal Kataria",
    title: "Managing Director",
    bio: "Vatsal drives the strategic direction of the company, overseeing operations, client relationships, and business development across international markets.",
  },
  {
    initials: "PN",
    name: "Parmar Nikhil",
    title: "Head of Department",
    bio: "Nikhil leads production quality and ensures all manufacturing processes meet stringent ISO standards and customer specifications.",
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

export default function Team() {
  return (
    <section id="team" className="py-20 bg-background" data-ocid="team.section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Meet the People Behind the Brand
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Our Leadership Team
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
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="group relative flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border hover:border-accent transition-colors duration-300"
              data-ocid={`team.item.${index + 1}`}
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow:
                    "0 0 0 1px oklch(0.72 0.17 70 / 0.4), 0 8px 32px oklch(0.72 0.17 70 / 0.08)",
                }}
              />
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 text-2xl font-display font-bold text-accent border-2 border-accent/30 group-hover:border-accent transition-colors duration-300 bg-primary/20">
                {member.initials}
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <span className="inline-block text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                {member.title}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
