import type { FeaturedCategorySlug } from "@/lib/featured-categories";

export type MenuItem = { name: string; description: string };
export type SeasonalDrink = MenuItem & { id: string; category: FeaturedCategorySlug; categoryLabel: string };

/** Category membership is shared by the full menu and category links. */
export const seasonalDrinks: SeasonalDrink[] = [
  { id: "golden-harvest-chai", category: "chai", categoryLabel: "Chai", name: "Golden Harvest Chai", description: "Spiced chai with pumpkin syrup, topped with cinnamon cold foam." },
  { id: "autumn-spark", category: "refreshers", categoryLabel: "Infused Redbulls", name: "Autumn Spark", description: "Red Bull infused with orange, finished with cranberry juice." },
  { id: "milkyway-mocha", category: "mochas", categoryLabel: "Mocha", name: "Milkyway Mocha", description: "Espresso, milk, chocolate, caramel syrup, topped with cold foam and Milkyway sprinkles." },
  { id: "maple-morning-latte", category: "lattes", categoryLabel: "Latte", name: "Maple Morning Latte", description: "Espresso, milk, maple syrup, with caramel drizzle." },
  { id: "candy-apple-pop", category: "dirty-sodas", categoryLabel: "Soda", name: "Candy Apple Pop", description: "Sprite infused with green apple, caramel drizzle, and cream." },
  { id: "toasted-pumpkin-matcha", category: "matcha", categoryLabel: "Matcha", name: "Toasted Pumpkin Matcha", description: "Matcha with pumpkin and toasted marshmallow syrup, topped with marshmallow fluff." },
];

export function getSeasonalDrinks(category?: FeaturedCategorySlug): SeasonalDrink[] {
  return category ? seasonalDrinks.filter((drink) => drink.category === category) : seasonalDrinks;
}

