import { createContext } from "react";

// import Jewelry from '../assets/earring.png';
// import perls from '../assets/perls.jpg';

export const FeatureCategoryContext = createContext([
    {
        name: "Neckless",
        image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-of-Light-Pendant-1-360x360.jpg",
        url: 'https://alukas.presslayouts.com/product-category/necklaces/',
        id: 1
    },
    {
        name: "Bracelets",
        image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Rose-Gold-Bracelet-1-360x360.jpg",
        url: 'https://alukas.presslayouts.com/product-category/bracelets/',
        id: 2
     },
    {
        name: "Rings",
        image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Rings-360x360.jpg",
        url: 'https://alukas.presslayouts.com/product-category/rings/',
        id: 3
    },
    {
        name: "Earrings",
        image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-1-360x360.jpg",
        url: 'https://alukas.presslayouts.com/product-category/earnings/',
        id: 4
    },
    {
        name: "Charm & Dangles",
        image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Charm-Dangles-360x360.jpg",
        url: 'https://alukas.presslayouts.com/product-category/charm-dangles/',
        id: 5
    }
])