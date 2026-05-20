import type {
  EquipmentItem,
  NavItem,
  PolicyItem,
  Product,
  StatItem,
  TeamMember,
  Testimonial,
} from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "brass-fasteners",
    name: "Brass Fasteners",
    description:
      "High-precision brass bolts, screws, studs, and anchors manufactured to international standards for industrial and construction applications.",
    iconName: "Wrench",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop",
    fullDescription:
      "Gayatri Metal Products manufactures a comprehensive range of brass fasteners including hex bolts, machine screws, threaded studs, anchor bolts, and set screws. Each fastener is produced from high-grade brass alloy using precision CNC turning and thread-rolling processes to ensure dimensional accuracy and consistent thread quality. Our fasteners serve construction, industrial machinery, plumbing, and electrical panel assembly sectors globally.",
    specifications: [
      "Material: Brass CW617N / CW614N",
      "Thread Standards: BSP, NPT, UNC, Metric (M3–M36)",
      "Tensile Strength: 400–500 MPa",
      "Surface Finish: Natural, Nickel-plated, Chrome-plated",
      'Size Range: M3 to M36, 1/8" to 2" BSP',
      "Tolerance Class: 6g / 6H per ISO 965",
      "Certifications: RoHS compliant, ISO 9001:2015",
    ],
    materials: ["Brass CW617N", "Brass CW614N", "Free-cutting Brass"],
  },
  {
    id: "sanitary-fittings",
    name: "Sanitary Fittings",
    description:
      "Premium brass sanitary fittings including valves, connectors, and adapters engineered for plumbing and sanitation systems.",
    iconName: "Droplets",
    imageUrl:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&fit=crop",
    fullDescription:
      "Our brass sanitary fittings range covers elbows, tees, reducers, unions, couplings, and adapters designed to meet international plumbing standards. Manufactured from lead-free brass alloys, these fittings are suitable for potable water systems, hot and cold water lines, and sanitation infrastructure. Every fitting undergoes pressure testing and dimensional inspection before dispatch to ensure leak-free performance in service.",
    specifications: [
      "Material: Lead-free Brass (DZR) CW602N",
      "Thread Standards: BSP (BSPP / BSPT), NPT",
      "Pressure Rating: Up to 20 bar at 20 °C",
      "Temperature Range: -20 °C to +120 °C",
      'Size Range: 1/8" to 4" BSP',
      "Sealing: PTFE-compatible machined faces",
      "Standard: EN 1254-1, WRAS approved variants available",
    ],
    materials: ["Lead-free Brass CW602N", "DZR Brass", "PTFE seals"],
  },
  {
    id: "pneumatic-parts",
    name: "Pneumatic Parts & Flare Fittings",
    description:
      "Precision-machined pneumatic components and flare fittings designed for high-pressure fluid and air systems.",
    iconName: "Wind",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&fit=crop",
    fullDescription:
      "Gayatri supplies a full range of brass pneumatic fittings including push-in connectors, compression fittings, flare fittings, and manifold blocks for compressed air and fluid power systems. Our flare fittings are manufactured to SAE J513 and DIN 74234 standards and are widely used in automotive hydraulic lines, HVAC systems, and industrial pneumatics. Tight machining tolerances ensure reliable sealing even under cyclic pressure loads.",
    specifications: [
      "Material: Brass CW617N",
      "Pressure Rating: Up to 150 bar (flare), 16 bar (push-in)",
      "Flare Angle: 37° SAE / 45° JIC",
      "Thread Standards: UNF, Metric, BSP",
      "Tube OD Range: 4 mm to 25 mm",
      "Temperature Range: -40 °C to +150 °C",
      "Standard: SAE J513, DIN 74234",
    ],
    materials: ["Brass CW617N", "Brass CW614N", "PTFE/NBR seals"],
  },
  {
    id: "custom-components",
    name: "Custom Made Components",
    description:
      "Bespoke brass and copper components manufactured to client specifications with tight tolerances and quality assurance.",
    iconName: "Settings",
    imageUrl:
      "https://images.unsplash.com/photo-1565793979996-27f1e553ef28?w=800&q=80&fit=crop",
    fullDescription:
      "We specialise in manufacturing custom brass and copper components from client-supplied drawings, CAD files, or samples. Our engineering team evaluates designs for manufacturability and recommends optimisations to reduce cost without compromising function. From single prototypes to high-volume production runs, we maintain strict first-article inspection and ongoing SPC monitoring to guarantee every part meets its specification throughout the production life cycle.",
    specifications: [
      "Dimensional Tolerance: ±0.01 mm (CNC turned)",
      "Surface Roughness: Ra 0.8–3.2 µm",
      "Min Batch Size: 100 pieces",
      "Lead Time: 2–4 weeks (standard)",
      "Drawing Formats Accepted: DXF, DWG, STEP, IGES, PDF",
      "Inspection: FAI per AS9102 on request",
      "Certifications: Material test certificates supplied",
    ],
    materials: [
      "Brass CW617N / CW614N",
      "Copper C101 / C110",
      "Stainless Steel 304/316 inserts",
    ],
  },
  {
    id: "cable-glands",
    name: "Brass Cable Glands",
    description:
      "Robust brass cable glands providing secure cable entry and strain relief for electrical enclosures and machinery.",
    iconName: "Cable",
    imageUrl:
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&q=80&fit=crop",
    fullDescription:
      "Our brass cable glands are designed to provide secure and weatherproof cable entry into electrical enclosures, control panels, motors, and junction boxes. Available in metric, PG, and NPT thread types, each gland is machined from solid brass bar and fitted with EPDM sealing rings and nylon locknuts. We supply standard and armoured cable gland variants, with nickel-plated and stainless-steel options for corrosive environments.",
    specifications: [
      "Material: Brass CW614N body",
      'Thread Types: Metric (M12–M63), PG7–PG48, NPT 1/4"–2"',
      "IP Rating: IP68 (assembled)",
      "Cable OD Range: 3 mm to 50 mm",
      "Sealing Ring: EPDM / Neoprene",
      "Finish: Natural, Nickel-plated",
      "Standards: EN 50262, IEC 62444",
    ],
    materials: ["Brass CW614N", "EPDM rubber seals", "PA6/PA66 locknuts"],
  },
  {
    id: "brass-nuts",
    name: "Brass Nuts",
    description:
      "Standard and custom brass nuts including hex, coupling, wing, and cap nuts for diverse fastening requirements.",
    iconName: "CircleDot",
    imageUrl:
      "https://images.unsplash.com/photo-1609205807107-2d243c72bcc7?w=800&q=80&fit=crop",
    fullDescription:
      "Gayatri Metal Products produces a wide variety of brass nuts including hex nuts, square nuts, coupling nuts, wing nuts, cap nuts, and knurled thumb nuts. All nuts are manufactured from free-cutting brass to ISO and DIN standards, ensuring consistent thread form and mechanical strength. We also supply non-standard and custom nuts from client drawings, with optional surface treatments including nickel plating and passivation for enhanced corrosion resistance.",
    specifications: [
      "Material: Brass CW614N (free-cutting)",
      "Thread Standards: Metric ISO, BSP, UNC/UNF",
      "Size Range: M3 to M36",
      "Tolerance: 6H per ISO 965-1",
      "Surface Finish: Natural, Nickel-plated, Tin-plated",
      "Hardness: 80–100 HB",
      "Standards: DIN 934, DIN 928, DIN 1587",
    ],
    materials: ["Brass CW614N", "Brass CW617N"],
  },
  {
    id: "cng-lpg",
    name: "CNG LPG Accessories",
    description:
      "Certified brass fittings and accessories for CNG and LPG fuel systems, meeting safety standards for automotive and industrial use.",
    iconName: "Flame",
    imageUrl:
      "https://images.unsplash.com/photo-1611095973763-414019e72400?w=800&q=80&fit=crop",
    fullDescription:
      "We manufacture a comprehensive range of brass fittings and accessories for CNG (Compressed Natural Gas) and LPG (Liquefied Petroleum Gas) fuel systems used in vehicles, storage cylinders, and industrial gas distribution. Products include high-pressure nipples, check valves, pressure regulators, cylinder valves, and manifold connectors. All components are tested to exceed the burst pressure requirements of ECE R110 and IS 14899 standards.",
    specifications: [
      "Material: Brass CW617N (high-pressure grade)",
      "Operating Pressure: Up to 200 bar (CNG), 25 bar (LPG)",
      "Thread Standards: NGT, CGA, BSP, NPT",
      "Temperature Range: -40 °C to +85 °C",
      "Leak Test: Helium leak test at 1.5× working pressure",
      "Standards: ECE R110, IS 14899, EN 13175",
      "Certifications: PESO / BIS approved variants",
    ],
    materials: [
      "Brass CW617N",
      "Stainless Steel 316 stems",
      "PTFE / Viton seals",
    ],
  },
  {
    id: "earthing-lightning",
    name: "Earthing & Lightning Protection",
    description:
      "Copper and brass earthing components including clamps, rods, and connectors for reliable electrical grounding and surge protection.",
    iconName: "Zap",
    imageUrl:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80&fit=crop",
    fullDescription:
      "Our earthing and lightning protection range includes copper earth rods, brass earth clamps, copper tape connectors, bonding lugs, and lightning arrester components for residential, commercial, and industrial electrical installations. Manufactured from high-conductivity copper and brass, these components ensure low-impedance fault current paths that protect both personnel and equipment from electrical surges and lightning strikes.",
    specifications: [
      "Material: Copper C101 (99.9% pure) / Brass CW617N",
      "Conductivity: ≥58 MS/m (copper components)",
      "Earth Rod Diameter: 14.2 mm, 17.2 mm",
      "Rod Lengths: 1.0 m, 1.5 m, 2.0 m (coupled)",
      "Clamp Rating: Up to 630 A fault current",
      "Surface Treatment: Electrolytic tinning available",
      "Standards: IS 3043, IEC 62305, BS 7430",
    ],
    materials: ["Copper C101", "Brass CW617N", "Stainless Steel 316 hardware"],
  },
  {
    id: "forged-machined",
    name: "Forged Machined Components",
    description:
      "Hot-forged and precision-machined brass and copper components offering superior strength and dimensional accuracy.",
    iconName: "Hammer",
    imageUrl:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80&fit=crop",
    fullDescription:
      "Gayatri operates its own hot-forging facility producing near-net-shape brass blanks that are subsequently precision-machined to final dimensions. The forging process aligns the grain structure of the brass, resulting in components with 20–30% higher mechanical strength than bar-turned equivalents. We produce valve bodies, unions, manifold blocks, and structural fittings using this route, typically for applications demanding higher pressure ratings and fatigue resistance.",
    specifications: [
      "Material: Forging Brass CW617N / CW712R",
      "Forging Temperature: 650–750 °C",
      "Post-forge Machining Tolerance: ±0.05 mm",
      "Tensile Strength: 450–550 MPa (forged)",
      "Min Wall Thickness: 2.0 mm",
      "Weight Range: 50 g to 5 kg per component",
      "Standards: DIN EN 12420, BS EN 12420",
    ],
    materials: [
      "Brass CW617N",
      "Brass CW712R",
      "Aluminium Bronze (on request)",
    ],
  },
  {
    id: "copper-machined",
    name: "Copper Machined Components",
    description:
      "High-conductivity copper parts machined to exacting tolerances for electrical, thermal, and industrial applications.",
    iconName: "Cpu",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop",
    fullDescription:
      "We machine high-purity copper (C101 and C110 alloys) into precision components used in busbars, heat sinks, contact tips, induction coil connectors, and electrical switchgear. Copper's excellent electrical conductivity (≥58 MS/m) and thermal conductivity (≥385 W/m·K) make it the material of choice for high-current and heat-management applications. Our CNC turning and milling cells handle complex profiles with tolerances down to ±0.01 mm.",
    specifications: [
      "Material: Copper C101 (oxygen-free) / C110 (ETP)",
      "Electrical Conductivity: ≥58 MS/m (101% IACS)",
      "Thermal Conductivity: ≥385 W/m·K",
      "Machining Tolerance: ±0.01 mm",
      "Surface Finish: Ra 0.8–1.6 µm",
      "Plating Options: Tin, Silver, Nickel",
      "Standards: ASTM B187, EN 13601",
    ],
    materials: ["Copper C101 (oxygen-free)", "Copper C110 (ETP)"],
  },
  {
    id: "brass-inserts",
    name: "Brass Inserts",
    description:
      "Threaded brass inserts for plastics, providing durable, corrosion-resistant fastening points in injection-moulded parts.",
    iconName: "Grid3x3",
    imageUrl:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80&fit=crop",
    fullDescription:
      "Our brass threaded inserts are designed for installation into thermoplastics by heat, ultrasonic, or press-in methods, providing strong and durable metal threads where plastic alone would fail. Used extensively in electronics enclosures, consumer appliances, automotive interiors, and medical devices, they are available with knurled, flanged, or grooved outer profiles to maximise pull-out and torque resistance in the host plastic material.",
    specifications: [
      "Material: Brass CW614N (free-cutting)",
      'Thread Range: M2 to M16, UNC #4-40 to 3/8"-16',
      "Insert Length: 4 mm to 25 mm",
      "Installation Methods: Heat, Ultrasonic, Press-in, Mould-in",
      "Pull-out Strength: Up to 8 kN (M6 in ABS)",
      "Surface Finish: Natural machined",
      "Standards: DIN 16903",
    ],
    materials: ["Brass CW614N"],
  },
  {
    id: "sheet-metal",
    name: "Sheet Metal Stamped Parts",
    description:
      "Precision-stamped brass and copper sheet metal components for electronics, automotive, and appliance sectors.",
    iconName: "Layers",
    imageUrl:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80&fit=crop",
    fullDescription:
      "Gayatri's sheet metal stamping division produces precision-blanked, formed, and deep-drawn brass and copper components for the electronics, automotive, white goods, and lighting industries. We operate progressive-die and compound-die stamping presses capable of handling sheet thicknesses from 0.2 mm to 3.0 mm. Components include terminal contacts, shims, spring clips, heat shields, and connector housings, all produced with consistent flatness and burr-free edges.",
    specifications: [
      "Material: Brass Sheet CW505L / CW508L, Copper C110",
      "Sheet Thickness: 0.2 mm to 3.0 mm",
      "Flatness Tolerance: ±0.05 mm",
      "Burr Height: ≤0.05 mm",
      "Tooling: Progressive die, compound die",
      "Min Hole Diameter: Equal to sheet thickness",
      "Surface Finish: Bare, Tin-plated, Silver-plated",
    ],
    materials: ["Brass CW505L", "Brass CW508L", "Copper C110"],
  },
  {
    id: "electrical-components",
    name: "Electrical Components",
    description:
      "Brass terminal blocks, connectors, and switchgear components manufactured for reliable electrical performance.",
    iconName: "CircuitBoard",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop",
    fullDescription:
      "We supply a broad portfolio of precision brass electrical components including DIN-rail terminal blocks, busbar connectors, MCB contact assemblies, fuse holders, and earthing studs. Our components are manufactured to IEC and UL standards and are used by panel builders, switchgear OEMs, and electrical contractors across India and internationally. Each component undergoes electrical continuity testing and dimensional verification as part of our 100% inspection protocol.",
    specifications: [
      "Material: Brass CW614N / Copper C101",
      "Current Rating: Up to 630 A (busbar connectors)",
      "Voltage Rating: Up to 1000 V AC",
      "Contact Resistance: ≤0.5 mΩ",
      "Plating: Tin (5–10 µm), Silver (3–5 µm) on request",
      "Operating Temp: -40 °C to +130 °C",
      "Standards: IEC 60947-7-1, UL 508",
    ],
    materials: ["Brass CW614N", "Copper C101", "Tin / Silver plating"],
  },
  {
    id: "automotive-components",
    name: "Automotive Components",
    description:
      "OEM-quality brass and copper automotive parts including fuel fittings, sensor housings, and connector terminals.",
    iconName: "Car",
    imageUrl:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80&fit=crop",
    fullDescription:
      "Gayatri supplies IATF 16949-aligned brass and copper components to automotive OEMs and Tier-1 suppliers covering fuel system fittings, sensor body housings, ABS connector inserts, wiring harness terminals, and coolant line adaptors. Our automotive cell operates under APQP disciplines with PPAP documentation available on request. Statistical process control (SPC) is applied to critical characteristics throughout production to ensure Cpk ≥ 1.67 on all key dimensions.",
    specifications: [
      "Material: Brass CW617N / CW614N, Copper C110",
      "Dimensional Cpk: ≥1.67 on critical features",
      "Surface Finish: Zinc-nickel, Chrome-free passivation",
      "Thread Standards: M, UNF, SAE",
      "Documentation: PPAP Level 3 available",
      "Quality System: IATF 16949 aligned",
      "Cleanliness: Ultrasonic washed and packaged",
    ],
    materials: ["Brass CW617N", "Brass CW614N", "Copper C110"],
  },
  {
    id: "cnc-machined",
    name: "CNC Machined Components",
    description:
      "Multi-axis CNC-turned and milled brass components with surface finishes and tolerances meeting the most demanding specifications.",
    iconName: "Cog",
    imageUrl:
      "https://images.unsplash.com/photo-1565793979996-27f1e553ef28?w=800&q=80&fit=crop",
    fullDescription:
      "Our CNC machining facility operates CNC DX 300, DX 250, and VMC CVM 800 machining centres alongside Swiss-type sliding-head lathes for high-volume precision turning. We produce complex multi-feature brass components from bar stock and forgings, achieving tolerances of ±0.005 mm on critical diameters. Live tooling capability enables milling, cross-drilling, and slotting in a single setup, minimising handling and maximising repeatability across large production runs.",
    specifications: [
      "Turning Tolerance: ±0.005 mm (diameter)",
      "Milling Tolerance: ±0.01 mm",
      "Surface Roughness: Ra 0.4–3.2 µm",
      "Max Turned Diameter: 300 mm",
      "Min Turned Diameter: 1.5 mm (sliding head)",
      "Axes: 2-axis, 3-axis, 4-axis (live tooling)",
      "Inspection: CMM, VMM optical system",
    ],
    materials: [
      "Brass CW617N",
      "Brass CW614N",
      "Copper C101",
      "Aluminium 6082",
    ],
  },
  {
    id: "brass-copper-rods",
    name: "Brass & Copper Rods, Sections, Profiles & Tubes",
    description:
      "In-house extruded brass and copper rods, hollow sections, profiles, and tubes available in standard and custom dimensions.",
    iconName: "AlignJustify",
    imageUrl:
      "https://images.unsplash.com/photo-1532094349884-543559196cf7?w=800&q=80&fit=crop",
    fullDescription:
      "Gayatri operates its own extrusion facility capable of producing brass and copper rods, hexagonal sections, square bars, flat profiles, and seamless tubes directly from billets. This vertical integration gives us full control over material chemistry, dimensional accuracy, and surface quality — enabling tighter tolerances and faster lead times than sourcing from external stock. Custom profiles are produced with dedicated dies and supplied in coils or fixed lengths per customer requirements.",
    specifications: [
      "Material: Brass CW617N, CW614N; Copper C101, C110",
      "Rod Diameter Range: 3 mm to 100 mm",
      "Tube OD Range: 6 mm to 80 mm, Wall: 1–8 mm",
      "Hex / Square Sizes: 5 mm AF to 75 mm AF",
      "Length: Up to 6 m standard, custom on request",
      "Straightness: ≤0.5 mm per metre",
      "Standards: BS EN 12163, BS EN 12164, ASTM B16",
    ],
    materials: ["Brass CW617N", "Brass CW614N", "Copper C101", "Copper C110"],
  },
];

