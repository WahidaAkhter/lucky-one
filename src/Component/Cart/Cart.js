import './Cart.css'
import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h3>Your Order</h3>

            {
                cart.map((product) => <h5>{product.name}</h5>)
            }
            <p>seleced items:{cart.length}</p>

            <button className='choose-btn'><p>choose one for me</p></button><br />
            <button className='choose-btn'><p>choose again</p></button>

        </div>
    );
};

export default Cart;