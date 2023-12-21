import React from 'react';

const CartSlice = () => {


    const initialState = {
        cartItems:[],
        cartTotalQuantity:0,
        cartTotalAmount:0,
    };

    const cartSlice = createSlice({
        name:"cart",
        initialState,
        reducers:{
            addToCart(state, action){
                state.cartItems.push(action.payload);
            }
        }
    })


    return (
        <div>
            
        </div>
    );
};

export default CartSlice;