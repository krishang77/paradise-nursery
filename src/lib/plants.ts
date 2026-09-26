import monstera from "@/assets/monstera.jpg";
import fiddleLeafFig from "@/assets/fiddle-leaf-fig.jpg";
import snakePlant from "@/assets/snake-plant.jpg";
import goldenPothos from "@/assets/golden-pothos.jpg";
import stringOfPearls from "@/assets/string-of-pearls.jpg";
import spiderPlant from "@/assets/spider-plant.jpg";
import echeveria from "@/assets/echeveria.jpg";
import barrelCactus from "@/assets/barrel-cactus.jpg";
import aloeVera from "@/assets/aloe-vera.jpg";

export interface Plant {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const CATEGORIES = [
  { id: "leafy", label: "Leafy & statement", index: "01" },
  { id: "trailing", label: "Trailing & cascading", index: "02" },
  { id: "succulents", label: "Succulents & cacti", index: "03" },
] as const;

export const PLANTS: Plant[] = [
  {
    id: "monstera",
    name: "Monstera Deliciosa",
    description: "Big split leaves, forgiving light, and a near-indestructible streak.",
    price: 48,
    image: monstera,
    category: "leafy",
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    description: "A sculptural centerpiece that rewards a bright, steady window.",
    price: 62,
    image: fiddleLeafFig,
    category: "leafy",
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    description: "Upright, architectural, and happy to be ignored for a week.",
    price: 34,
    image: snakePlant,
    category: "leafy",
  },
  {
    id: "golden-pothos",
    name: "Golden Pothos",
    description: "Viney, fast, and perfect for a shelf where it can drape.",
    price: 28,
    image: goldenPothos,
    category: "trailing",
  },
  {
    id: "string-of-pearls",
    name: "String of Pearls",
    description: "Beads of green that tumble over the edge like a necklace.",
    price: 36,
    image: stringOfPearls,
    category: "trailing",
  },
  {
    id: "spider-plant",
    name: "Spider Plant",
    description: "Arching, variegated, and endlessly self-propagating.",
    price: 24,
    image: spiderPlant,
    category: "trailing",
  },
  {
    id: "echeveria",
    name: "Echeveria",
    description: "A tight rosette that thrives on neglect and bright light.",
    price: 18,
    image: echeveria,
    category: "succulents",
  },
  {
    id: "barrel-cactus",
    name: "Barrel Cactus",
    description: "Round, spiky, and basically a sculpture that photosynthesizes.",
    price: 22,
    image: barrelCactus,
    category: "succulents",
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    description: "Fleshy, useful, and the most forgiving plant on the bench.",
    price: 20,
    image: aloeVera,
    category: "succulents",
  },
];

export const formatPrice = (n: number) => `$${n}`;
