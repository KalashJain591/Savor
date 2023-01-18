const WishListReducer = (state, action) => {

    if (action.type === "ADD_TO_WISH_LIST") {
        // console.log("clicked");
        // console.log(state.cart);
        let { id, price, images, name } = action.payload;
        let wishListProduct = {
            id: id,
            name: name,
            price: price,
            images: images[0].imgUrl,
        };
        console.log(state.wishList);
        return {
            ...state,
            wishList: [...state.wishList, wishListProduct],
        };
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedWishList = state.cart.filter(
            (curItem) => curItem.id !== action.payload
        );
        return {
            ...state,
            wishList: updatedWishList,
        };
    }

    // to empty or to clear to cart
    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            wishList: [],
        };
    }
    return state;

};

export default WishListReducer;