export type MenuSection = { id: string; title: string; prices: string[]; servingNote: string; items: MenuItem[] };
// Descriptions and size prices follow the supplied menu-board photos.
// Confirm current availability and pricing with the shop before publishing.
export const menuSections: MenuSection[] = [
  {
    "id": "mochas",
    "title": "Mochas.",
    "servingNote": "Hot or iced",
    "prices": [
      "16oz$5.50",
      "20oz$6.50",
      "24oz$7.50"
    ],
    "items": [
      {
        "name": "Banana Mocha",
        "description": "Chocolate-based drink with banana flavor, topped with whipped cream and chocolate drizzle."
      },
      {
        "name": "Raspberry Mocha",
        "description": "Chocolate-based drink with raspberry flavor, topped with cold foam and chocolate drizzle."
      },
      {
        "name": "Peanut Butter Mocha",
        "description": "Chocolate-based drink with peanut butter flavor, a touch of creamy smooth peanut butter, and chocolate drizzle."
      },
      {
        "name": "S’more’s Mocha",
        "description": "Chocolate-based drink with marshmallow smear and toasted marshmallow flavor, topped with cold foam."
      },
      {
        "name": "Grasshopper Mocha",
        "description": "Chocolate-based drink with mint flavor, topped with whipped cream and chocolate drizzle."
      },
      {
        "name": "Irish Cream Mocha",
        "description": "Chocolate-based drink with Irish cream flavor, topped with cold foam."
      }
    ]
  },
  {
    "id": "lattes",
    "title": "Lattes.",
    "servingNote": "Hot or iced",
    "prices": [
      "16oz$5.50",
      "20oz$6.50",
      "24oz$7.50"
    ],
    "items": [
      {
        "name": "White Chocolate Raspberry Latte",
        "description": "Espresso base with white chocolate and red raspberry flavor."
      },
      {
        "name": "Vanilla Shortbread Latte",
        "description": "Espresso base with vanilla and shortbread flavor, topped with cold foam."
      },
      {
        "name": "Brown Sugar Cinnamon Latte",
        "description": "Espresso base with brown sugar cinnamon flavor, topped with cinnamon flakes."
      },
      {
        "name": "Lavender Dream Latte",
        "description": "White espresso base with lavender and vanilla flavor, topped with cold foam."
      },
      {
        "name": "Strawberry Milk Latte",
        "description": "Espresso-based drink with strawberry flavor, topped with whipped cream and strawberry drizzle."
      }
    ]
  },
  {
    "id": "chai",
    "title": "Chai.",
    "servingNote": "Ask about hot or iced options",
    "prices": [
      "16oz$5.50",
      "20oz$6.50",
      "24oz$7.50"
    ],
    "items": [
      {
        "name": "Vanilla Chai",
        "description": "Spiced chai with vanilla flavor."
      },
      {
        "name": "Dirty Caramel Chai",
        "description": "Spiced chai with espresso shots and caramel flavor, topped with caramel drizzle."
      },
      {
        "name": "Dirty Almond Chai",
        "description": "Spiced chai with white espresso, almond flavor, and caramel drizzle."
      },
      {
        "name": "Cookie Dough Chai",
        "description": "Spiced chai with cookie dough flavor."
      }
    ]
  },
  {
    "id": "matcha",
    "title": "Matcha.",
    "servingNote": "Ask about hot or iced options",
    "prices": [
      "16oz$6.50",
      "20oz$7.50",
      "24oz$8.50"
    ],
    "items": [
      {
        "name": "Strawberry Matcha",
        "description": "Matcha with strawberry flavor."
      },
      {
        "name": "Honey Vanilla Cinnamon",
        "description": "Matcha with vanilla flavor and honey drizzle, topped with cinnamon flakes."
      },
      {
        "name": "Lavender Matcha",
        "description": "Matcha with lavender flavor and cold foam."
      },
      {
        "name": "Matcha Latte",
        "description": "Matcha and milk."
      }
    ]
  },
  {
    "id": "refreshers",
    "title": "Infused Redbulls.",
    "servingNote": "Served cold",
    "prices": [
      "16oz$5.50",
      "20oz$6.50",
      "24oz$7.50"
    ],
    "items": [
      {
        "name": "Summer Nights",
        "description": "Red Bull with mango and red raspberry flavors."
      },
      {
        "name": "Caramel Apple Delight",
        "description": "Green apple, caramel drizzle, and Red Bull."
      },
      {
        "name": "Peach Ring",
        "description": "Red Bull with vanilla and peach flavors, topped with cold foam."
      },
      {
        "name": "Orange & Strawberry Cooler",
        "description": "Red Bull with orange and strawberry flavors."
      },
      {
        "name": "Cocogranate",
        "description": "Coconut, pomegranate, and Red Bull."
      },
      {
        "name": "Brapple",
        "description": "Red Bull with blue raspberry and green apple flavors."
      },
      {
        "name": "Cherry Vanilla",
        "description": "Red Bull with cherry and vanilla flavors, topped with cold foam."
      },
      {
        "name": "Blizzard",
        "description": "Red Bull with blue raspberry and coconut flavors."
      }
    ]
  },
  {
    "id": "dirty-sodas",
    "title": "Dirty Sodas.",
    "servingNote": "Served cold",
    "prices": [
      "16oz$4.00",
      "20oz$5.00",
      "24oz$6.00"
    ],
    "items": [
      {
        "name": "Cozy Coke",
        "description": "Coke-based drink with vanilla and caramel flavor, topped with half-and-half."
      },
      {
        "name": "Orange Creamsicle",
        "description": "Sprite-based drink with orange and vanilla flavor, topped with half-and-half."
      },
      {
        "name": "Sweet Butterscotch",
        "description": "Sprite-based drink with butterscotch flavor."
      },
      {
        "name": "Electric Cherry Lime",
        "description": "Sprite-based drink with cherry and lime flavor."
      }
    ]
  },
  {
    "id": "lemonade",
    "title": "Lemonade.",
    "servingNote": "Served cold",
    "prices": [
      "16oz$3.00",
      "20oz$4.00",
      "24oz$5.00"
    ],
    "items": [
      {
        "name": "Arnold Palmer",
        "description": "Half lemonade, half tea."
      },
      {
        "name": "High Tide",
        "description": "Lemonade with blueberry and lavender flavor."
      },
      {
        "name": "Sun-Kissed",
        "description": "Lemonade with red raspberry and passion fruit flavor."
      },
      {
        "name": "Lavender Lemonade",
        "description": "Lemonade with lavender flavor."
      }
    ]
  }
];
