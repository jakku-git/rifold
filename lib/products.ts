export interface Product {
  id: number
  name: string
  slug: string
  description: string
  longDescription: string
  price: number
  compareAtPrice?: number
  image: string
  gallery: string[]
  category: string
  subcategory?: string
  tags: string[]
  inStock: boolean
  quantity: number
  sku: string
  ingredients: {
    name: string
    amount: string
    dailyValue?: string
  }[]
  benefits: string[]
  usage: {
    servingSize: string
    servingsPerContainer: number
    directions: string[]
    warnings?: string[]
  }
  shipping: {
    weight: string
    dimensions: string
    freeShipping: boolean
  }
  reviews: {
    averageRating: number
    totalReviews: number
    verifiedPurchases: number
  }
  relatedProducts: number[]
}

export const products: Product[] = [
  {
    id: 1,
    name: "Grape Seed Extract",
    slug: "grape-seed-extract",
    description: "Premium grape seed extract capsules with powerful antioxidants",
    longDescription: "Our Grape Seed Extract features a modern, sleek bottle design containing 60 capsules of high-potency grape seed extract. The capsules are designed for optimal absorption of polyphenols and proanthocyanidins, and the minimalist packaging reflects our commitment to quality and purity.",
    price: 29.99,
    compareAtPrice: 39.99,
    image: "/product (1).png",
    gallery: [
      "/product (2).png",
      "/product (3).png",
      "/product (4).png"
    ],
    category: "antioxidants",
    subcategory: "plant-extracts",
    tags: ["grape-seed", "antioxidants", "heart-health", "skin-health"],
    inStock: true,
    quantity: 100,
    sku: "GSE-001",
    ingredients: [
      { name: "Grape Seed Extract (Vitis vinifera)", amount: "500 mg" },
      { name: "Proanthocyanidins", amount: "95%", dailyValue: "N/A" },
      { name: "Vegetable Cellulose (capsule)", amount: "100 mg" }
    ],
    benefits: [
      "Supports cardiovascular health",
      "Promotes antioxidant activity",
      "Aids in skin health and elasticity",
      "Helps maintain healthy blood pressure"
    ],
    usage: {
      servingSize: "1 capsule",
      servingsPerContainer: 60,
      directions: [
        "Take one capsule daily with a meal",
        "Best taken in the morning",
        "Store in a cool, dry place"
      ],
      warnings: [
        "Consult with a healthcare professional before use if pregnant, nursing, or taking medications",
        "Keep out of reach of children"
      ]
    },
    shipping: {
      weight: "0.2 lbs",
      dimensions: "2.5 x 2.5 x 4 inches",
      freeShipping: true
    },
    reviews: {
      averageRating: 4.8,
      totalReviews: 245,
      verifiedPurchases: 230
    },
    relatedProducts: [2, 3, 6]
  },
  {
    id: 2,
    name: "Propolis Liquid",
    slug: "propolis-liquid",
    description: "Pure propolis extract in alcohol-free liquid form",
    longDescription: "Our Propolis Liquid comes in a premium glass bottle containing 60ml of pure propolis extract. The amber-tinted liquid is designed for easy absorption, and the elegant packaging features a modern design with a dropper cap for precise dosing. The formula is alcohol-free and contains natural propolis extract for immune support.",
    price: 34.99,
    compareAtPrice: 44.99,
    image: "/product (2).png",
    gallery: [
      "/product (3).png",
      "/product (4).png",
      "/product (5).png"
    ],
    category: "immunity",
    subcategory: "bee-products",
    tags: ["propolis", "immune-support", "antioxidant", "natural"],
    inStock: true,
    quantity: 85,
    sku: "PRP-002",
    ingredients: [
      { name: "Propolis Extract", amount: "1000 mg per serving", dailyValue: "N/A" },
      { name: "Purified Water", amount: "30 ml" },
      { name: "Natural Glycerin", amount: "5 ml" }
    ],
    benefits: [
      "Supports immune system function",
      "Promotes antioxidant activity",
      "Aids in natural defense",
      "Supports throat health"
    ],
    usage: {
      servingSize: "1 ml (20 drops)",
      servingsPerContainer: 60,
      directions: [
        "Take 20 drops daily",
        "Can be taken directly or mixed with water",
        "Best taken in the morning",
        "Store in a cool, dry place"
      ],
      warnings: [
        "Consult with a healthcare professional before use if pregnant, nursing, or allergic to bee products",
        "Keep out of reach of children"
      ]
    },
    shipping: {
      weight: "0.3 lbs",
      dimensions: "3 x 3 x 4.5 inches",
      freeShipping: true
    },
    reviews: {
      averageRating: 4.9,
      totalReviews: 189,
      verifiedPurchases: 175
    },
    relatedProducts: [1, 4, 5]
  },
  {
    id: 3,
    name: "Shark Cartilage",
    slug: "shark-cartilage",
    description: "Premium shark cartilage capsules for joint support",
    longDescription: "Shark Cartilage is presented in a premium bottle containing 60 capsules of pure shark cartilage powder. The innovative packaging design features a clean, modern aesthetic with clear dosage information. Each capsule contains a potent dose of chondroitin and other beneficial compounds from sustainably sourced shark cartilage.",
    price: 24.99,
    compareAtPrice: 29.99,
    image: "/product (3).png",
    gallery: [
      "/product (4).png",
      "/product (5).png",
      "/product (6).png"
    ],
    category: "joint-health",
    subcategory: "cartilage",
    tags: ["shark-cartilage", "joint-health", "chondroitin", "mobility"],
    inStock: true,
    quantity: 120,
    sku: "SHC-003",
    ingredients: [
      { name: "Shark Cartilage Powder", amount: "750 mg", dailyValue: "N/A" },
      { name: "Chondroitin Sulfate", amount: "200 mg", dailyValue: "N/A" },
      { name: "Vegetable Cellulose (capsule)", amount: "100 mg" }
    ],
    benefits: [
      "Supports joint health and mobility",
      "Promotes cartilage health",
      "Aids in joint comfort",
      "Supports connective tissue"
    ],
    usage: {
      servingSize: "2 capsules",
      servingsPerContainer: 30,
      directions: [
        "Take two capsules daily with meals",
        "Best taken with breakfast or lunch",
        "Store in a cool, dry place"
      ],
      warnings: [
        "Consult with a healthcare professional before use if pregnant, nursing, or taking medications",
        "Not suitable for those with seafood allergies"
      ]
    },
    shipping: {
      weight: "0.4 lbs",
      dimensions: "3 x 3 x 5 inches",
      freeShipping: true
    },
    reviews: {
      averageRating: 4.7,
      totalReviews: 156,
      verifiedPurchases: 142
    },
    relatedProducts: [1, 4, 6]
  },
  {
    id: 4,
    name: "Bilberry Extract",
    slug: "bilberry-extract",
    description: "Premium bilberry extract capsules for eye health",
    longDescription: "Bilberry Extract features a sophisticated bottle design with a premium container that protects the active compounds. The packaging includes a moisture-lock cap and clear storage instructions. Each bottle contains 60 capsules of our concentrated bilberry extract, rich in anthocyanins and other beneficial compounds for optimal eye health support.",
    price: 39.99,
    compareAtPrice: 49.99,
    image: "/product (4).png",
    gallery: [
      "/product (5).png",
      "/product (6).png",
      "/product (1).png"
    ],
    category: "eye-health",
    subcategory: "berry-extracts",
    tags: ["bilberry", "eye-health", "antioxidant", "vision-support"],
    inStock: true,
    quantity: 75,
    sku: "BLB-004",
    ingredients: [
      { name: "Bilberry Extract (Vaccinium myrtillus)", amount: "500 mg", dailyValue: "N/A" },
      { name: "Anthocyanins", amount: "25%", dailyValue: "N/A" },
      { name: "Vegetable Cellulose (capsule)", amount: "100 mg" }
    ],
    benefits: [
      "Supports eye health and vision",
      "Promotes antioxidant activity",
      "Aids in night vision support",
      "Supports retinal health"
    ],
    usage: {
      servingSize: "1 capsule",
      servingsPerContainer: 60,
      directions: [
        "Take one capsule daily with a meal",
        "Best taken in the morning",
        "Store in a cool, dry place"
      ],
      warnings: [
        "Consult with a healthcare professional before use if pregnant, nursing, or taking medications",
        "Keep out of reach of children"
      ]
    },
    shipping: {
      weight: "0.2 lbs",
      dimensions: "2.5 x 2.5 x 4 inches",
      freeShipping: true
    },
    reviews: {
      averageRating: 4.8,
      totalReviews: 203,
      verifiedPurchases: 195
    },
    relatedProducts: [2, 5, 6]
  },
  {
    id: 5,
    name: "Celery Extract",
    slug: "celery-extract",
    description: "Pure celery seed extract in easy-to-swallow capsules",
    longDescription: "Our Celery Extract comes in a modern, child-resistant bottle containing 60 capsules. The capsules feature a clean, scientific design with clear dosage information and a premium feel that reflects the quality of the ingredients. Each capsule contains a potent dose of celery seed extract, rich in beneficial compounds for joint and cardiovascular support.",
    price: 19.99,
    compareAtPrice: 24.99,
    image: "/product (5).png",
    gallery: [
      "/product (6).png",
      "/product (1).png",
      "/product (2).png"
    ],
    category: "joint-health",
    subcategory: "plant-extracts",
    tags: ["celery", "joint-health", "heart-health", "natural"],
    inStock: true,
    quantity: 150,
    sku: "CEL-005",
    ingredients: [
      { name: "Celery Seed Extract", amount: "500 mg", dailyValue: "N/A" },
      { name: "3-n-butylphthalide (3nB)", amount: "5 mg", dailyValue: "N/A" },
      { name: "Vegetable Cellulose (capsule)", amount: "100 mg" }
    ],
    benefits: [
      "Supports joint comfort and mobility",
      "Promotes cardiovascular health",
      "Aids in natural inflammation response",
      "Supports healthy blood pressure"
    ],
    usage: {
      servingSize: "1 capsule",
      servingsPerContainer: 60,
      directions: [
        "Take one capsule daily with a meal",
        "Best taken in the morning",
        "Store in a cool, dry place"
      ],
      warnings: [
        "Consult with a healthcare professional before use if pregnant, nursing, or taking blood thinners",
        "Not suitable for those with celery allergies"
      ]
    },
    shipping: {
      weight: "0.2 lbs",
      dimensions: "2.5 x 2.5 x 4 inches",
      freeShipping: true
    },
    reviews: {
      averageRating: 4.7,
      totalReviews: 178,
      verifiedPurchases: 165
    },
    relatedProducts: [1, 3, 4]
  },
  {
    id: 6,
    name: "Kangaroo Essence",
    slug: "kangaroo-essence",
    description: "Traditional kangaroo essence in liquid form",
    longDescription: "Kangaroo Essence is presented in a premium glass bottle with a modern, minimalist design. The bottle contains 60ml of our traditional kangaroo essence formula, with a sophisticated label that clearly displays the preparation method. The packaging reflects the premium nature of the product and its focus on traditional wellness support.",
    price: 27.99,
    compareAtPrice: 34.99,
    image: "/product (6).png",
    gallery: [
      "/product (1).png",
      "/product (2).png",
      "/product (3).png"
    ],
    category: "traditional",
    subcategory: "animal-essences",
    tags: ["kangaroo", "traditional", "wellness", "energy"],
    inStock: true,
    quantity: 90,
    sku: "KNG-006",
    ingredients: [
      { name: "Kangaroo Essence", amount: "30 ml", dailyValue: "N/A" },
      { name: "Purified Water", amount: "25 ml" },
      { name: "Natural Preservatives", amount: "5 ml" }
    ],
    benefits: [
      "Supports traditional wellness practices",
      "Promotes natural energy",
      "Aids in vitality support",
      "Supports overall wellbeing"
    ],
    usage: {
      servingSize: "1 ml (20 drops)",
      servingsPerContainer: 60,
      directions: [
        "Take 20 drops daily",
        "Can be taken directly or mixed with water",
        "Best taken in the morning",
        "Store in a cool, dry place"
      ],
      warnings: [
        "Consult with a healthcare professional before use if pregnant, nursing, or taking medications",
        "Keep out of reach of children"
      ]
    },
    shipping: {
      weight: "0.2 lbs",
      dimensions: "2.5 x 2.5 x 4 inches",
      freeShipping: true
    },
    reviews: {
      averageRating: 4.8,
      totalReviews: 167,
      verifiedPurchases: 155
    },
    relatedProducts: [1, 2, 5]
  }
]

export const categories = [
  { id: "all", name: "All Products" },
  { id: "vitamins", name: "Vitamins" },
  { id: "minerals", name: "Minerals" },
  { id: "essentials", name: "Essentials" },
  { id: "immunity", name: "Immunity" },
  { id: "digestion", name: "Digestion" }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug)
}

export function getRelatedProducts(productId: number): Product[] {
  const product = products.find(p => p.id === productId)
  if (!product) return []
  return products.filter(p => product.relatedProducts.includes(p.id))
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter(product => product.category === category)
}

export function getProductsByTag(tag: string): Product[] {
  return products.filter(product => product.tags.includes(tag))
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
} 