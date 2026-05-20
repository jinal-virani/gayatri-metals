import {
  BoltIcon,
  Cable,
  Car,
  CircleDot,
  Droplets,
  Flame,
  Hammer,
  Layers,
  LayoutGrid,
  Nut,
  Pipette,
  ScanLine,
  Settings,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "brass-fasteners",
    name: "Brass Fasteners",
    icon: Nut,
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop",
    description:
      "High-precision brass bolts, screws, and studs engineered for corrosion resistance and dimensional accuracy across industrial applications.",
  },
  {
    id: "sanitary-fittings",
    name: "Sanitary Fittings",
    icon: Droplets,
    imageUrl:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&fit=crop",
    description:
      "Premium brass fittings for plumbing and sanitary systems — valves, couplings, elbows, and connectors meeting international hygiene standards.",
  },
  {
    id: "pneumatic-parts-flare-fittings",
    name: "Pneumatic Parts & Flare Fittings",
    icon: Wind,
    imageUrl:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80&fit=crop",
    description:
      "Precision-turned pneumatic connectors and flare fittings for compressed air systems, hydraulics, and fluid control assemblies.",
  },
  {
    id: "custom-made-components",
    name: "Custom Made Components",
    icon: Settings,
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80&fit=crop",
    description:
      "Fully bespoke brass and copper components manufactured to customer drawings and specifications with tight tolerances.",
  },
  {
    id: "brass-cable-glands",
    name: "Brass Cable Glands",
    icon: Cable,
    imageUrl:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80&fit=crop",
    description:
      "Nickel-plated and bare brass cable glands for electrical installations — metric, PG, and NPT thread forms available.",
  },
  {
    id: "brass-nuts",
    name: "Brass Nuts",
    icon: Wrench,
    imageUrl:
      "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=800&q=80&fit=crop",
    description:
      "Hex, square, and speciality brass nuts machined to DIN/ISO standards for use in mechanical and electrical assemblies.",
  },
  {
    id: "cng-lpg-accessories",
    name: "CNG LPG Accessories",
    icon: Flame,
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80&fit=crop",
    description:
      "Safety-critical brass valves, nozzles, and connectors for CNG and LPG fuel systems meeting stringent regulatory requirements.",
  },
  {
    id: "earthing-lightning-protection",
    name: "Earthing & Lightning Protection",
    icon: Zap,
    imageUrl:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80&fit=crop",
    description:
      "Brass earthing rods, clamps, terminal lugs, and lightning protection hardware for electrical safety installations.",
  },
  {
    id: "forged-machined-components",
    name: "Forged Machined Components",
    icon: Hammer,
    imageUrl:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80&fit=crop",
    description:
      "Hot-forged brass blanks precision-machined to complex geometries — offering superior grain structure and mechanical strength.",
  },
  {
    id: "copper-machined-components",
    name: "Copper Machined Components",
    icon: CircleDot,
    imageUrl:
      "https://images.unsplash.com/photo-1533603208986-51f7b83e3f9a?w=800&q=80&fit=crop",
    description:
      "High-conductivity copper parts and contacts machined for electrical, thermal, and plumbing applications with excellent finish.",
  },
  {
    id: "brass-inserts",
    name: "Brass Inserts",
    icon: Layers,
    imageUrl:
      "https://images.unsplash.com/photo-1609902726285-00668009f004?w=800&q=80&fit=crop",
    description:
      "Knurled and smooth brass inserts for plastic moulding — press-fit, heat-set, and ultrasonic installation types available.",
  },
  {
    id: "sheet-metal-stamped-parts",
    name: "Sheet Metal Stamped Parts",
    icon: LayoutGrid,
    imageUrl:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80&fit=crop",
    description:
      "Precision-stamped brass and copper sheet components for electronics, switchgear, connectors, and enclosure hardware.",
  },
  {
    id: "electrical-components",
    name: "Electrical Components",
    icon: BoltIcon,
    imageUrl:
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&q=80&fit=crop",
    description:
      "Terminal blocks, bus bars, switch contacts, and electrical connectors manufactured in brass and copper to IEC standards.",
  },
  {
    id: "automotive-components",
    name: "Automotive Components",
    icon: Car,
    imageUrl:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80&fit=crop",
    description:
      "Fuel system fittings, brake line connectors, and precision engine components in brass for OEM and aftermarket use.",
  },
  {
    id: "cnc-machined-components",
    name: "CNC Machined Components",
    icon: ScanLine,
    imageUrl:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80&fit=crop",
    description:
      "Complex multi-axis CNC turning and milling of brass and copper to ±0.01 mm tolerances for high-volume production.",
  },
  {
    id: "brass-copper-rods-sections-profiles-tubes",
    name: "Brass & Copper Rods, Sections, Profiles & Tubes",
    icon: Pipette,
    imageUrl:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80&fit=crop",
    description:
      "Semi-finished brass and copper rods, drawn sections, extruded profiles, and precision tubes as raw material for machining.",
  },
];

type Product = {
  id: string;
  name: string;
  icon: React.ElementType;
  imageUrl: string;
  description: string;
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;
  return (
    <Link
      to={`/product/${product.id}`}
      className="cursor-pointer block"
      data-ocid={`products.card.${index + 1}`}
    >
      <motion.div
        className="group bg-card border border-border rounded-xl overflow-hidden flex flex-col h-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
        whileHover={{ y: -4 }}
      >
        {/* Thumbnail image */}
        <div className="relative h-40 w-full overflow-hidden bg-muted shrink-0">
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {/* Amber gradient tint over image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.04_260/0.6)] to-transparent" />
        </div>

        {/* Card body */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-200">
              <Icon className="w-4 h-4 text-accent" />
            </div>
            <h3 className="text-sm font-bold text-foreground font-display leading-snug">
              {product.name}
            </h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="products"
      ref={ref}
      className="py-20 bg-muted/30"
      data-ocid="products.section"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest font-body">
            What We Make
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-display mt-2">
            Our <span className="text-accent">Products</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-2xl mx-auto">
            Precision Components for Every Industry
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          data-ocid="products.list"
        >
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-block bg-card border border-accent/30 rounded-2xl px-8 py-5 max-w-2xl">
            <p className="text-foreground/90 text-sm md:text-base">
              <span className="text-accent font-semibold">
                Custom manufacturing available —{" "}
              </span>
              We can manufacture any custom component in Brass. Contact us with
              your specifications and our engineering team will respond within
              24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
