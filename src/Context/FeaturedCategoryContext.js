import { createContext } from "react";

// import Jewelry from '../assets/earring.png';
// import perls from '../assets/perls.jpg';
import PlaceholderImage from "../assets/placeholder.webp";

export const FeatureCategoryContext = createContext([
    {
        name: "Neckless",
        image: PlaceholderImage,
        url: '/category/jewelry',
        id: 1
    },
    {
        name: "Perls",
        image: PlaceholderImage,
        url: '/category/perls',
        id: 2
     },
    {
        name: "Rings",
        image: PlaceholderImage,
        url: '/category/kids',
        id: 3
    },
    {
        name: "Earrings",
        image: PlaceholderImage,
        url: '/category/kids',
        id: 4
    },
    {
        name: "Charms",
        image: PlaceholderImage,
        url: '/category/kids',
        id: 5
    }
])