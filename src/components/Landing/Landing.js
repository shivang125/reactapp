import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import land from '../../assets/slider-10-8.jpg';
import './Landing.css';

const Landing = () => {
    return ( 
        <div className="landing__container">
            <div className="landing__header__container">
                <div className="landing__header">
                    {/* <h3 className="landing__header__discount">Admin To Tell</h3> */}
                    <h1 className="landing__header__main">Banner details needed to be filled by Admin </h1>
                    <Link to="/shop">
                        <Button variant='outlined' sx={[ {width: '190px', height: '50px', borderRadius: '20px' , fontWeight: '700', backgroundColor: 'none', borderColor: 'black', color: 'black' }, {'&:hover': {  backgroundColor: "black" , color: "#FFE26E", borderColor: 'black'}}]}>SHOP NOW</Button>
                    </Link>
                </div>
            </div>
            <div className="landing__image__container">
                <img className="landing__image" src={land} alt=""/>
            </div>
        </div>
     );
}
 
export default Landing;