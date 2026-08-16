// Centralized site data — used across nav, footer, schema, CTAs
// Energy Contractor Insurance — insurance for solar, HVAC, electrical & energy-efficiency contractors

export const SITE = {
  name: "Energy Contractor Insurance",
  legalName: "Energy Contractor Insurance (by Contractors Choice Agency)",
  domain: "energycontractorinsurance.com",
  url: "https://energycontractorinsurance.com",
  tagline: "Insurance for Solar, HVAC, Electrical & Energy Contractors",
  description:
    "Specialized commercial insurance for energy contractors — solar installers, HVAC and electrical contractors, insulation and weatherization crews, and geothermal and energy-efficiency installers. General liability, workers' comp, commercial auto, tools & equipment, errors & omissions, and pollution liability. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Energy Contractor",
  brandSub: "Contractor Insurance",
  nicheShort: "energy contractor",
  nicheShortCap: "Energy Contractor",
  nichePlural: "energy contractors",
  nichePluralCap: "Energy Contractors",
  operator: "energy contracting business",
  operatorCap: "Energy Contracting Business",
  industry: "energy contracting",
  industryCap: "Energy Contracting",
  audience: "solar, HVAC & electrical contractors",
  audienceCap: "Solar, HVAC & Electrical Contractors",
  ownerTitle: "energy contractor",
  regionPill: "California · Texas · National",
  serviceSuffix: "Energy Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "Jobsite injury, property damage & completed-ops",
    description:
      "Third-party bodily injury and property damage protection for solar, HVAC, and electrical jobsites — plus completed-operations coverage for the years after a system is installed, when most energy-contractor claims actually surface.",
    icon: "ShieldCheck",
    keywords: ["energy contractor general liability", "solar installer insurance", "HVAC contractor liability insurance", "electrical contractor GL insurance"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Roof, ladder, electrical & confined-space crews",
    description:
      "Coverage for the real injury patterns in energy contracting — roof falls during solar installs, ladder and lift injuries, electrical shock and arc-flash, confined-space HVAC work, and lifting injuries. Proper class codes for energy trades.",
    icon: "HardHat",
    keywords: ["energy contractor workers comp", "solar installer workers compensation", "HVAC workers comp class code", "electrician workers comp insurance"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto & Fleet",
    short: "Service vans, bucket trucks & install trailers",
    description:
      "Coverage for the service vans, pickup trucks, bucket trucks, and equipment trailers you run between jobsites — including hired and non-owned auto when techs use their own vehicles on company business.",
    icon: "Truck",
    keywords: ["energy contractor commercial auto", "solar installer fleet insurance", "HVAC service van insurance", "electrical contractor auto coverage"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment Coverage",
    short: "Panels, inverters, HVAC units & hand tools",
    description:
      "Inland marine coverage for solar panels, inverters, HVAC units, testing equipment, and hand and power tools — whether they're staged at a jobsite, in transit, or sitting in the shop overnight.",
    icon: "Wrench",
    keywords: ["contractor tools insurance", "solar panel inland marine insurance", "HVAC equipment coverage", "energy contractor tool theft insurance"],
  },
  {
    slug: "errors-omissions",
    title: "Errors & Omissions",
    short: "Design, sizing & installation mistakes",
    description:
      "Professional liability for the design and judgment side of energy work — a mis-sized HVAC system, a solar array that underperforms its projected output, or an energy-audit recommendation that doesn't deliver the promised savings.",
    icon: "FileCheck",
    keywords: ["energy contractor errors and omissions", "solar installer professional liability", "HVAC design liability insurance", "energy auditor E&O insurance"],
  },
  {
    slug: "commercial-property",
    title: "Shop & Commercial Property",
    short: "Warehouse, inventory & office",
    description:
      "All-risk coverage for the shop, warehouse, and office — the building, the panel and equipment inventory on the shelves, and the tools and vehicles parked overnight.",
    icon: "Building2",
    keywords: ["contractor shop insurance", "solar warehouse property insurance", "HVAC business property coverage", "energy contractor office insurance"],
  },
  {
    slug: "umbrella-liability",
    title: "Umbrella / Excess Liability",
    short: "Extra limits above your GL, auto & employer's liability",
    description:
      "Additional limits that sit above your general liability, commercial auto, and employer's liability — the layer that protects the business when a serious jobsite injury or property-damage claim exceeds underlying limits.",
    icon: "Umbrella",
    keywords: ["energy contractor umbrella insurance", "solar installer excess liability", "HVAC contractor umbrella policy", "electrical contractor excess coverage"],
  },
  {
    slug: "pollution-environmental",
    title: "Pollution & Environmental Liability",
    short: "Refrigerant handling, spills & panel disposal",
    description:
      "Covers the environmental exposure energy contractors carry — refrigerant handling and release during HVAC work, fuel and chemical spills from job vehicles and generators, and liability tied to solar-panel and equipment disposal.",
    icon: "Droplets",
    keywords: ["HVAC refrigerant pollution liability", "solar contractor environmental insurance", "energy contractor spill liability", "electrical contractor environmental coverage"],
  },
] as const;

export const LOCATIONS = [
  { slug: "california", name: "California", region: "Central Valley · Bay Area · SoCal", blurb: "The largest solar and HVAC market in the country. We insure California energy contractors from residential solar installers to commercial HVAC and electrical crews — with markets built for the state's licensing, wage, and workers' comp rules." },
  { slug: "texas-southwest", name: "Texas & the Southwest", region: "TX · NM · AZ", blurb: "A deregulated energy market and a fast-growing solar and HVAC install base. Coverage built for Texas, New Mexico, and Arizona energy contractors — high heat-load HVAC demand and rapid commercial and residential solar growth." },
  { slug: "florida-southeast", name: "Florida & the Southeast", region: "FL · GA · the Carolinas", blurb: "Hurricane exposure, high humidity, and year-round HVAC demand drive one of the busiest energy-contractor markets in the country. Programs sized for storm, wind, and flood considerations on top of standard trade risk." },
  { slug: "pacific-northwest", name: "Pacific Northwest", region: "Oregon · Washington · Idaho", blurb: "Weatherization, insulation, and heat-pump conversion work make up a big share of PNW energy contracting. Coverage built for retrofit-heavy crews working older housing stock and variable weather conditions." },
  { slug: "northeast", name: "Northeast & Mid-Atlantic", region: "NY · PA · NJ · New England", blurb: "A dense retrofit and insulation market with real winter-storm exposure. Coverage for the region's HVAC, insulation, and electrical contractors working older buildings and tight urban jobsites." },
  { slug: "mountain-west", name: "Mountain West", region: "CO · UT · NV", blurb: "Fast-growing solar and geothermal installation markets at altitude. Programs for Colorado, Utah, and Nevada energy contractors — high-elevation electrical work and geothermal drilling exposure." },
  { slug: "upper-midwest", name: "Upper Midwest", region: "Minnesota · Wisconsin · Michigan", blurb: "Cold-climate insulation and weatherization work drives year-round demand. Coverage for Upper Midwest energy contractors handling extreme-temperature HVAC and insulation retrofit jobs." },
  { slug: "great-plains", name: "Great Plains", region: "Kansas · Nebraska · the Dakotas", blurb: "Wind and utility-scale solar projects alongside rural electrical and HVAC contracting. Coverage for Plains-state energy contractors working both residential routes and larger utility-adjacent projects." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Energy-trade-knowledgeable agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 240, suffix: "+", label: "Energy contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring contractors & trades", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

// No customer testimonials are published for this site yet — do not fabricate quotes.
export const TESTIMONIALS: { quote: string; name: string; role: string; location: string }[] = [];
