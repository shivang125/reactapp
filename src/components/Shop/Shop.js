import axios from "axios";
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { TabTitle } from '../../utils/General';
import ShopCategory from './Container/ShopCategory';
import './Shop.css';

const Shop = () => {
    TabTitle("Shop - Subham")
    const [ menItems, setMenItems ] = useState()
    const [ womenItems, setWomenItems ] = useState()
    const [ kidsItems, setKidsItems ] = useState()
    const [ loading , setLoading ] = useState(true) 

    useEffect(() => {
        axios.get("https://shema-backend.vercel.app/api/items")
            .then(res => {
                setMenItems(res.data.filter((item) => item.category === "men"))
                setKidsItems(res.data.filter((item) => item.category === "kids" ))
                setWomenItems(res.data.filter((item) => item.category === "women"))
                setLoading(false)
            })
            .catch(err => console.log(err))
        window.scrollTo(0, 0)
    
    }, [])

    return ( 
        <div className="shop__contianer">
            {loading && <ReactLoading type="balls" color='#FFE26E'  height={100} width={100} className='container h-100 w-10 justify-self-center align-self-center m-auto'/>}
            {menItems && <ShopCategory name="Jewelry" key="men" items={menItems}/>}
            {womenItems && <ShopCategory name="Perls" key="women" items={womenItems}/>}
        </div>
     );
}
 
export default Shop;