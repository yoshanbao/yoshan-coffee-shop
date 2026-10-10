import type { FeaturedCategorySlug } from "@/lib/featured-categories";

export type MenuItem = { name: string; description: string };
export type SeasonalDrink = MenuItem & { id: string; category: FeaturedCategorySlug; categoryLabel: string };

/** Category membership is shared by the full menu and category links. */
export const seasonalDrinks: SeasonalDrink[] = [
  { id: "golden-harvest-chai", category: "chai", categoryLabel: "Chai", name: "Golden Harvest Chai", description: "Spiced chai with pumpkin syrup, topped with cinnamon cold foam." },
  { id: "autumn-spark", category: "refreshers", categoryLabel: "Energy", name: "Autumn Spark", description: "Red Bull infused with orange, finished with cranberry juice." },
  { id: "milkyway-mocha", category: "mochas", categoryLabel: "Mocha", name: "Milkyway Mocha", description: "Espresso, milk, chocolate, caramel syrup, topped with cold foam and Milkyway sprinkles." },
  { id: "maple-morning-latte", category: "lattes", categoryLabel: "Latte", name: "Maple Morning Latte", description: "Espresso, milk, maple syrup, with caramel drizzle." },
  { id: "candy-apple-pop", category: "dirty-sodas", categoryLabel: "Soda", name: "Candy Apple Pop", description: "Sprite infused with green apple, caramel drizzle, and cream." },
  { id: "toasted-pumpkin-matcha", category: "matcha", categoryLabel: "Matcha", name: "Toasted Pumpkin Matcha", description: "Matcha with pumpkin and toasted marshmallow syrup, topped with marshmallow fluff." },
];

export function getSeasonalDrinks(category?: FeaturedCategorySlug): SeasonalDrink[] {
  return category ? seasonalDrinks.filter((drink) => drink.category === category) : seasonalDrinks;
}

export type MenuSection = { id: string; title: string; prices: string[]; servingNote: string; items: MenuItem[] };
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
        "description": "Espresso, rich chocolate, and banana syrup with steamed or iced milk."
      },
      {
        "name": "Raspberry Mocha",
        "description": "Classic espresso blended with chocolate and tart red raspberry."
      },
      {
        "name": "Peanut Butter Mocha",
        "description": "Decadent dark cocoa, nutty peanut butter notes, and fresh espresso."
      },
      {
        "name": "S’more’s Mocha",
        "description": "Toasted marshmallow, graham cracker notes, chocolate, and rich espresso."
      },
      {
        "name": "Grasshopper Mocha",
        "description": "Refreshing cool mint combined with decadent chocolate and espresso."
      },
      {
        "name": "Irish Cream Mocha",
        "description": "Velvety Irish cream flavor balanced with mocha chocolate and espresso."
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
        "description": "Silky white chocolate, bright sweet raspberry, and fresh espresso."
      },
      {
        "name": "Vanilla Shortbread Latte",
        "description": "Warm vanilla bean, buttery shortbread syrup, and steamed milk."
      },
      {
        "name": "Brown Sugar Cinnamon Latte",
        "description": "Cozy dark brown sugar melted into espresso and dusted cinnamon notes."
      },
      {
        "name": "Lavender Dream Latte",
        "description": "Subtle floral lavender notes gently combined with vanilla and espresso."
      },
      {
        "name": "Strawberry Milk Latte",
        "description": "Nostalgic sweet ripe strawberry infused with chilled milk and espresso."
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
        "description": "Black tea blend with traditional spices sweetened with rich vanilla."
      },
      {
        "name": "Dirty Caramel Chai",
        "description": "Spiced chai with a bold espresso shot and buttery caramel sauce."
      },
      {
        "name": "Dirty Almond Chai",
        "description": "A shot of espresso infused with aromatic spiced chai and sweet almond."
      },
      {
        "name": "Cookie Dough Chai",
        "description": "Warm chai spices layered with brown sugar and chocolate cookie dough notes."
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
        "description": "Vibrant Japanese green tea layered over sweet pure strawberry purée."
      },
      {
        "name": "Honey Vanilla Cinnamon",
        "description": "Earthy green tea sweetened with wildflower honey, vanilla, and ground cinnamon."
      },
      {
        "name": "Lavender Matcha",
        "description": "Organic stone-ground green tea infused with light lavender syrup."
      },
      {
        "name": "Matcha Latte",
        "description": "Traditional pure Japanese matcha whisked and combined with your choice of milk."
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
        "description": "Orange, ripe strawberry, and Red Bull."
      },
      {
        "name": "Cocogranate",
        "description": "Coconut, pomegranate, and Red Bull."
      },
      {
        "name": "Brapple",
        "description": "Blue raspberry, crisp green apple, and Red Bull."
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
        "description": "Coca-Cola, vanilla syrup, and half-and-half."
      },
      {
        "name": "Orange Creamsicle",
        "description": "Orange soda, vanilla, and sweet cream."
      },
      {
        "name": "Sweet Butterscotch",
        "description": "Root beer, butterscotch syrup, and heavy cream."
      },
      {
        "name": "Electric Cherry Lime",
        "description": "Sprite, tart cherry, and fresh lime squeeze."
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
        "description": "Black iced tea and freshly pressed lemonade."
      },
      {
        "name": "High Tide",
        "description": "Blue raspberry and tart lemonade over crushed ice."
      },
      {
        "name": "Sun-Kissed",
        "description": "Sweet peach syrup infused into classic lemonade."
      },
      {
        "name": "Lavender Lemonade",
        "description": "Organic floral lavender infused into chilled lemonade."
      }
    ]
  }
];
