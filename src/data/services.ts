import {
  BadgeCheck,
  HeartHandshake,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  name: string;
  tag: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    name: "Teeth whitening",
    tag: "A little extra glow",
    description: "A brighter smile, made just for you.",
    icon: Sparkles,
  },
  {
    name: "Porcelain veneers",
    tag: "Smile design",
    description: "Thoughtful details for a smile you love.",
    icon: Smile,
  },
  {
    name: "Zirconia crowns",
    tag: "Made to feel natural",
    description: "Strong, natural-looking tooth restoration.",
    icon: ShieldCheck,
  },
  {
    name: "Dental implants",
    tag: "Confident care",
    description: "A lasting way to feel like yourself again.",
    icon: Stethoscope,
  },
  {
    name: "Braces",
    tag: "Your smile journey",
    description: "A straighter smile, one step at a time.",
    icon: BadgeCheck,
  },
  {
    name: "Gap closure",
    tag: "Made for you",
    description: "Small changes can make a big difference.",
    icon: HeartHandshake,
  },
  {
    name: "Checkups & cleaning",
    tag: "Everyday care",
    description: "A fresh start for your everyday smile.",
    icon: Zap,
  },
];