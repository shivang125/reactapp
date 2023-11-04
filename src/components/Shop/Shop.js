import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { TabTitle } from '../../utils/General';
import ShopCategory from './Container/ShopCategory';
import ShopCategoryBanner from "./Container/ShopCategoryBanner";
import './Shop.css';

const products = [
    {
      id: 1,
      category: 'Necklace',
      name: 'Bird of Paradise Pendant',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Birds-of-Paradise-Pendant-2-325x325.jpg',
      price: 100000,
    },
    {
      id: 2,
      category: 'Rings',
      name: 'Kalvesna Diamond Twig Ring',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Kalvesna-Diamond-Twig-Ring-2-325x325.jpg',
      price: 100000,
    },
    {
      id: 3,
      category: 'Earrings',
      name: 'Blue Stripes & Stone Earrings',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-2-325x325.jpg',
      price: 100000,
    },
    {
      id: 4,
      category: 'Bracelets',
      name: 'Cross Stripes & Stone Bracelet',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-Stripes-Stone-Bracelet-1-325x325.jpg',
      price: 100000,
    },
    {
      id: 5,
      category: 'Charms & Dangles',
      name: 'Echoes Necklace Extension Piece',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Necklace-Extension-Piece-1-325x325.jpg',
      price: 100000,
    },
    {
      id: 6,
      category: 'Neckless',
      name: 'Cross of Light Pendant',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-of-Light-Pendant-1-325x325.jpg',
      price: 100000,
    },
  {
      id: 7,
      category: 'Bracelets',
      name: 'Classic Plain Stone Bracelet',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Classic-Plain-Stone-Bracelet-1-325x325.jpg',
      price: 100000,
    },
  {
      id: 8,
      category: 'Bracelets',
      name: 'Rose Gold Bracelet',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Rose-Gold-Bracelet-2-325x325.jpg',
      price: 100000,
    },
  {
      id: 9,
      category: 'Neckless',
      name: 'Classic Shine Necklace',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Classic-Shine-Necklace-2-325x325.jpg',
      price: 100000,
    },
  {
      id: 10,
      category: 'Earrings',
      name: 'Sterling Silver Dangles Earrings',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-1-325x325.jpg',
      price: 100000,
    },
  {
      id: 11,
      category: 'Rings',
      name: 'Kalvesna Diamond Twig Ring',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Kalvesna-Diamond-Twig-Ring-1-325x325.jpg',
      price: 100000,
    },
  {
      id: 12,
      category: 'Rings',
      name: 'Love Both Engagement Ring',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Love-Both-Engagement-Ring-1-325x325.jpg',
      price: 100000,
    },
  {
      id: 13,
      category: 'Rings',
      name: 'Four Leaf Clover Rings',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Four-Leaf-Clover-Rings-1-325x325.jpg',
      price: 100000,
    },
  {
      id: 14,
      category: 'Neckless',
      name: 'Circle of Chain Necklace',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Chain-Necklace-1-325x325.jpg',
      price: 100000,
    },
  {
      id: 15,
      category: 'Bracelets',
      name: 'Echoes Swing word Bracelet',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-1-325x325.jpg',
      price: 100000,
    },
  {
      id: 16,
      category: 'Rings',
      name: 'Reflections Gold Rings',
      imageUrl:
        'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Reflections-Gold-Rings-1-325x325.jpg',
      price: 100000,
    },
  ];

const Shop = () => {
    TabTitle("Shop - Subham")
    const [ Items, setItems ] = useState()
    const [ womenItems, setWomenItems ] = useState()
    const [ kidsItems, setKidsItems ] = useState()
    const [ loading , setLoading ] = useState(true) 

    // useEffect(() => {
    //     axios.get("https://shema-backend.vercel.app/api/items")
    //         .then(res => {
    //             setItems(res.data.filter((item) => item.category === "men"))
    //             setKidsItems(res.data.filter((item) => item.category === "kids" ))
    //             setWomenItems(res.data.filter((item) => item.category === "women"))
    //             setLoading(false)
    //         })
    //         .catch(err => console.log(err))
    //     window.scrollTo(0, 0)
    
    // }, [])
    useEffect(() => {
        // Set state variables with the entire products array
        setItems(products);
        // setKidsItems(products);
        // setWomenItems(products);
        setLoading(false);
      
        window.scrollTo(0, 0);
      }, []);
    return ( 
        <div className="shop__contianer">
            <ShopCategoryBanner/>
            {loading && <ReactLoading type="balls" color='#FFE26E'  height={100} width={100} className='container h-100 w-10 justify-self-center align-self-center m-auto'/>}
            {Items && <ShopCategory name="Jewelry" items={Items}/>}
            {/* {womenItems && <ShopCategory name="Perls" key="women" items={womenItems}/>} */}
        </div>
     );
}
 
export default Shop;