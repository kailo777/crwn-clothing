export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    // // const existingCartItem = cartItems.find(
    // //     cartItem => cartItem.id === cartItemToRemove.id
    // // );
    // const index = cartItems.indexOf(cartItemToRemove);
    // if (index > -1) {
    //     cartItems.splice(index, 1);
    // }
    // if (index > -1) {
    //     return {}
    //     return cartItems.map(cartItem =>
    //         cartItem.id === cartItemToRemove.id ? {...cartItem.splice(), quantity: cartItem.quantity - 1} : cartItem
    //     )
    // }
    //
    // return [...cartItems, {...cartItemToRemove, quantity: 1}]
};