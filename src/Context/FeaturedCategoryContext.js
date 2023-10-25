import { createContext } from "react";

import Jewelry from '../assets/earring.png';
import perls from '../assets/perls.jpg';

export const FeatureCategoryContext = createContext([
    {
        name: "Jewelry",
        image: Jewelry,
        url: '/category/jewelry',
        id: 1
    },
    {
        name: "Perls",
        image: perls,
        url: '/category/perls',
        id: 2
     }
    // {
    //     name: "Kids Fashion",
    //     image: kidsFashion,
    //     url: '/category/kids',
    //     id: 3
    // }
])