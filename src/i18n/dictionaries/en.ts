/**
 * English (en) interface copy and page headings.
 * Content collections (services, FAQs, about, vehicles, gallery) live in each
 * feature's `data/` folder, keyed by locale.
 */
export const en = {
  meta: {
    defaultTitle: (name: string) => `${name} — Vehicle Importing & Sales, Electric Vehicles, Parts`,
    pages: {
      about: {
        title: "About",
        description:
          "Learn about NF Car Importer — an automotive sub-brand of Nigat Fanawi Trading PLC making vehicle importation accessible, straightforward and dependable.",
      },
      services: {
        title: "Services",
        description:
          "Vehicle importing and sales, electric and hybrid vehicles, automotive accessories and spare parts, and after-sales support from NF Car Importer.",
      },
      vehicles: {
        title: "Vehicles",
        description:
          "Electric, hybrid and petrol vehicles imported by NF Car Importer — BYD Seagull, Yuan Up, E7, Sea Lion 06, Leopard and Toyota Corolla Cross Hybrid. Filter by body type or powertrain and enquire.",
      },
      gallery: {
        title: "Gallery",
        description: "A visual journey through NF Car Importer — vehicles, movement and the road ahead.",
      },
      faqs: {
        title: "FAQs",
        description: "Answers to common questions about NF Car Importer vehicles, services and how to get in touch.",
      },
      contact: {
        title: "Contact",
        description:
          "Get in touch with NF Car Importer about importing a vehicle, electric and hybrid models, accessories, spare parts or after-sales support.",
      },
      notFound: { title: "Page Not Found" },
    },
  },

  common: {
    skipToContent: "Skip to content",
    home: "Home",
    breadcrumb: "Breadcrumb",
    service: "Service",
  },

  /** Short descriptions for page hero photos (accessibility and SEO). */
  heroAlt: {
    about: "Driver's view of a modern vehicle interior",
    services: "Vehicle in a workshop during maintenance",
    vehicles: "New vehicle on the road",
    gallery: "Vehicles on display",
    faqs: "Vehicle detail close-up",
    contact: "Vehicle parked outside, ready for handover",
  },

  chat: {
    telegram: "Telegram",
    whatsapp: "WhatsApp",
  },

  home: {
    why: {
      eyebrow: "Why NF Car Importer",
      title: "Why buy through us",
    },
  },

  ctaBand: {
    title: "Found the vehicle you want? Talk to our team.",
    enquire: "Enquire",
    faqs: "Common questions",
  },

  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    vehicles: "Vehicles",
    gallery: "Gallery",
    faqs: "FAQs",
    contact: "Contact",
    enquire: "Enquire",
    mainLabel: "Main",
    mobileLabel: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    showChildren: (label: string) => `Show ${label}`,
    hideChildren: (label: string) => `Hide ${label}`,
    switchSector: (group: string) => `${group} — switch sector`,
    groupSummary: (legalName: string) => `${legalName} — one parent company, three sectors.`,
    youAreHere: "You are here",
    language: "Language",
  },

  hero: {
    eyebrow: "Import · Electric · Parts",
    lineOne: "Drive",
    lineTwo: "The Future",
    lead: "Bringing you closer to the vehicle you want — imported with care, delivered with confidence.",
    primary: "Explore vehicles",
    secondary: "Our services",
  },

  about: {
    eyebrow: "About NF Car Importer",
    moreAboutUs: "More about us",
    hero: {
      title: "Confidence in every journey",
      lead: "Connecting people with the vehicles that move them forward.",
    },
    story: {
      eyebrow: "Our story",
    },
    values: {
      eyebrow: "What we stand for",
      label: "Our brand values",
    },
    visionMission: {
      eyebrow: "Vision & Mission",
      title: "Where we are headed, and how we get there",
      essence: "Brand essence",
      vision: "Vision",
      mission: "Mission",
    },
    name: {
      eyebrow: "Our name & mark",
      markAlt: "NF CAR IMPORTER symbol: the initials N and F formed into a wheel rim",
    },
    approach: {
      eyebrow: "Our Approach",
      title: "Accessible, straightforward, dependable",
      lead: "Whether you are importing a vehicle, choosing an electric model or sourcing parts, the experience follows the same three stages.",
    },
  },

  vehicles: {
    hero: {
      eyebrow: "The Range",
      title: "Vehicles",
      lead: "The models we import, led by electric and hybrid. Filter by body type or powertrain, then enquire about the one you want.",
    },
    featured: {
      eyebrow: "Featured vehicles",
      title: "Models we import",
      lead: "Electric and hybrid first: lower running costs and a quieter drive. Every model can be ordered to your preferences.",
      viewAll: "View all vehicles",
    },
    filters: {
      label: "Filter vehicles",
      body: "Body type",
      powertrain: "Powertrain",
      all: "All",
      results: (count: number) => `${count} ${count === 1 ? "model" : "models"}`,
      empty: "No models match these filters.",
      reset: "Clear filters",
    },
    body: { sedan: "Sedan", suv: "SUV", pickup: "Pickup", hatchback: "Hatchback" },
    powertrain: { electric: "Electric", hybrid: "Hybrid", petrol: "Petrol" },
    specs: {
      year: "Year",
      body: "Body type",
      powertrain: "Powertrain",
      range: "Range",
      fuelEconomy: "Fuel economy",
      seats: "Seats",
      transmission: "Transmission",
      price: "Price",
      availability: "Availability",
    },
    priceFrom: (amount: string) => `From ETB ${amount}`,
    priceExact: (amount: string) => `ETB ${amount}`,
    priceOnRequest: "Price on request",
    inStock: "Available now",
    onOrder: "On order",
    onOrderLead: (lead: string) => `On order · ${lead}`,
    askAvailability: "Ask for availability",
    photosSoon: "Photos coming soon",
    details: "View details",
    enquire: "Enquire",
    enquireAbout: (name: string) => `Enquire about the ${name}`,
    chatMessage: (name: string) => `Hello NF Car Importer, I'm interested in the ${name}.`,
    chatLead: "Prefer to chat? Message us on Telegram or WhatsApp.",
    photos: "Photos",
    photoAlt: (name: string, n: number) => `${name}, photo ${n}`,
    allVehicles: "All vehicles",
    otherModels: "Other models",
  },

  scrollRail: {
    back: "Scroll back",
    forward: "Scroll forward",
  },

  services: {
    hero: {
      eyebrow: "What we do",
      title: "Services",
      lead: "Quality vehicles, dependable importation and support that extends beyond the point of purchase.",
    },
    index: {
      eyebrow: "Services",
      title: "Everything your vehicle needs",
      lead: "From sourcing and importing the right vehicle to supporting it after purchase — a partner throughout your automotive journey.",
      all: "All services",
      moreEyebrow: "More services",
      moreTitle: "Explore other services",
    },
    explore: (title: string) => `Explore ${title}`,
    overview: "Overview",
    atAGlance: "At a glance",
    enquire: "Enquire about this service",
    process: {
      eyebrow: "How it works",
      title: "From first call to the open road",
      lead: "A clear, four-step process — so you always know what happens next.",
    },
  },

  faqs: {
    hero: { eyebrow: "Help", title: "Questions & answers" },
    topicsLabel: "FAQ topics",
    topics: "Topics",
    topic: "Topic",
    stillQuestion: "Still have a question?",
    happyToHelp: "Our team is happy to help.",
    contactUs: "Contact us",
  },

  gallery: {
    hero: { eyebrow: "In focus", title: "Gallery" },
    open: (n: number, alt: string) => `Open image ${n}: ${alt}`,
    dialog: (n: number, total: number, alt: string) => `Image ${n} of ${total}: ${alt}`,
    close: "Close gallery",
    previous: "Previous image",
    next: "Next image",
  },

  contact: {
    hero: {
      eyebrow: "Get in touch",
      title: "Contact",
      lead: "Call, chat on Telegram or WhatsApp, or send an enquiry. We're here to help.",
    },
    directLines: "Direct lines",
    telephone: "Telephone",
    email: "Email",
    showroom: "Showroom",
    hours: "Hours",
    chat: "Chat",
    replyTime: "Reply time",
    landmark: "Landmark",
    mapTitle: "Map showing the NF Car Importer showroom",
    section: {
      eyebrow: "Send an enquiry",
      title: "How can we help?",
      lead: "Choose a topic and tell us a little about what you need. We'll take it from there.",
    },
  },

  form: {
    name: "Full name",
    email: "Email",
    phone: "Phone",
    topic: "Topic",
    message: "Message",
    optional: "optional",
    required: "required",
    requiredNote: "Fields marked * are required.",
    placeholder: "Tell us what you are looking for…",
    privacy: "We only use your details to reply to this enquiry.",
    submit: "Send enquiry",
    sending: "Sending…",
    success: "Thank you. Your enquiry has been sent and our team will contact you soon.",
    failure: "Sorry, your enquiry could not be sent. Please call us or message us on Telegram or WhatsApp.",
    generalEnquiry: "General enquiry",
    servicesGroup: "Services",
    vehiclesGroup: "Vehicles",
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email address, or leave it empty.",
      phone: "Please enter a valid phone number.",
      message: "Please tell us a little more (at least 10 characters).",
    },
  },

  footer: {
    blurb: "Vehicle importing and sales, electric vehicles, accessories and spare parts — your trusted automotive partner in Ethiopia.",
    explore: "Explore",
    services: "Services",
    contact: "Contact",
    rights: (year: number, legalName: string, name: string) => `© ${year} ${legalName} (${name}). All rights reserved.`,
    backToTop: "Back to top",
  },

  notFound: {
    eyebrow: "Page not found",
    title: "This road doesn't lead anywhere.",
    lead: "The page you are looking for may have moved or no longer exists.",
    backHome: "Back to home",
    exploreVehicles: "Explore vehicles",
  },
};

export type Dictionary = typeof en;