export const PLANT_EQUIPMENT: EquipmentItem[] = [
  { name: "Electric Furnace", category: "plant" },
  { name: "Billet Heater", category: "plant" },
  { name: "Extrusion Press", category: "plant" },
  { name: "Lathe Machine", category: "plant" },
  { name: "Draw Machine", category: "plant" },
  { name: "Drill Machine", category: "plant" },
  { name: "Pointing Machine", category: "plant" },
  { name: "Straightening Machine", category: "plant" },
  { name: "Billet Cutting Machine", category: "plant" },
  { name: "Rod Cutting Machine", category: "plant" },
  { name: "Grinding Machine", category: "plant" },
  { name: "Welding Machine", category: "plant" },
];

export const MACHINE_EQUIPMENT: EquipmentItem[] = [
  { name: "CNC DX 300", category: "machine" },
  { name: "CNC DX 250", category: "machine" },
  { name: "CNC 135", category: "machine" },
  { name: "CNC LINEAR", category: "machine" },
  { name: "VMC CVM 800", category: "machine" },
  { name: "Sujata DCS Sliding Head", category: "machine" },
  { name: "Traub Machine", category: "machine" },
  { name: "SPM Machine", category: "machine" },
  { name: "Automatic Threading Machine", category: "machine" },
  { name: "Automatic Tapping Machine", category: "machine" },
  { name: "Automatic Hole Cutting Machine", category: "machine" },
  { name: "Automatic Slot Cutting Machine", category: "machine" },
];

