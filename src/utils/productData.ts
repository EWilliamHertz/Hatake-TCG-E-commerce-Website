export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  releaseDate: string;
  images: string[];
  description: string;
  isPreorder: boolean;
}
export const products: Product[] = [{
  id: "duffel-bag",
  name: "Duffel Bag",
  price: 89.99,
  stock: 10,
  releaseDate: "2025-06-15T00:00:00.000Z",
  images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"],
  description: "Tournament-ready duffel bag (472855cm).",
  isPreorder: false
}, {
  id: "top-loaders-35pt",
  name: "25x 35pt Top-Loaders",
  price: 5.99,
  stock: 50,
  releaseDate: "2025-05-20T00:00:00.000Z",
  images: ["https://images.unsplash.com/photo-1661774032157-3c2e27a3b5c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1661774037735-2201a93246e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"],
  description: "Pack of 25 35pt top-loaders.",
  isPreorder: false
}, {
  id: "top-loaders-130pt",
  name: "10x 130pt Top-Loaders",
  price: 7.99,
  stock: 30,
  releaseDate: "2025-05-20T00:00:00.000Z",
  images: ["https://images.unsplash.com/photo-1561757015-ba11f50aa8dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1561757004-ce52d6cf6eca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"],
  description: "Pack of 10 130pt top-loaders.",
  isPreorder: false
}, {
  id: "matte-sleeves",
  name: "Matte Sleeves",
  price: 9.99,
  stock: 0,
  releaseDate: "2025-07-01T00:00:00.000Z",
  images: ["https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1627384113972-1ef96e82c149?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"],
  description: "Pack of 100 matte sleeves (66x91mm).",
  isPreorder: true
}, {
  id: "pu-deckbox",
  name: "PU DeckBox",
  price: 19.99,
  stock: 15,
  releaseDate: "2025-06-01T00:00:00.000Z",
  images: ["https://images.unsplash.com/photo-1627384113590-1c1b20faa95c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1627384113590-1c1b20faa95c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"],
  description: "PU DeckBox for 160+ cards with magnetic closure.",
  isPreorder: false
}, {
  id: "binder-480",
  name: "480-Slot Binder",
  price: 29.99,
  stock: 8,
  releaseDate: "2025-06-15T00:00:00.000Z",
  images: ["https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1627384113972-1ef96e82c149?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"],
  description: "Zippered binder with 480 slots.",
  isPreorder: false
}];