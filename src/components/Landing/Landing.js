import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerImage1 from "../../assets/bannerImages/banner1.avif";
import bannerImage2 from "../../assets/bannerImages/bannerImage2.jpg";
import './Landing.css';

const ImageSlider = ({ images, autoSlideInterval }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, autoSlideInterval);

        return () => {
            clearInterval(slideInterval);
        };
    }, [autoSlideInterval, images]);

    return (
        <div className="image-slider">
            <div className="fade-background">
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{ backgroundImage: `url(${image.url})`,opacity: currentImageIndex === index ? 1 : 0 }}
                        className={currentImageIndex === index ? "active" : ""}
                    ></div>
                ))}
            </div>
        </div>
    );
}

const images = [
    {
        url: bannerImage1,
        description: "Description for Image 1",
        textPosition: "right",
    },
    {
        url: bannerImage2,
        description: "Description for Image 2",
        textPosition: "left",
    },
];

const Landing = () => {
    const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentDescriptionIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => {
            clearInterval(slideInterval);
        };
    }, [images]);

    const currentImage = images[currentDescriptionIndex];
    const containerStyle = {
        
        backgroundImage: `url(${currentImage.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
    };


    

    return (
        <>
        <div className="landing__container" style={containerStyle}>
            <div className="landing__header__container">
                <div className="landing__header">
                    <h1 className="landing__header__main">
                        {currentImage.description}
                    </h1>
                    <Link to="/shop">
                        <Button
                            variant="outlined"
                            sx={[
                                {
                                    width: "190px",
                                    height: "50px",
                                    borderRadius: "20px",
                                    fontWeight: "700",
                                    backgroundColor: "none",
                                    borderColor: "black",
                                    color: "black",
                                },
                                {
                                    "&:hover": {
                                        backgroundColor: "black",
                                        color: "#FFE26E",
                                        borderColor: "black",
                                    },
                                },
                            ]}
                        >
                            SHOP NOW
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="landing__image__container">
                <ImageSlider images={images} autoSlideInterval={10000} />
            </div>
        </div>
        
        
      </>
    );
};

export default Landing;