export const QUALITY_EQUIPMENT: EquipmentItem[] = [
  { name: "VMM Optical Measuring System", category: "quality" },
  { name: "Profile Projector", category: "quality" },
  { name: "Optical Sorting Machine", category: "quality" },
  { name: "Spectromax Metal Tester", category: "quality" },
  { name: "Digital Vernier", category: "quality" },
  { name: "Digital Height Gauge", category: "quality" },
  { name: "Micrometer", category: "quality" },
  { name: "Thread Ring Gauges", category: "quality" },
  { name: "Thread Plug Gauges", category: "quality" },
  { name: "Pin Gauges", category: "quality" },
  { name: "WCP Gauges", category: "quality" },
];

export const POLICIES: PolicyItem[] = [
  {
    id: "vision",
    title: "Vision",
    description:
      "To be a globally recognised leader in precision brass and copper manufacturing, delivering world-class products that power industries across every continent.",
    iconName: "Eye",
  },
  {
    id: "mission",
    title: "Mission",
    description:
      "To manufacture superior-quality brass and copper components through advanced technology, skilled craftsmanship, and continuous innovation — meeting client needs with reliability and integrity.",
    iconName: "Target",
  },
  {
    id: "quality-policy",
    title: "Quality Policy",
    description:
      "We are committed to providing products that consistently meet or exceed customer requirements, maintaining ISO 9001 standards through continuous process improvement and rigorous quality checks at every stage.",
    iconName: "ShieldCheck",
  },
  {
    id: "health-safety",
    title: "Health & Safety Policy",
    description:
      "The safety and wellbeing of every employee is paramount. We maintain a hazard-free workplace through regular training, protective equipment, and strict adherence to occupational health and safety regulations.",
    iconName: "HeartHandshake",
  },
  {
    id: "environment",
    title: "Environment Policy",
    description:
      "We minimise our environmental footprint through responsible sourcing, waste reduction, energy efficiency, and compliance with environmental regulations — building a sustainable future for generations to come.",
    iconName: "Leaf",
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "mukesh-kataria",
    name: "Mukesh Kataria",
    title: "CEO & Founder",
    bio: "With over 40 years of experience in brass manufacturing, Mukesh founded Gayatri Metal Products in 1985 and has steered the company to become one of Jamnagar's most trusted precision component manufacturers.",
  },
  {
    id: "vatsal-kataria",
    name: "Vatsal Kataria",
    title: "Managing Director",
    bio: "Vatsal leads operations, business development, and international sales. His focus on modern CNC technology and quality systems has expanded the company's global footprint across Europe, the Middle East, and Southeast Asia.",
  },
  {
    id: "parmar-nikhil",
    name: "Parmar Nikhil",
    title: "Head of Department",
    bio: "Nikhil oversees the production floor and quality assurance division. His hands-on engineering expertise ensures every component leaving the facility meets the strict dimensional and material specifications required by clients.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Rajesh Mehta",
    company: "IndoElectro Systems",
    role: "Procurement Manager",
    quote:
      "Gayatri Metal Products has been our preferred supplier for brass cable glands and electrical components for over a decade. Their consistency in quality and on-time delivery is unmatched in the industry.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Sven Lindqvist",
    company: "Nordpipe GmbH",
    role: "Head of Supply Chain",
    quote:
      "We source custom CNC machined components and sanitary fittings from Gayatri. Their tolerances are precise, documentation is excellent, and their team is always responsive. A truly professional manufacturer.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Amit Patel",
    company: "AutoPart India Ltd.",
    role: "General Manager — Operations",
    quote:
      "From CNG accessories to forged machined parts, Gayatri delivers every time. Their investment in quality equipment and their ISO-certified processes give us confidence in every batch we receive.",
    rating: 5,
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Equipment", href: "#equipment" },
  { label: "Certifications", href: "#certifications" },
  { label: "Policy", href: "#policy" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const STATS: StatItem[] = [
  { label: "Years of Excellence", value: 40, suffix: "+" },
  { label: "Happy Clients", value: 500, suffix: "+" },
  { label: "Orders Completed", value: 10000, suffix: "+" },
  { label: "Team Members", value: 8, suffix: "" },
];
