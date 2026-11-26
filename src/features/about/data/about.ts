import type { Locale } from "@/i18n/config";
import type { Feature } from "@/types";

/**
 * Brand copy based on the NF CAR IMPORTER Brand Guidelines (2026): brand
 * overview, essence, purpose, vision, mission and keywords. Still contains no
 * figures, founding year or awards (README → "Content to confirm").
 */

/**
 * A dated step in Nigat's story, shown as the About timeline.
 * CONFIRM: fill in from Nigat management (when and why the business started,
 * first imports, milestones). Add a real photo where one exists.
 */
export interface Milestone {
  year: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
}

interface AboutContent {
  intro: { title: string; lead: string };
  /** What the business does, in three short statements (shown in "Our story"). */
  topics: Feature[];
  /** Timeline. Hidden while empty. */
  milestones: Milestone[];
  approachSteps: Feature[];
  /** Brand keywords (guideline: Discovery & Research → KeyWords). */
  keywords: string[];
  /** Brand essence, vision and mission (guideline: Brand Core). */
  essence: string;
  vision: string;
  mission: string;
  /** Meaning of the name and the logo concept (guideline: Brand Personality, Brand Logo). */
  name: { title: string; paragraphs: string[]; marks: { label: string; value: string }[] };
}

const ABOUT: Record<Locale, AboutContent> = {
  en: {
    intro: {
      title: "Importing, made straightforward.",
      lead: "We bring customers closer to the vehicles they want, making vehicle importation more accessible, straightforward and dependable.",
    },
    topics: [
      {
        title: "Customer focused",
        description:
          "Every import starts with your needs and preferences, so the vehicle we source is the one you want.",
      },
      {
        title: "Reliability",
        description: "Quality vehicles and dependable service that let you move forward with confidence.",
      },
      {
        title: "A lasting partnership",
        description:
          "Our relationship extends beyond the point of purchase, supporting you throughout your automotive journey.",
      },
    ],
    milestones: [],
    approachSteps: [
      {
        title: "Understand",
        description: "We start by understanding the vehicle you want, how you will use it and your budget.",
      },
      {
        title: "Source & import",
        description:
          "We source a quality vehicle that meets your needs and keep you informed through the importation process.",
      },
      {
        title: "Support",
        description: "We stay with you after delivery, with accessories, spare parts and after-sales support.",
      },
    ],
    keywords: ["Reliability", "Confidence", "Movement", "Trust", "Forward Moving", "Precision", "Partnership"],
    essence: "Making every automotive journey a step toward the future.",
    vision:
      "To become a trusted and recognized name in the automotive industry, known for connecting customers with quality vehicles, dependable importation services, and new opportunities in mobility.",
    mission:
      "To make vehicle importation accessible, reliable, and straightforward by sourcing quality vehicles, delivering professional customer service, and building lasting relationships through transparency, trust, and commitment to customer satisfaction.",
    name: {
      title: "Bringer of Dawn",
      paragraphs: [
        "Our name is inspired by the meaning “Bringer of Dawn” — new possibilities and forward movement. Like a new day, we exist to open the road ahead, helping individuals and businesses make confident automotive decisions.",
        "The NF mark joins the initials N and F with the shape of a vehicle wheel rim: a symbol of motion, performance and progress. We earn trust not through promises, but through consistency, responsibility and the value we deliver.",
      ],
      marks: [
        { label: "N + F", value: "Our initials, joined as one monogram" },
        { label: "The rim", value: "Motion, performance and automotive expertise" },
        { label: "Drive the Future", value: "Our promise to every customer" },
      ],
    },
  },
  am: {
    intro: {
      title: "ማስመጣት፣ ቀላል ሆኖ።",
      lead: "ደንበኞችን ወደሚፈልጉት ተሽከርካሪ እናቀርባለን፤ የተሽከርካሪ ማስመጣትን ይበልጥ ተደራሽ፣ ቀላል እና አስተማማኝ እናደርጋለን።",
    },
    topics: [
      {
        title: "ደንበኛ ተኮር",
        description: "እያንዳንዱ ማስመጣት በፍላጎትዎ እና በምርጫዎ ይጀምራል፤ የምናፈላልገው ተሽከርካሪ እርስዎ የሚፈልጉት ነው።",
      },
      {
        title: "አስተማማኝነት",
        description: "በራስ መተማመን ወደፊት እንዲራመዱ የሚያስችሉ ጥራት ያላቸው ተሽከርካሪዎች እና አስተማማኝ አገልግሎት።",
      },
      {
        title: "ዘላቂ አጋርነት",
        description: "ግንኙነታችን ከግዢው በኋላም ይቀጥላል፤ በአውቶሞቲቭ ጉዞዎ ሁሉ እንደግፍዎታለን።",
      },
    ],
    milestones: [],
    approachSteps: [
      {
        title: "መረዳት",
        description: "የሚፈልጉትን ተሽከርካሪ፣ እንዴት እንደሚጠቀሙበት እና በጀትዎን በመረዳት እንጀምራለን።",
      },
      {
        title: "ማፈላለግ እና ማስመጣት",
        description: "ፍላጎትዎን የሚያሟላ ጥራት ያለው ተሽከርካሪ እናፈላልጋለን፤ በማስመጣቱ ሂደትም መረጃ እንሰጥዎታለን።",
      },
      {
        title: "ድጋፍ",
        description: "ከርክክብ በኋላም በተጨማሪ ዕቃዎች፣ በመለዋወጫዎች እና ከሽያጭ በኋላ ድጋፍ ከጎንዎ ነን።",
      },
    ],
    keywords: ["አስተማማኝነት", "በራስ መተማመን", "እንቅስቃሴ", "እምነት", "ወደፊት መራመድ", "ትክክለኛነት", "አጋርነት"],
    essence: "እያንዳንዱን የአውቶሞቲቭ ጉዞ ወደ ወደፊቱ የሚወስድ እርምጃ ማድረግ።",
    vision:
      "ደንበኞችን ጥራት ካላቸው ተሽከርካሪዎች፣ ከአስተማማኝ የማስመጣት አገልግሎቶች እና ከአዳዲስ የእንቅስቃሴ ዕድሎች ጋር በማገናኘት የሚታወቅ፣ በአውቶሞቲቭ ዘርፍ ታማኝ እና ዕውቅና ያለው ስም መሆን።",
    mission:
      "ጥራት ያላቸውን ተሽከርካሪዎች በማፈላለግ፣ ሙያዊ የደንበኞች አገልግሎት በመስጠት እና በግልጽነት፣ በእምነት እና ለደንበኛ እርካታ ባለን ቁርጠኝነት ዘላቂ ግንኙነቶችን በመገንባት የተሽከርካሪ ማስመጣትን ተደራሽ፣ አስተማማኝ እና ቀላል ማድረግ።",
    name: {
      title: "የንጋት አብሣሪ",
      paragraphs: [
        "ስማችን “የንጋት አብሣሪ” ከሚለው ትርጉም የመነጨ ነው — አዳዲስ ዕድሎችን እና ወደፊት መራመድን ይወክላል። እንደ አዲስ ቀን ከፊት ያለውን መንገድ ለመክፈት እንሠራለን፤ ግለሰቦችና ድርጅቶች በእርግጠኝነት የአውቶሞቲቭ ውሳኔ እንዲያደርጉ እንረዳለን።",
        "የNF ምልክታችን የN እና F ፊደላትን ከመኪና ጎማ ሪም ቅርጽ ጋር ያጣምራል፤ የእንቅስቃሴ፣ የብቃት እና የዕድገት ምልክት ነው። እምነትን የምናተርፈው በቃል ሳይሆን በወጥነት፣ በኃላፊነት እና በምንሰጠው እሴት ነው።",
      ],
      marks: [
        { label: "N + F", value: "የስማችን የመጀመሪያ ፊደላት፣ በአንድ ምልክት የተጣመሩ" },
        { label: "ሪሙ", value: "እንቅስቃሴ፣ ብቃት እና የአውቶሞቲቭ ዕውቀት" },
        { label: "የወደፊቱን ያሽከርክሩ", value: "ለእያንዳንዱ ደንበኛ ያለን ቃል" },
      ],
    },
  },
};

export function getAbout(locale: Locale): AboutContent {
  return ABOUT[locale];
}
