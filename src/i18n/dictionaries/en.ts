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
          "Explore vehicle categories at NF Car Importer — sedans, SUVs, pickups, hatchbacks, crossovers and electric or hybrid vehicles.",
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
    principles: {
      eyebrow: "Why NF Car Importer",
      title: "Confidence drives progress.",
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
      lead: "Six categories to start from. Tell us which one fits, and we'll help you import the vehicle you want.",
    },
    rail: {
      eyebrow: "The Range",
      title: "Find the vehicle that fits your life",
      lead: "City runabout, family SUV or a pickup for work — start with the category, and we will source and import the vehicle that meets your needs.",
      viewAll: "View all categories",
      label: "Vehicle categories",
    },
    jumpTo: "Jump to a category",
    category: "Vehicle category",
    idealFor: "Ideal for",
    availability: "Availability",
    onEnquiry: "On enquiry",
    enquireAbout: (name: string) => `Enquire about ${name}`,
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
    preview: {
      eyebrow: "Questions",
      title: "Good to know",
      lead: "Quick answers about our vehicles, services and how to reach us.",
      all: "All FAQs",
    },
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
      lead: "Call, email or send an enquiry — we're here to help.",
    },
    directLines: "Direct lines",
    telephone: "Telephone",
    email: "Email",
    showroom: "Showroom",
    hours: "Hours",
    section: {
      eyebrow: "Send an enquiry",
      title: "How can we help?",
      lead: "Choose a topic and tell us a little about what you need. We'll take it from there.",
    },
    cta: {
      eyebrow: "Enquire",
      title: "Let's bring your vehicle closer",
      lead: "Tell us what you need — a vehicle to import, an electric model, an accessory or a spare part — and the right person will get back to you.",
    },
  },

  form: {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone",
    topic: "Topic",
    message: "Message",
    placeholder: "Tell us what you are looking for…",
    note: "Submitting opens your email app with the enquiry ready to send.",
    submit: "Send enquiry",
    success: "Your email app should now open with your enquiry. If it didn't, email us at",
    generalEnquiry: "General enquiry",
    vehiclesPrefix: "Vehicles",
    errors: {
      firstName: "Please enter your first name.",
      lastName: "Please enter your last name.",
      email: "Please enter a valid email address.",
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
