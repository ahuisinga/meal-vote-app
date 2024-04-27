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
    name: "Cabo Bob's",
    distance: 8,
    types: ["mexican", "quick"],
    rating: 4,
  },
  {
    id: "1",
    name: "Blue Sushi",
    distance: 0.01,
    types: ["sushi", "asian"],
    rating: 5,
  },
  {
    id: "2",
    name: "Jinya",
    distance: 0.01,
    types: ["ramen", "asian"],
    rating: 5,
  },
  {
    id: "3",
    name: "Jerry Mike's",
    distance: 0.1,
    types: ["sandwhiches"],
    rating: 3,
  },
  {
    id: "4",
    name: "Culver's",
    distance: 0.5,
    types: ["sushi", "asian"],
    rating: 3,
  },
];
