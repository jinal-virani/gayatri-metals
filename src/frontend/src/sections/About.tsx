import { Award, Factory, Package, Users } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function useCounter(target: number, duration: number, isActive: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    setCount(0);
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isActive, target, duration]);
  return count;
}

const STATS = [
  { icon: Factory, value: 40, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { icon: Package, value: 10000, suffix: "+", label: "Orders Done" },
  { icon: Award, value: 8, suffix: "+", label: "Team Members" },
] as const;

const EQUIPMENT_TABS = [
  {
    id: "plant",
    label: "Plant Equipment",
    items: [
      "Continuous Casting Plant (5000 MT/yr)",
      "Extrusion Press (1600T)",
      "Drawing Machine – Rod (Multi-Wire)",
      "Annealing Furnace",
      "Wire Drawing Machine",
      "Hydraulic Press (400T)",
      "Overhead Crane (5T)",
      "Compressors & Air Dryers",
    ],
  },
  {
    id: "machine",
    label: "Machine Equipment",
    items: [
      "CNC Turning Centers (50+)",
      "Swiss-Type Auto Lathes (100+)",
      "Multi-Spindle Automatic Lathes",
      "CNC Machining Centers",
      "Hydraulic Presses",
      "Forging Hammers",
      "Cold Heading Machines",
      "Drilling & Tapping Machines",
    ],
  },
  {
    id: "quality",
    label: "Quality Equipment",
    items: [
      "CMM (Coordinate Measuring Machine)",
      "Optical Profile Projector",
      "Surface Roughness Tester",
      "Spectro Chemical Analyzer",
      "Hardness Tester (Rockwell & Vickers)",
      "Thread & Gauge Instruments",
      "Vision Measuring System",
      "Salt Spray Testing Chamber",
    ],
  },
];

type Stat = {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
};

function StatCard({
  stat,
  index,
  isActive,
}: { stat: Stat; index: number; isActive: boolean }) {
  const count = useCounter(stat.value, 1800, isActive);
  const Icon = stat.icon;
  return (
    <motion.div
      className="bg-card border border-border rounded-xl p-6 flex flex-col items-center gap-2 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      data-ocid={`about.stat.${index + 1}`}
    >
      <Icon className="w-6 h-6 text-accent mb-1" />
      <span className="text-4xl font-bold text-accent font-display">
        {count}
        {stat.suffix}
      </span>
      <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
        {stat.label}
      </span>
    </motion.div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState("plant");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const activeEquipment = EQUIPMENT_TABS.find((t) => t.id === activeTab)!;

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-background"
      data-ocid="about.section"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest font-body">
            Gayatri Metal Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-display mt-2">
            40+ Years of{" "}
            <span className="text-accent">Manufacturing Excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Text content — spans 2 columns on lg */}
          <motion.div
            className="space-y-5 lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 space-y-5">
              <p className="text-muted-foreground leading-relaxed text-base">
                Founded in Jamnagar, India in 1985, Gayatri Metal Products is
                one of the leading precision brass and copper components
                manufacturers in India. We offer a complete design, engineering
                and manufacturing service — from concept to volume production.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                With fully automated production processes, we produce lakhs of
                pieces per day. ISO&nbsp;9001:2015 certified, we export 85% of
                our production to international markets.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                A subsidiary of Gayatri Group of Industries, we specialize in
                brass precision turned components, copper rods, tubes, and wires
                with an installed capacity of 5000&nbsp;MT per annum.
              </p>
            </div>

            {/* Stats grid below text on all sizes */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.25 }}
            >
              {STATS.map((stat, i) => (
                <StatCard
                  key={stat.label}
                  stat={stat}
                  index={i}
                  isActive={isInView}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Factory image — right column on lg, below text on mobile */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80&fit=crop"
                alt="Brass and copper manufacturing at Gayatri Metal Products"
                className="w-full h-72 lg:h-[420px] object-cover object-center"
                loading="lazy"
              />
              {/* Subtle amber tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.04_260/0.55)] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block bg-accent/90 text-accent-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-md">
                  Est. 1985 · Jamnagar, Gujarat
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground font-display mb-6">
              Our Capabilities
            </h3>
            <div className="flex flex-wrap gap-2 mb-6" role="tablist">
              {EQUIPMENT_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  data-ocid={`about.equipment.tab.${tab.id}`}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent/20 hover:text-accent"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <motion.ul
              key={activeTab}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeEquipment.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 bg-secondary/60 rounded-lg px-4 py-3 text-sm text-foreground/90"
                >
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
