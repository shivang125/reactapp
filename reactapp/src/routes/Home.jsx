import axios from "axios";
import { useEffect, useState } from "react";
import CustomerReview from "../components/CustomerReview/CustomerReview";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import BannerAfterProductCategories from "../components/HomePage/BannerAfterProductCategories";
import Landing from "../components/Landing/Landing";
import SecondaryBanner from "../components/Landing/SecondaryBanner";
import { TabTitle } from "../utils/General";


const Home = () => {
    const [ featuredItems, setFeaturedItems ] = useState()
    TabTitle("Home - Subham");

    useEffect(() => {
        axios.get("https://shema-backend.vercel.app/api/items")
            .then(res => setFeaturedItems(res.data))
            .catch(err => console.log(err))

        window.scrollTo(0, 0)
    }, [])

    return ( 
        <>
            <Landing />
            <SecondaryBanner/>
            <FeaturedCategories />
            <BannerAfterProductCategories/>
            <FeaturedItems items={featuredItems}/>
            <CustomerReview/>
        </>
    );
}
 
export default Home;