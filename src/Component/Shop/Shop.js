import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [data, setData] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    data.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>

            <div className="cart-container">
                <h3>Your Order</h3>
                <p>Selected items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;