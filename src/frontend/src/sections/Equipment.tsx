import { Cog } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const tabs = [
  "Plant Equipment",
  "Machine Equipment",
  "Quality Equipment",
] as const;
type Tab = (typeof tabs)[number];

const equipmentData: Record<Tab, string[]> = {
  "Plant Equipment": [
    "Electric Furnace",
    "Billet Heater",
    "Extrusion Press",
    "Lathe Machine",
    "Draw Machine",
    "Drill Machine",
    "Pointing Machine",
    "Straightening Machine",
    "Billet Cutting Machine",
    "Rod Cutting Machine",
    "Grinding Machine",
    "Welding Machine",
  ],
  "Machine Equipment": [
    "CNC DX 300",
    "CNC DX 250",
    "CNC 135",
    "CNC LINEAR",
    "VMC CVM 800",
    "Sujata DCS Sliding Head",
    "Traub Machine",
    "SPM Machine",
    "Automatic Threading Machine",
    "Automatic Tapping Machine",
    "Automatic Hole Cutting Machine",
    "Automatic Slot Cutting Machine",
  ],
  "Quality Equipment": [
    "VMM Optical Measuring System",
    "Profile Projector",
    "Optical Sorting Machine",
    "Spectromax Metal Tester",
    "Digital Vernier",
    "Digital Height Gauge",
    "Micrometer",
    "Thread Ring Gauges",
    "Thread Plug Gauges",
    "Pin Gauges",
    "WCP Gauges",
  ],
};

export default function Equipment() {
  const [activeTab, setActiveTab] = useState<Tab>("Plant Equipment");
  const items = equipmentData[activeTab];

  return (
    <section
      id="equipment"
      className="py-24 bg-background"
      data-ocid="equipment.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Equipment &amp; Manufacturing Capability
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            State-of-the-art production infrastructure enabling precision
            manufacturing at industrial scale across extrusion, machining, and
            quality assurance.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" as const }}
          className="flex flex-wrap justify-center gap-3 mb-10"
          data-ocid="equipment.tab"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              data-ocid={`equipment.tab.${tab.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-card text-muted-foreground border-border hover:border-primary/60 hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Equipment Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          data-ocid="equipment.list"
        >
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut" as const,
              }}
              className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 hover:border-primary/50 transition-colors duration-200"
              data-ocid={`equipment.item.${index + 1}`}
            >
              <Cog className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Capacity Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
          className="mt-10 text-center"
        >
          <p className="inline-block bg-primary/10 border border-primary/30 text-primary font-semibold text-sm px-6 py-3 rounded-full">
            Production capacity: 5,000 MT per annum | Capable of producing lakhs
            of pieces per day
          </p>
        </motion.div>
      </div>
    </section>
  );
}
