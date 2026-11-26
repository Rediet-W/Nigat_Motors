import type { Dictionary } from "./en";

/**
 * Amharic (am) interface copy and page headings. Mirrors `en.ts` key for key
 * (enforced by the `Dictionary` type). Brand and model names stay in Latin
 * script where they are proper names (BYD, Toyota, NF CAR IMPORTER logo).
 * TRANSLATION REVIEW: have a native speaker proofread before launch.
 */
export const am: Dictionary = {
  meta: {
    defaultTitle: (name: string) => `${name} — የተሽከርካሪ ማስመጣት እና ሽያጭ፣ የኤሌክትሪክ ተሽከርካሪዎች፣ መለዋወጫዎች`,
    pages: {
      about: {
        title: "ስለ እኛ",
        description:
          "ስለ ኤንኤፍ የመኪና አስመጪ ይወቁ — የተሽከርካሪ ማስመጣትን ተደራሽ፣ ቀላል እና አስተማማኝ የሚያደርግ የንጋት ፋናዊ ትሬዲንግ ኃ.የተ.የግ.ማ. የአውቶሞቲቭ ንዑስ ብራንድ።",
      },
      services: {
        title: "አገልግሎቶች",
        description:
          "የተሽከርካሪ ማስመጣት እና ሽያጭ፣ የኤሌክትሪክ እና ሃይብሪድ ተሽከርካሪዎች፣ የመኪና ተጨማሪ ዕቃዎች እና መለዋወጫዎች እንዲሁም ከሽያጭ በኋላ ድጋፍ ከኤንኤፍ የመኪና አስመጪ።",
      },
      vehicles: {
        title: "ተሽከርካሪዎች",
        description:
          "በኤንኤፍ የመኪና አስመጪ የሚመጡ የኤሌክትሪክ፣ ሃይብሪድ እና ቤንዚን ተሽከርካሪዎች — BYD Seagull፣ Yuan Up፣ E7፣ Sea Lion 06፣ Leopard እና Toyota Corolla Cross Hybrid። በዓይነት ወይም በኃይል ምንጭ ይለዩ እና ይጠይቁ።",
      },
      gallery: {
        title: "የምስል ማዕከል",
        description: "በኤንኤፍ የመኪና አስመጪ ዓለም ውስጥ የሚደረግ የምስል ጉዞ — ተሽከርካሪዎች፣ እንቅስቃሴ እና ከፊት ያለው መንገድ።",
      },
      faqs: {
        title: "ጥያቄዎች",
        description: "ስለ ኤንኤፍ የመኪና አስመጪ ተሽከርካሪዎች፣ አገልግሎቶች እና እኛን እንዴት ማግኘት እንደሚችሉ ለሚነሱ የተለመዱ ጥያቄዎች መልሶች።",
      },
      contact: {
        title: "ያግኙን",
        description:
          "ተሽከርካሪ ስለማስመጣት፣ ስለ ኤሌክትሪክ እና ሃይብሪድ ሞዴሎች፣ ስለ ተጨማሪ ዕቃዎች፣ መለዋወጫዎች ወይም ከሽያጭ በኋላ ድጋፍ ኤንኤፍ የመኪና አስመጪን ያግኙ።",
      },
      notFound: { title: "ገጹ አልተገኘም" },
    },
  },

  common: {
    skipToContent: "ወደ ዋናው ይዘት ይለፉ",
    home: "መነሻ",
    breadcrumb: "የገጽ መንገድ",
    service: "አገልግሎት",
  },

  heroAlt: {
    about: "የዘመናዊ ተሽከርካሪ ውስጣዊ ክፍል ከአሽከርካሪው እይታ",
    services: "በጋራዥ ውስጥ ጥገና እየተደረገለት ያለ ተሽከርካሪ",
    vehicles: "መንገድ ላይ ያለ አዲስ ተሽከርካሪ",
    gallery: "ለእይታ የቀረቡ ተሽከርካሪዎች",
    faqs: "የተሽከርካሪ ዝርዝር በቅርበት",
    contact: "ለርክክብ ዝግጁ ሆኖ የቆመ ተሽከርካሪ",
  },

  chat: {
    telegram: "ቴሌግራም",
    whatsapp: "ዋትስአፕ",
  },

  home: {
    why: {
      eyebrow: "ለምን ኤንኤፍ የመኪና አስመጪ",
      title: "ለምን በእኛ በኩል ይግዙ",
    },
  },

  ctaBand: {
    title: "የሚፈልጉትን ተሽከርካሪ አገኙ? ቡድናችንን ያነጋግሩ።",
    enquire: "ይጠይቁ",
    faqs: "የተለመዱ ጥያቄዎች",
  },

  nav: {
    home: "መነሻ",
    about: "ስለ እኛ",
    services: "አገልግሎቶች",
    vehicles: "ተሽከርካሪዎች",
    gallery: "ምስሎች",
    faqs: "ጥያቄዎች",
    contact: "ያግኙን",
    enquire: "ይጠይቁ",
    mainLabel: "ዋና ማውጫ",
    mobileLabel: "የሞባይል ማውጫ",
    openMenu: "ማውጫውን ክፈት",
    closeMenu: "ማውጫውን ዝጋ",
    showChildren: (label: string) => `${label} አሳይ`,
    hideChildren: (label: string) => `${label} ደብቅ`,
    switchSector: (group: string) => `${group} — ዘርፍ ይቀይሩ`,
    groupSummary: (legalName: string) => `${legalName} — አንድ ወላጅ ኩባንያ፣ ሦስት ዘርፎች።`,
    youAreHere: "እዚህ ነዎት",
    language: "ቋንቋ",
  },

  hero: {
    eyebrow: "ማስመጣት · ኤሌክትሪክ · መለዋወጫ",
    lineOne: "የወደፊቱን",
    lineTwo: "ያሽከርክሩ",
    lead: "የሚፈልጉትን ተሽከርካሪ እናቀርብልዎታለን — በጥንቃቄ የሚመጣ፣ በእርግጠኝነት የሚረከቡት።",
    primary: "ተሽከርካሪዎችን ይመልከቱ",
    secondary: "አገልግሎቶቻችን",
  },

  about: {
    eyebrow: "ስለ ኤንኤፍ የመኪና አስመጪ",
    moreAboutUs: "ስለ እኛ ተጨማሪ",
    hero: {
      title: "በእያንዳንዱ ጉዞ በራስ መተማመን",
      lead: "ሰዎችን ወደፊት ከሚያራምዷቸው ተሽከርካሪዎች ጋር እናገናኛለን።",
    },
    story: {
      eyebrow: "ታሪካችን",
    },
    values: {
      eyebrow: "የምንቆምለት",
      label: "የብራንድ እሴቶቻችን",
    },
    visionMission: {
      eyebrow: "ራዕይ እና ተልዕኮ",
      title: "ወዴት እንደምንሄድ፣ እንዴትም እንደምንደርስ",
      essence: "የብራንዳችን ይዘት",
      vision: "ራዕይ",
      mission: "ተልዕኮ",
    },
    name: {
      eyebrow: "ስማችን እና ምልክታችን",
      markAlt: "የኤንኤፍ የመኪና አስመጪ ምልክት፦ የN እና F ፊደላት በመኪና ጎማ ሪም ቅርጽ",
    },
    approach: {
      eyebrow: "አካሄዳችን",
      title: "ተደራሽ፣ ቀላል፣ አስተማማኝ",
      lead: "ተሽከርካሪ እያስመጡ፣ የኤሌክትሪክ ሞዴል እየመረጡ ወይም መለዋወጫ እየፈለጉ ቢሆንም፣ ሂደቱ እነዚሁ ሦስት ደረጃዎች አሉት።",
    },
  },

  vehicles: {
    hero: {
      eyebrow: "ምርጫዎቻችን",
      title: "ተሽከርካሪዎች",
      lead: "የምናስመጣቸው ሞዴሎች፣ በኤሌክትሪክ እና ሃይብሪድ የሚመሩ። በዓይነት ወይም በኃይል ምንጭ ይለዩ፤ ከዚያም ስለሚፈልጉት ይጠይቁ።",
    },
    featured: {
      eyebrow: "ተለይተው የቀረቡ ተሽከርካሪዎች",
      title: "የምናስመጣቸው ሞዴሎች",
      lead: "ኤሌክትሪክ እና ሃይብሪድ ቅድሚያ፦ ዝቅተኛ የማንቀሳቀሻ ወጪ እና ጸጥ ያለ ጉዞ። እያንዳንዱ ሞዴል እንደ ምርጫዎ ሊታዘዝ ይችላል።",
      viewAll: "ሁሉንም ተሽከርካሪዎች ይመልከቱ",
    },
    filters: {
      label: "ተሽከርካሪዎችን ይለዩ",
      body: "የአካል ዓይነት",
      powertrain: "የኃይል ምንጭ",
      all: "ሁሉም",
      results: (count: number) => `${count} ሞዴሎች`,
      empty: "ከእነዚህ ምርጫዎች ጋር የሚዛመድ ሞዴል የለም።",
      reset: "ምርጫዎችን አጽዳ",
    },
    body: { sedan: "ሴዳን", suv: "SUV", pickup: "ፒካፕ", hatchback: "ሃችባክ" },
    powertrain: { electric: "ኤሌክትሪክ", hybrid: "ሃይብሪድ", petrol: "ቤንዚን" },
    specs: {
      year: "ዓመት",
      body: "የአካል ዓይነት",
      powertrain: "የኃይል ምንጭ",
      range: "የጉዞ ርቀት",
      fuelEconomy: "የነዳጅ ፍጆታ",
      seats: "መቀመጫዎች",
      transmission: "ማርሽ",
      price: "ዋጋ",
      availability: "ተገኝነት",
    },
    priceFrom: (amount: string) => `ከ ${amount} ብር ጀምሮ`,
    priceExact: (amount: string) => `${amount} ብር`,
    priceOnRequest: "ዋጋ በጥያቄ",
    inStock: "አሁን ይገኛል",
    onOrder: "በትዕዛዝ",
    onOrderLead: (lead: string) => `በትዕዛዝ · ${lead}`,
    askAvailability: "ስለ ተገኝነት ይጠይቁ",
    photosSoon: "ፎቶዎች በቅርቡ",
    details: "ዝርዝር ይመልከቱ",
    enquire: "ይጠይቁ",
    enquireAbout: (name: string) => `ስለ ${name} ይጠይቁ`,
    chatMessage: (name: string) => `ሰላም ኤንኤፍ የመኪና አስመጪ፣ ስለ ${name} ማወቅ እፈልጋለሁ።`,
    chatLead: "መወያየት ይመርጣሉ? በቴሌግራም ወይም በዋትስአፕ መልእክት ይላኩልን።",
    photos: "ፎቶዎች",
    photoAlt: (name: string, n: number) => `${name}፣ ፎቶ ${n}`,
    allVehicles: "ሁሉም ተሽከርካሪዎች",
    otherModels: "ሌሎች ሞዴሎች",
  },

  scrollRail: {
    back: "ወደ ኋላ",
    forward: "ወደ ፊት",
  },

  services: {
    hero: {
      eyebrow: "የምንሠራው",
      title: "አገልግሎቶች",
      lead: "ጥራት ያላቸው ተሽከርካሪዎች፣ አስተማማኝ የማስመጣት አገልግሎት እና ከግዢ በኋላም የሚቀጥል ድጋፍ።",
    },
    index: {
      eyebrow: "አገልግሎቶች",
      title: "ተሽከርካሪዎ የሚያስፈልገው ሁሉ",
      lead: "ትክክለኛውን ተሽከርካሪ ከማፈላለግ እና ከማስመጣት ጀምሮ ከግዢ በኋላ እስከ መደገፍ ድረስ — በአውቶሞቲቭ ጉዞዎ ሁሉ አጋርዎ ነን።",
      all: "ሁሉም አገልግሎቶች",
      moreEyebrow: "ሌሎች አገልግሎቶች",
      moreTitle: "ሌሎች አገልግሎቶችን ይመልከቱ",
    },
    explore: (title: string) => `${title} — ተጨማሪ ይመልከቱ`,
    overview: "አጠቃላይ እይታ",
    atAGlance: "በአጭሩ",
    enquire: "ስለዚህ አገልግሎት ይጠይቁ",
    process: {
      eyebrow: "እንዴት እንደሚሠራ",
      title: "ከመጀመሪያው ጥሪ እስከ ጉዞዎ",
      lead: "ግልጽ የአራት ደረጃ ሂደት — ቀጥሎ ምን እንደሚሆን ሁልጊዜ ያውቃሉ።",
    },
  },

  faqs: {
    hero: { eyebrow: "እገዛ", title: "ጥያቄዎች እና መልሶች" },
    topicsLabel: "የጥያቄ ርዕሶች",
    topics: "ርዕሶች",
    topic: "ርዕስ",
    stillQuestion: "ሌላ ጥያቄ አለዎት?",
    happyToHelp: "ቡድናችን ለመርዳት ዝግጁ ነው።",
    contactUs: "ያግኙን",
  },

  gallery: {
    hero: { eyebrow: "በትኩረት", title: "የምስል ማዕከል" },
    open: (n: number, alt: string) => `ምስል ${n} ክፈት፦ ${alt}`,
    dialog: (n: number, total: number, alt: string) => `ምስል ${n} ከ${total}፦ ${alt}`,
    close: "ማዕከሉን ዝጋ",
    previous: "ቀዳሚ ምስል",
    next: "ቀጣይ ምስል",
  },

  contact: {
    hero: {
      eyebrow: "ከእኛ ጋር ይገናኙ",
      title: "ያግኙን",
      lead: "ይደውሉ፣ በቴሌግራም ወይም በዋትስአፕ ይጻፉልን፣ ወይም ጥያቄ ይላኩ። ለመርዳት ዝግጁ ነን።",
    },
    directLines: "ቀጥተኛ መስመሮች",
    telephone: "ስልክ",
    email: "ኢሜይል",
    showroom: "ማሳያ ክፍል",
    hours: "የሥራ ሰዓት",
    chat: "ውይይት",
    replyTime: "የምላሽ ጊዜ",
    landmark: "መለያ ቦታ",
    mapTitle: "የኤንኤፍ የመኪና አስመጪ ማሳያ ክፍል የሚያሳይ ካርታ",
    section: {
      eyebrow: "ጥያቄ ይላኩ",
      title: "እንዴት ልንረዳዎ እንችላለን?",
      lead: "ርዕስ ይምረጡ እና ስለሚፈልጉት በአጭሩ ይንገሩን። ቀሪውን እኛ እንከታተላለን።",
    },
  },

  form: {
    name: "ሙሉ ስም",
    email: "ኢሜይል",
    phone: "ስልክ",
    topic: "ርዕስ",
    message: "መልእክት",
    optional: "አማራጭ",
    required: "ግዴታ",
    requiredNote: "* ምልክት ያላቸው መስኮች ግዴታ ናቸው።",
    placeholder: "የሚፈልጉትን ይንገሩን…",
    privacy: "መረጃዎን የምንጠቀመው ለዚህ ጥያቄ ምላሽ ለመስጠት ብቻ ነው።",
    submit: "ጥያቄ ይላኩ",
    sending: "በመላክ ላይ…",
    success: "እናመሰግናለን። ጥያቄዎ ተልኳል፤ ቡድናችን በቅርቡ ያነጋግርዎታል።",
    failure: "ይቅርታ፣ ጥያቄዎ መላክ አልተቻለም። እባክዎ ይደውሉልን ወይም በቴሌግራም ወይም በዋትስአፕ ይጻፉልን።",
    generalEnquiry: "አጠቃላይ ጥያቄ",
    servicesGroup: "አገልግሎቶች",
    vehiclesGroup: "ተሽከርካሪዎች",
    errors: {
      name: "እባክዎ ስምዎን ያስገቡ።",
      email: "እባክዎ ትክክለኛ የኢሜይል አድራሻ ያስገቡ ወይም ባዶ ይተዉት።",
      phone: "እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ።",
      message: "እባክዎ ትንሽ ተጨማሪ ይንገሩን (ቢያንስ 10 ፊደላት)።",
    },
  },

  footer: {
    blurb: "የተሽከርካሪ ማስመጣት እና ሽያጭ፣ የኤሌክትሪክ ተሽከርካሪዎች፣ ተጨማሪ ዕቃዎች እና መለዋወጫዎች — በኢትዮጵያ ታማኝ የአውቶሞቲቭ አጋርዎ።",
    explore: "ያስሱ",
    services: "አገልግሎቶች",
    contact: "አድራሻ",
    rights: (year: number, legalName: string, name: string) => `© ${year} ${legalName} (${name})። መብቱ በሕግ የተጠበቀ ነው።`,
    backToTop: "ወደ ላይ",
  },

  notFound: {
    eyebrow: "ገጹ አልተገኘም",
    title: "ይህ መንገድ የትም አያደርስም።",
    lead: "የሚፈልጉት ገጽ ተዛውሮ ወይም ተሰርዞ ሊሆን ይችላል።",
    backHome: "ወደ መነሻ ገጽ",
    exploreVehicles: "ተሽከርካሪዎችን ይመልከቱ",
  },
};
