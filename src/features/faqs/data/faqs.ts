import type { Locale } from "@/i18n/config";
import type { FaqGroup } from "@/types";

/**
 * PLACEHOLDER CONTENT — answers describe how to use this website and the
 * enquiry process only. Confirm policies (pricing, financing, warranties,
 * opening hours) with NF Car Importer before adding them (README → "Content to confirm").
 *
 * `id` is the stable anchor for each group (the same in every language).
 */
const FAQ_GROUPS: Record<Locale, FaqGroup[]> = {
  en: [
    {
      id: "vehicles",
      title: "Vehicles",
      items: [
        {
          question: "Can you import a specific vehicle for me?",
          answer:
            "Yes. Tell us the vehicle you are looking for and your preferences, and our team will explain the options and next steps for importing it.",
        },
        {
          question: "How can I find out which vehicles are available?",
          answer:
            "Browse our vehicle categories, then send an enquiry for the type you are interested in. Our team will reply with current availability and details.",
        },
        {
          question: "Can you help me choose between vehicle types?",
          answer:
            "Yes. Tell us how you plan to use the vehicle — commuting, family travel or work — and we will talk you through the categories that suit you best.",
        },
        {
          question: "Can I arrange to see a vehicle in person?",
          answer:
            "Get in touch through the contact page or by phone and we will discuss arranging a visit at a convenient time.",
        },
      ],
    },
    {
      id: "services",
      title: "Services",
      items: [
        {
          question: "How do I book a service or inspection?",
          answer:
            "Send an enquiry choosing the service you need, or call us. Share your vehicle details and we will confirm the next steps with you.",
        },
        {
          question: "Can you help me source a specific part?",
          answer:
            "Yes — send us your vehicle details and a description of the part or accessory you need, and we will let you know what options are available.",
        },
      ],
    },
    {
      id: "getting-in-touch",
      title: "Getting in touch",
      items: [
        {
          question: "What is the best way to contact NF Car Importer?",
          answer:
            "Use the enquiry form on our contact page, call us, or send an email. Including your vehicle details or what you are looking for helps us respond faster.",
        },
        {
          question: "What happens after I send an enquiry?",
          answer:
            "A member of our team reviews your message and gets back to you using the contact details you provided.",
        },
      ],
    },
  ],
  am: [
    {
      id: "vehicles",
      title: "ተሽከርካሪዎች",
      items: [
        {
          question: "የምፈልገውን የተወሰነ ተሽከርካሪ ልታስመጡልኝ ትችላላችሁ?",
          answer:
            "አዎ። የሚፈልጉትን ተሽከርካሪ እና ምርጫዎችዎን ይንገሩን፤ ቡድናችን አማራጮቹን እና ለማስመጣት ቀጣይ እርምጃዎችን ያብራራልዎታል።",
        },
        {
          question: "የትኞቹ ተሽከርካሪዎች እንዳሉ እንዴት ማወቅ እችላለሁ?",
          answer:
            "የተሽከርካሪ ዓይነቶቻችንን ይመልከቱ፤ ከዚያም ለሚፈልጉት ዓይነት ጥያቄ ይላኩ። ቡድናችን በአሁኑ ጊዜ ያሉትን እና ዝርዝር መረጃዎችን ይዞ ምላሽ ይሰጥዎታል።",
        },
        {
          question: "ከተሽከርካሪ ዓይነቶች መካከል እንድመርጥ ልትረዱኝ ትችላላችሁ?",
          answer:
            "አዎ። ተሽከርካሪውን እንዴት ለመጠቀም እንዳሰቡ ይንገሩን — ለዕለት ጉዞ፣ ለቤተሰብ ወይም ለሥራ — የሚስማሙዎትን ዓይነቶች እናስረዳዎታለን።",
        },
        {
          question: "ተሽከርካሪውን በአካል ማየት እችላለሁ?",
          answer: "በአድራሻ ገጻችን ወይም በስልክ ያግኙን፤ በሚመችዎ ጊዜ ጉብኝት ስለማመቻቸት እንወያያለን።",
        },
      ],
    },
    {
      id: "services",
      title: "አገልግሎቶች",
      items: [
        {
          question: "አገልግሎት ወይም ምርመራ እንዴት ማስያዝ እችላለሁ?",
          answer:
            "የሚፈልጉትን አገልግሎት መርጠው ጥያቄ ይላኩ ወይም ይደውሉልን። የተሽከርካሪዎን ዝርዝር ያጋሩን፤ ቀጣይ እርምጃዎችን እናረጋግጥልዎታለን።",
        },
        {
          question: "የተወሰነ መለዋወጫ እንዳገኝ ልትረዱኝ ትችላላችሁ?",
          answer:
            "አዎ — የተሽከርካሪዎን ዝርዝር እና የሚፈልጉትን መለዋወጫ ወይም ተጨማሪ ዕቃ መግለጫ ይላኩልን፤ ያሉትን አማራጮች እናሳውቅዎታለን።",
        },
      ],
    },
    {
      id: "getting-in-touch",
      title: "እኛን ማግኘት",
      items: [
        {
          question: "ኤንኤፍ የመኪና አስመጪን ለማግኘት የተሻለው መንገድ ምንድነው?",
          answer:
            "በአድራሻ ገጻችን ያለውን የጥያቄ ቅጽ ይጠቀሙ፣ ይደውሉልን ወይም ኢሜይል ይላኩ። የተሽከርካሪዎን ዝርዝር ወይም የሚፈልጉትን ማካተት በፍጥነት ምላሽ እንድንሰጥ ይረዳናል።",
        },
        {
          question: "ጥያቄ ከላክሁ በኋላ ምን ይሆናል?",
          answer: "ከቡድናችን አንድ ባለሙያ መልእክትዎን ይመለከትና በሰጡት አድራሻ ያገኝዎታል።",
        },
      ],
    },
  ],
};

export function getFaqGroups(locale: Locale): FaqGroup[] {
  return FAQ_GROUPS[locale];
}

/** A short selection used in the FAQ previews. */
export function getFeaturedFaqs(locale: Locale) {
  return FAQ_GROUPS[locale].flatMap((group) => group.items).slice(0, 5);
}
