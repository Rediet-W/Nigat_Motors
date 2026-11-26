import type { Locale } from "@/i18n/config";
import type { FaqGroup } from "@/types";

/**
 * FAQ content. `id` is the stable anchor for each group (the same in every
 * language).
 *
 * "Buying, payment & delivery" holds the questions buyers ask most. Their
 * answers MUST come from Nigat's sales team: an item whose `answer` is
 * `null` is hidden on the site, and a group with no answered items is hidden
 * too. CONFIRM each answer with concrete timeframes, steps, documents and
 * response times.
 */
type DraftFaqGroup = Omit<FaqGroup, "items"> & { items: { question: string; answer: string | null }[] };

const FAQ_GROUPS: Record<Locale, DraftFaqGroup[]> = {
  en: [
    {
      id: "buying",
      title: "Buying, payment & delivery",
      items: [
        { question: "How much does a vehicle cost?", answer: null },
        { question: "How do I pay: deposit, bank transfer or financing?", answer: null },
        { question: "Are customs duty and taxes included in the price?", answer: null },
        { question: "How long does importing a vehicle take?", answer: null },
        { question: "What warranty do I get?", answer: null },
        { question: "Where can I see the car before buying?", answer: null },
      ],
    },
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
            "Browse the Vehicles page: each model shows its price and availability where confirmed. For anything else, call us, message us on Telegram or WhatsApp, or send an enquiry about the model.",
        },
        {
          question: "Can you help me choose between vehicle types?",
          answer:
            "Yes. Tell us how you plan to use the vehicle — commuting, family travel or work — and we will talk you through the models that suit you best.",
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
            "Call us, message us on Telegram or WhatsApp, or use the enquiry form on our contact page. Including the model or part you are looking for helps us respond faster.",
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
      id: "buying",
      title: "ግዢ፣ ክፍያ እና ርክክብ",
      items: [
        { question: "የተሽከርካሪ ዋጋ ስንት ነው?", answer: null },
        { question: "እንዴት እከፍላለሁ፦ ቅድመ ክፍያ፣ የባንክ ዝውውር ወይስ ብድር?", answer: null },
        { question: "የጉምሩክ ቀረጥ እና ታክስ በዋጋው ውስጥ ተካትቷል?", answer: null },
        { question: "ተሽከርካሪ ለማስመጣት ምን ያህል ጊዜ ይወስዳል?", answer: null },
        { question: "ምን ዓይነት ዋስትና አገኛለሁ?", answer: null },
        { question: "ከመግዛቴ በፊት መኪናውን የት ማየት እችላለሁ?", answer: null },
      ],
    },
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
            "የተሽከርካሪዎች ገጽን ይመልከቱ፤ እያንዳንዱ ሞዴል የተረጋገጠ ዋጋ እና ተገኝነት ካለ ያሳያል። ለሌላ ማንኛውም ጥያቄ ይደውሉልን፣ በቴሌግራም ወይም በዋትስአፕ ይጻፉልን፣ ወይም ስለ ሞዴሉ ጥያቄ ይላኩ።",
        },
        {
          question: "ከተሽከርካሪ ዓይነቶች መካከል እንድመርጥ ልትረዱኝ ትችላላችሁ?",
          answer:
            "አዎ። ተሽከርካሪውን እንዴት ለመጠቀም እንዳሰቡ ይንገሩን — ለዕለት ጉዞ፣ ለቤተሰብ ወይም ለሥራ — የሚስማሙዎትን ሞዴሎች እናስረዳዎታለን።",
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
            "ይደውሉልን፣ በቴሌግራም ወይም በዋትስአፕ ይጻፉልን፣ ወይም በአድራሻ ገጻችን ያለውን የጥያቄ ቅጽ ይጠቀሙ። የሚፈልጉትን ሞዴል ወይም መለዋወጫ ማካተት በፍጥነት ምላሽ እንድንሰጥ ይረዳናል።",
        },
        {
          question: "ጥያቄ ከላክሁ በኋላ ምን ይሆናል?",
          answer: "ከቡድናችን አንድ ባለሙያ መልእክትዎን ይመለከትና በሰጡት አድራሻ ያገኝዎታል።",
        },
      ],
    },
  ],
};

/** Groups with answered questions only; unanswered drafts stay hidden. */
export function getFaqGroups(locale: Locale): FaqGroup[] {
  return FAQ_GROUPS[locale]
    .map((group) => ({
      ...group,
      items: group.items.filter((item): item is { question: string; answer: string } => item.answer !== null),
    }))
    .filter((group) => group.items.length > 0);
}
