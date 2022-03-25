import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    data.map(product => <Product
                        key={product.id}
                        product={product}
                    />)
                }
            </div>

            <div className="cart-container">
                <h3>Your Order</h3>
            </div>
        </div>
    );
};

export default Shop;