import { useContext } from "react";
import { FeatureCategoryContext } from "../../../Context/FeaturedCategoryContext";
import './FeaturedCategories.css';

const Categories = () => {
    const featuredCategories = useContext(FeatureCategoryContext);

    return (
        <section className="featured__categories__container">
            <div className="featured__categories">
                <span className="separator-left" />
                <h1 className='featured__header__big'>Featured Categories </h1>
                <div className="featured__categories__header__line"></div>
                <span className="separator-right" />
            </div>
            <div className="featured__categories__card__container">
                {featuredCategories.map((category, index) => (
                    <div key={category.id} className="product-category">
                        <a href={category.url}>
                            <div className="category-image">
                                <img
                                    decoding="async"
                                    loading="lazy"
                                    width={360}
                                    height={360}
                                    src={category.image}
                                    alt={category.name}
                                />
                            </div>
                            <div className="category-title"><span>{category.name}</span></div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
