export type ServiceSlug = "pallet-racking" | "shelving" | "wire-partitions" | "warehouse-layout";

export type PlaceholderJob = {
  placeholder: true;
  label: "Placeholder";
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export type ServicePage = {
  slug: ServiceSlug;
  navLabel: string;
  headline: string;
  lede: string;
  image: string;
  imageAlt: string;
  checks: { title: string; body: string }[];
  job: PlaceholderJob;
};

const standIn =
  "Industry, location, and outcome get filled in later. This card is not a finished job.";

export const site: {
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  placeLine: string;
  nav: { href: string; label: string }[];
  home: {
    eyebrow: string;
    headline: string;
    lede: string;
    sectionOrder: ["hero", "trust", "services", "steps", "work", "quote", "nearby", "close"];
    trust: string[];
    services: { title: string; body: string; href: string }[];
    steps: { title: string; body: string }[];
    jobs: PlaceholderJob[];
    quote: { text: string; label: "Placeholder"; attribution: string };
    nearby: string[];
  };
  services: ServicePage[];
  about: { paragraphs: string[] };
  faq: { question: string; answer: string }[];
} = {
  phoneDisplay: "(248) 340-8834",
  phoneHref: "tel:2483408834",
  email: "matt.falconsales@hotmail.com",
  placeLine: "Falcon Sales Company · Lake Orion, Michigan 48360",
  nav: [
    { href: "/pallet-racking", label: "Pallet racking" },
    { href: "/shelving", label: "Shelving" },
    { href: "/wire-partitions", label: "Wire partitions" },
    { href: "/warehouse-layout", label: "Layout" },
    { href: "/about", label: "About" },
  ],
  home: {
    eyebrow: "Lake Orion · Oakland County · Since 1991",
    headline: "The building is designed. Your equipment is placed. Storage is next.",
    lede: "Falcon designs and installs the pallet racking, shelving, wire partitions, and layout that make a new warehouse work.",
    sectionOrder: ["hero", "trust", "services", "steps", "work", "quote", "nearby", "close"],
    trust: [
      "Family owned since 1991",
      "Insured crew",
      "Supply and installation",
      "Oakland County, the Midwest, and nationwide",
    ],
    services: [
      {
        title: "Pallet racking",
        body: "Built to the load, the aisle, and the lift truck that has to run it.",
        href: "/pallet-racking",
      },
      {
        title: "Shelving",
        body: "High-density storage for parts, cartons, and smaller equipment.",
        href: "/shelving",
      },
      {
        title: "Wire partitions",
        body: "A secure cage for inventory or tools, with visibility and airflow left intact.",
        href: "/wire-partitions",
      },
      {
        title: "Warehouse layout",
        body: "The storage plan that follows the equipment layout, from the first sketch to installation.",
        href: "/warehouse-layout",
      },
    ],
    steps: [
      {
        title: "Architecture is finished",
        body: "The building exists on paper, or the shell is going up.",
      },
      {
        title: "You place the equipment",
        body: "Machines, lines, and work areas go on the floor plan first.",
      },
      {
        title: "Falcon designs the storage",
        body: "Racking, shelving, partitions, and aisles are drawn around that plan.",
      },
      {
        title: "We supply and install",
        body: "The system shows up and an insured crew puts it in.",
      },
    ],
    jobs: [
      {
        placeholder: true,
        label: "Placeholder",
        title: "New building fit-out",
        body: "Storage designed after the equipment layout.",
        image: "/images/rack-aisle.jpg",
        imageAlt: "Wide orange pallet rack aisle, used as a stand-in photo.",
      },
      {
        placeholder: true,
        label: "Placeholder",
        title: "Pallet rack run",
        body: "A stand-in for an installed racking job.",
        image: "/images/rack-close.jpg",
        imageAlt: "Closer view of orange pallet rack, used as a stand-in photo.",
      },
      {
        placeholder: true,
        label: "Placeholder",
        title: "Shelving and secure storage",
        body: "A stand-in for shelving or a wire partition.",
        image: "/images/shelving.jpg",
        imageAlt: "Yellow industrial shelving, used as a stand-in photo.",
      },
    ],
    quote: {
      text: "A warehouse manager called after the equipment was already on the plan.",
      label: "Placeholder",
      attribution: "not a real customer",
    },
    nearby: [
      "Nearby business · placeholder",
      "Nearby business · placeholder",
      "Nearby business · placeholder",
      "Nearby business · placeholder",
    ],
  },
  services: [
    {
      slug: "pallet-racking",
      navLabel: "Pallet racking",
      headline: "Pallet racking designed around equipment already on the plan.",
      lede: "Falcon looks at the load, the building, and the flow before specifying a system, then supplies and installs it. Capacities are confirmed per job.",
      image: "/images/rack-aisle.jpg",
      imageAlt: "Wide orange pallet rack aisle. Atmosphere only, not a Falcon installation.",
      checks: [
        {
          title: "The load",
          body: "What is on the pallet, how heavy, and how high. Capacities are confirmed per job.",
        },
        {
          title: "The building",
          body: "Ceiling, columns, doors, and the forklift aisle.",
        },
        {
          title: "The flow",
          body: "Where product enters, where it is picked, and which rack stays out of equipment already placed.",
        },
      ],
      job: {
        placeholder: true,
        label: "Placeholder",
        title: "New building, selective pallet rack",
        body: standIn,
        image: "/images/rack-aisle.jpg",
        imageAlt: "Wide orange pallet rack aisle, used as a stand-in photo.",
      },
    },
    {
      slug: "shelving",
      navLabel: "Shelving",
      headline: "Shelving designed around equipment already on the plan.",
      lede: "High-density storage for parts, cartons, and smaller equipment, placed after the work areas are on the floor plan.",
      image: "/images/shelving.jpg",
      imageAlt: "Yellow industrial shelving with lumber. Atmosphere only, not a Falcon installation.",
      checks: [
        {
          title: "What is stored",
          body: "Parts, cartons, and tools.",
        },
        {
          title: "How people pick it",
          body: "Who reaches the shelf, and how often the pick happens.",
        },
        {
          title: "How it moves later",
          body: "How the shelving has to move when the building grows.",
        },
      ],
      job: {
        placeholder: true,
        label: "Placeholder",
        title: "Parts shelving beside a work area",
        body: standIn,
        image: "/images/shelving.jpg",
        imageAlt: "Yellow industrial shelving, used as a stand-in photo.",
      },
    },
    {
      slug: "wire-partitions",
      navLabel: "Wire partitions",
      headline: "Wire partitions designed around equipment already on the plan.",
      lede: "A secure cage for inventory or tools, with visibility and airflow left intact. The photograph is the empty room, not a finished partition.",
      image: "/images/empty-warehouse.jpg",
      imageAlt: "Empty warehouse interior, the open room a partition would divide.",
      checks: [
        {
          title: "What must be locked",
          body: "Inventory, tools, or both.",
        },
        {
          title: "Who needs to see through it",
          body: "Sight lines and airflow stay intact.",
        },
        {
          title: "How it comes apart",
          body: "How the cage has to come apart later.",
        },
      ],
      job: {
        placeholder: true,
        label: "Placeholder",
        title: "Secure cage for tools and inventory",
        body: standIn,
        image: "/images/empty-warehouse.jpg",
        imageAlt: "Empty warehouse interior, used as a stand-in for the room.",
      },
    },
    {
      slug: "warehouse-layout",
      navLabel: "Layout",
      headline: "A storage plan drawn after the equipment layout.",
      lede: "Falcon designs racking, shelving, and partitions around machines and work areas that are already on the plan, from the first sketch to installation.",
      image: "/images/empty-warehouse.jpg",
      imageAlt: "Empty warehouse interior before storage is drawn in. Atmosphere only.",
      checks: [
        {
          title: "Where equipment already sits",
          body: "Machines, lines, and work areas on the floor plan.",
        },
        {
          title: "How material has to move",
          body: "The path from receiving, through the work, and back out.",
        },
        {
          title: "What storage is left to draw",
          body: "Racking, shelving, partitions, and aisles around that plan.",
        },
      ],
      job: {
        placeholder: true,
        label: "Placeholder",
        title: "Storage plan after the equipment layout",
        body: standIn,
        image: "/images/empty-warehouse.jpg",
        imageAlt: "Empty warehouse interior, used as a stand-in photo.",
      },
    },
  ],
  about: {
    paragraphs: [
      "Falcon Sales Company has been a family business in material handling and warehouse storage since 1991. The company is based in Lake Orion, Oakland County.",
      "The work is pallet racking, industrial shelving, wire partitions, and warehouse layout and design. Falcon plans with the client, supplies the system, and installs it with an insured crew.",
      "The work runs from the first conversation through installation.",
    ],
  },
  faq: [
    {
      question: "When should we call about a new building?",
      answer:
        "Most calls come early, after the architectural stage. The building exists on paper, or the shell is going up. You place the equipment. Falcon designs the storage around that plan, then supplies and installs it.",
    },
    {
      question: "Do you only sell the equipment, or do you install it?",
      answer: "Falcon supplies the system and installs it with an insured crew.",
    },
    {
      question: "Where do you work?",
      answer:
        "Based in Lake Orion, Oakland County. The published reach is Michigan, the Midwest, and nationwide.",
    },
    {
      question: "Can you tell me the load capacity from this site?",
      answer: "No. Capacity is set for the job after the plan and the product are known.",
    },
    {
      question: "What should we send to get a layout started?",
      answer: "The equipment layout, what has to be stored, and how it is moved.",
    },
  ],
};
