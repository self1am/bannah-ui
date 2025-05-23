import perfumeSet from "./perfumes_18_to_100.json";

// The six image paths to choose from
const imagePaths = [
  '/images/perfume-santal-33.jpg',
  '/images/perfume-black-orchid.jpg',
  '/images/perfume-jadore.jpg',
  '/images/perfume-bleu-de-chanel.jpg',
  '/images/perfume-aventus.jpg',
  '/images/perfume-lightblue.jpg'
];

const realPerfumeNames = [
  "Santal 33",
  "Black Orchid",
  "J'adore",
  "Bleu de Chanel",
  "Aventus",
  "Light Blue"
];

const perfumeData = perfumeSet.map(perfume => {
  // Get a random index
  const randomIndex = Math.floor(Math.random() * realPerfumeNames.length);
  const realName = realPerfumeNames[randomIndex];
  
  return {
    ...perfume,
    name: realName,
    slug: realName.toLowerCase().replace(/['\s]/g, '-'),
    image: imagePaths[randomIndex]
  };
});

const updatedData = perfumeData;


export const perfumes = [
  {
    id: 1,
    name: "Orto Parisi",
    brand: "Terroni",
    slug: "orto-parisi",
    notes: ["Woody", "Amber", "Leather"],
    image: "/images/perfumes/Terroni-by-OrtoParisi.jpeg",
    price: 700,
    description:
      "A bold and earthy fragrance with notes of leather and amber. Perfect for the adventurous spirit.",
    rating: 4.8,
    tags: ["woody", "masculine", "signature"],
    mood: ["bold", "mystic"],
    featured: true,
  },
  {
    id: 2,
    name: "Baronda",
    brand: "Nasomatto",
    slug: "baronda",
    notes: ["Woody", "Whiskey", "Musky"],
    image: "/images/perfumes/Baraonda by Nasomatto.jpeg",
    price: 370,
    description:
      "A rich and intoxicating scent with notes of whiskey and wood. Perfect for evening wear.",
    rating: 4.9,
    tags: ["woody", "masculine", "signature"],
    mood: ["mystic", "fresh"],
    featured: false,
  },
  {
    id: 3,
    name: "Last Birthday Cake",
    brand: "Toskovat'",
    slug: "last-birthday-cake",
    notes: ["Sweet", "Smoky", "Amber"],
    image: "/images/perfumes/Last Birthday Cake by Toskovat' .jpeg",
    price: 370,
    description:
      "A sweet and smoky fragrance with notes of cake and amber. Perfect for special occasions.",
    rating: 4.3,
    tags: ["sweet", "feminine", "signature"],
    mood: ["romantic", "fresh"],
    featured: true,
  },
  {
    id: 4,
    name: "Geber",
    brand: "Hadarah Perfumes",
    slug: "geber",
    notes: ["Spicy", "Amber", "Citrus"],
    image: "/images/perfumes/Geber by Hadarah Perfumes.jpeg",
    price: 270,
    description:
      "A spicy and citrusy fragrance with notes of amber and exotic spices. Perfect for everyday wear.",
    rating: 4.6,
    tags: ["spicy", "unisex", "signature"],
    mood: ["bold", "mystic"],
    featured: false,
  },
  {
    id: 5,
    name: "Hibiscus Mahajád",
    brand: "Maison Crivelli",
    slug: "hibiscus-mahajad",
    notes: ["Floral", "Fruity", "Woody"],
    image: "/images/perfumes/Hibiscus Mahajád - Maison Crivelli.jpeg",
    price: 370,
    description:
      "Allow yourself to give in to the flamboyant facets of Hibiscus Mahajád! Developed in partnership with star perfumer Quentin Bisch, this very first extrait de parfum was inspired by the taste of hibiscus tea in a gemstone market.",
    rating: 4.6,
    tags: ["floral", "feminine", "signature"],
    mood: ["romantic", "fresh"],
    featured: false,
  },
  {
    id: 6,
    name: "Layton",
    brand: "Parfums de Marly",
    slug: "layton",
    notes: ["Spicy", "Woody", "Vanilla"],
    image: "/images/perfumes/Layton by Parfums de Marly .jpeg",
    price: 370,
    description:
      "A warm and spicy fragrance with notes of vanilla and wood. Perfect for evening wear.",
    rating: 4.8,
    tags: ["spicy", "masculine", "signature"],
    mood: ["bold", "mystic"],
    featured: false,
  },
  {
    id: 7,
    name: "Guidance",
    brand: "Amouage",
    slug: "guidance",
    notes: ["Woody", "Amber", "Fruity"],
    image: "/images/perfumes/Guidance by Amouage.jpeg",
    price: 470,
    description:
      "A fruity and woody fragrance with notes of amber and exotic fruits. Perfect for special occasions.",
    rating: 4.7,
    tags: ["woody", "feminine", "signature"],
    mood: ["romantic", "fresh"],
    featured: true,
  },
  {
    id: 8,
    name: "Rêves D’or",
    brand: "Henry Jacques",
    slug: "reves-dor",
    notes: ["Musky", "Powdery", "Rose"],
    image: "/images/perfumes/Rêves D’or by Henry Jacques.jpeg",
    price: 470,
    description:
      "A musky and powdery fragrance with notes of rose and amber. Perfect for everyday wear.",
    rating: 4.5,
    tags: ["musky", "feminine", "signature"],
    mood: ["romantic", "fresh"],
    featured: true,
  },
  {
    id: 9,
    name: "Empressa",
    brand: "Penhaligon's",
    slug: "empressa",
    notes: ["Citrus", "Fruity", "Woody"],
    image: "/images/perfumes/Empressa by Penhaligon's .jpeg",
    price: 270,
    description:
      "Top notes are Blood Orange, Peach, Bergamot, Mandarin Orange and Pink Pepper; middle notes are Rose, Dewberry, Cassis, Neroli and Geranium; base notes are Patchouli, Brown sugar, Musk, Vanilla, Sandalwood, Olibanum, Cacao and Amber",
    rating: 4.9,
    tags: ["citrus", "feminine", "signature"],
    mood: ["romantic", "fresh"],
    featured: false,
  },
  {
    id: 10,
    name: "Burlington 1819",
    brand: "Roja Dove",
    slug: "burlington-1819",
    notes: ["Citrus", "Woody", "Spicy"],
    image: "/images/perfumes/Burlington 1819 by Roja Dove .jpeg",
    price: 270,
    description:
      "Roja Dove is a renowned British perfumer known for his luxurious and opulent fragrances. His creations often feature high-quality ingredients and are characterized by their complexity and depth. Roja Dove's perfumes are celebrated for their artistry and craftsmanship, making them a favorite among fragrance enthusiasts.",
    rating: 4.9,
    tags: ["citrus", "masculine", "signature"],
    mood: ["bold", "fresh"],
    featured: false,
  },
  {
    id: 11,
    name: "Mizu",
    brand: "DI SER",
    slug: "mizu",
    notes: ["Citrus", "Aromatic", "Spicy"],
    image: "/images/perfumes/Mizu by DI SER.jpeg",
    price: 340,
    description:
      "A fresh and aromatic fragrance with notes of citrus and spices. Perfect for everyday wear.",
    rating: 4.6,
    tags: ["citrus", "unisex", "signature"],
    mood: ["fresh", "calm"],
    featured: false,
  },
  {
    id: 12,
    name: "Oud Vanille",
    brand: "Cartier",
    slug: "oud-vanille",
    notes: ["Oud", "Vanilla", "Powdery"],
    image: "/images/perfumes/Oud Vanille by Cartier.jpeg",
    price: 540,
    description:
      "A fresh and aromatic fragrance with notes of citrus and spices. Perfect for everyday wear.",
    rating: 4.9,
    tags: ["oud", "feminine", "signature"],
    mood: ["fresh", "calm"],
    featured: false,
  },
  {
    id: 13,
    name: "Amber Oud",
    brand: "Bannah",
    slug: "amber-oud",
    notes: ["Amber", "Oud", "Rose"],
    image: "/images/amber-oud.png",
    price: 295,
    description:
      "A rich blend of deep amber and dark oud, softened with a hint of rose. Long-lasting and luxurious.",
    rating: 4.7,
    tags: ["warm", "evening", "unisex"],
    mood: ["romantic", "mystic"],
    featured: false,
  },
  {
    id: 14,
    name: "Velvet Bloom",
    brand: "Maison Elixir",
    slug: "velvet-bloom",
    notes: ["Jasmine", "Vanilla", "Musk"],
    image: "/images/VelvetBloom.jpg",
    price: 310,
    description:
      "A creamy floral with bold jasmine and comforting vanilla. Smooth and captivating.",
    rating: 4.5,
    tags: ["romantic", "floral", "feminine"],
    mood: ["romantic", "fresh"],
    featured: false,
  },
  {
    id: 15,
    name: "Santal Noir",
    brand: "Luxe Parfum",
    slug: "santal-noir",
    notes: ["Sandalwood", "Incense", "Cedar"],
    image: "/images/perfume-santal.jpg",
    price: 275,
    description:
      "A deep, woody fragrance with incense and creamy sandalwood. Minimalist luxury.",
    rating: 4.8,
    tags: ["woody", "masculine", "signature"],
    mood: ["bold", "mystic"],
    featured: false,
  },
  {
    id: 16,
    name: "Citrus Breeze",
    brand: "Aqua Essence",
    slug: "citrus-breeze",
    notes: ["Lemon", "Bergamot", "Mint"],
    image: "/images/perfume-citrus.jpg",
    price: 250,
    description:
      "A refreshing burst of citrus with a hint of mint. Perfect for hot summer days.",
    rating: 4.3,
    tags: ["fresh", "citrus", "unisex"],
    mood: ["fresh", "calm"],
    featured: false,
  },
  {
    id: 17,
    name: "Rose Gold",
    brand: "Floral Luxe",
    slug: "rose-gold",
    notes: ["Rose", "Peony", "Musk"],
    image: "/images/perfume-rose.jpg",
    price: 320,
    description:
      "A luxurious floral blend of rose and peony, with a soft musk base. Elegant and timeless.",
    rating: 4.6,
    tags: ["floral", "elegant", "feminine"],
    mood: ["romantic", "luxury"],
    featured: false,
  },
  {
    id: 18,
    name: "Ocean Mist",
    brand: "Marine Scents",
    slug: "ocean-mist",
    notes: ["Sea Salt", "Citrus", "Jasmine"],
    image: "/images/perfume-ocean.jpg",
    price: 280,
    description:
      "A fresh aquatic fragrance with sea salt and citrus notes. Evokes the feeling of a breezy beach.",
    rating: 4.4,
    tags: ["fresh", "aquatic", "unisex"],
    mood: ["fresh", "calm"],
    featured: false,
  },
  {
    id: 19,
    name: "Midnight Amber",
    brand: "Bannah",
    slug: "midnight-amber",
    notes: ["Amber", "Vanilla", "Sandalwood"],
    image: "/images/perfume-midnight.jpg",
    price: 300,
    description:
      "A warm and inviting fragrance with amber and vanilla, perfect for evening wear.",
    rating: 4.9,
    tags: ["warm", "evening", "unisex"],
    mood: ["romantic", "mystic"],
    featured: false,
  },
  {
    id: 20,
    name: "Spicy Oud",
    brand: "Oud Collection",
    slug: "spicy-oud",
    notes: ["Oud", "Spices", "Leather"],
    image: "/images/perfume-spicy.jpg",
    price: 350,
    description:
      "A bold and spicy fragrance with rich oud and leather notes. Perfect for the confident wearer.",
    rating: 4.5,
    tags: ["spicy", "masculine", "signature"],
    mood: ["bold", "mystic"],
    featured: false,
  },
  {
    id: 21,
    name: "Floral Dream",
    brand: "Gardenia",
    slug: "floral-dream",
    notes: ["Jasmine", "Rose", "Peach"],
    image: "/images/perfume-floral.jpg",
    price: 290,
    description:
      "A dreamy floral fragrance with jasmine and rose, balanced with a hint of peach.",
    rating: 4.6,
    tags: ["floral", "feminine", "signature"],
    mood: ["romantic", "fresh"],
    featured: false,
  },
  {
    id: 22,
    name: "Cedarwood Essence",
    brand: "Woodland Scents",
    slug: "cedarwood-essence",
    notes: ["Cedarwood", "Amber", "Musk"],
    image: "/images/perfume-cedarwood.jpg",
    price: 270,
    description:
      "A warm and earthy fragrance with cedarwood and amber. Perfect for everyday wear.",
    rating: 4.4,
    tags: ["woody", "unisex", "signature"],
    mood: ["bold", "calm"],
    featured: false,
  },
  ...updatedData,
];
export const perfumeBrands = [
  {
    id: 1,
    name: "Bannah",
    image: "/images/brand-bannah.jpg",
  },
  {
    id: 2,
    name: "Maison Elixir",
    image: "/images/brand-maison.jpg",
  },
  {
    id: 3,
    name: "Luxe Parfum",
    image: "/images/brand-luxe.jpg",
  },
  // Add more brands as needed
];
export const perfumeNotes = [
  {
    id: 1,
    name: "Amber",
    description: "Warm and resinous, often used in oriental fragrances.",
  },
  {
    id: 2,
    name: "Oud",
    description: "Rich and woody, derived from agarwood.",
  },
  {
    id: 3,
    name: "Rose",
    description: "Classic floral note, romantic and elegant.",
  },
  // Add more notes as needed
];
