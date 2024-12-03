export interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
}

export const productData: Product[] = [
  {
    id: 1,
    name: "Bird's Nest Fern",
    price: "23,00",
    img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024949.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    price: "23,00",
    img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022044.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Snake Plant",
    price: "23,00",
    img: "https://img.freepik.com/premium-photo/monstera-obliqua-fiddle-leaf-fig-ficus-lyratain-concrete-pot-white-wood-table-wall-surface-with-copy-space-araceae-window-leaf-plant_63726-2136.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    price: "23,00",
    img: "https://img.freepik.com/premium-photo/monstera-obliqua-fiddle-leaf-fig-ficus-lyratain-concrete-pot-white-wood-table-wall-surface-with-copy-space-araceae-window-leaf-plant_63726-2136.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
  },
  {
    id: 5,
    name: "Golden Pothos",
    price: "23,00",
    img: "https://img.freepik.com/premium-photo/golden-pothos-snake-plant-white-wooden-table_46250-1385.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
  },
  {
    id: 6,
    name: "Areca Palm",
    price: "23,00",
    img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
  },
  {
    id: 7,
    name: "Spider Plant",
    price: "23,00",
    img: "https://img.freepik.com/free-photo/golden-pothos-epipremnum-aureum-white-table-living-room-home-garden_114579-1393.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
  },
  {
    id: 8,
    name: "Peace Lily",
    price: "23,00",
    img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022047.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
  },
  {
    id: 9,
    name: "ZZ Plant",
    price: "23,00",
    img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024956.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
  },
  {
    id: 10,
    name: "Aloe Vera",
    price: "23,00",
    img: "https://img.freepik.com/free-psd/3d-rendering-plants-trees-still-life_23-2151465928.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
  },
  {
    id: 11,
    name: "Chinese Evergreen",
    price: "23,00",
    img: "https://img.freepik.com/premium-photo/home-plant-red-pot-white-table_121355-549.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
  },
  {
    id: 12,
    name: "Rubber Plant",
    price: "23,00",
    img: "https://img.freepik.com/premium-photo/indoor-plants-studio_23-2151022089.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
  },
];

export const productInformationData = [
  {
    id: 1,
    name: "Details",
    details: "This is a detailed description of the product.",
  },
  {
    id: 2,
    name: "Review & Rating",
    users: [
      {
        id: 1,
        name: "Cameron Williamson",
        rating: "4",
        comment: "Very Nice!!",
        like: 10,
        createAt: "2024-11-20",
      },
      {
        id: 1,
        name: "Cameron Williamson",
        rating: "4",
        comment: "Very Nice!!",
        like: 10,
        createAt: "2024-11-20",
      },
    ],
    views: 121,
    rating: 4.5,
    userFeedBack: [
      { id: 5, value: 50 },
      { id: 4, value: 5 },
      { id: 3, value: 10 },
      { id: 2, value: 30 },
      { id: 1, value: 2 },
    ],
  },
  {
    id: 3,
    name: "Discussion",
    details: "Join the discussion about this product here.",
  },
];
