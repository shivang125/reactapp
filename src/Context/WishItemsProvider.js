import { useContext, useState } from "react";
import { CartItemsContext } from "./CartItemsContext";
import { WishItemsContext } from "./WishItemsContext";

const WishItemsProvider = (props) => {
    const [wishItems, setWishItems] = useState([]);
    const cartItems = useContext(CartItemsContext);

    const addToCartHandler = (item) => {
        cartItems.addItem(item, 1);
    };

    
    const addToWishHandler = (item) => {
        const existingItem = wishItems.find(
            (prevItem) =>
                prevItem.id === item.id && prevItem.category === item.category
        );

        if (existingItem) {
            // Item already exists in the wishlist, update the quantity
            setWishItems((prevItems) =>
                prevItems.map((prevItem) =>
                    prevItem.id === item.id && prevItem.category === item.category
                        ? { ...prevItem, itemQuantity: prevItem.itemQuantity + 1 }
                        : prevItem
                )
            );
        } else {
            // Item does not exist in the wishlist, add it
            setWishItems((prevItems) => [
                ...prevItems,
                { ...item, itemQuantity: 1 },
            ]);
        }
    };

    const removeFromWishHandler = (item) => {
        setWishItems((prevItems) =>
            prevItems.filter((prevItem) => prevItem.id !== item.id)
        );
    };

    const wishItemsCtx = {
        items: wishItems,
        addItem: addToWishHandler,
        removeItem: removeFromWishHandler,
        addToCart: addToCartHandler,
    };

    return (
        <WishItemsContext.Provider value={wishItemsCtx}>
            {props.children}
        </WishItemsContext.Provider>
    );
};

export default WishItemsProvider;
