import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import Landing from "../components/Landing/Landing";
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
        <Fragment>
            <Landing />
            <FeaturedCategories />
            <FeaturedItems items={featuredItems}/>
        </Fragment>
    );
}
 
export default Home;