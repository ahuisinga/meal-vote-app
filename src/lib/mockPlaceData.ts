export interface Restaurant {
  id: string;
  name: string;
  distance: number;
  types: string[];
  rating: number;
}

export const restaurants: Restaurant[] = [
  {
    id: "0",
    name: "Taco Stand",
    distance: 8,
    types: ["mexican", "quick"],
    rating: 4,
  },
  {
    id: "1",
    name: "Sushi Place",
    distance: 0.01,
    types: ["sushi", "asian"],
    rating: 5,
  },
  {
    id: "2",
    name: "Ramen Bar",
    distance: 5,
    types: ["ramen", "asian"],
    rating: 5,
  },
  {
    id: "3",
    name: "Sandwich Shop",
    distance: 0.1,
    types: ["sandwhiches"],
    rating: 3,
  },
  {
    id: "4",
    name: "Generic Fast Food Joint",
    distance: 0.5,
    types: ["sushi", "asian"],
    rating: 3,
  },
];
