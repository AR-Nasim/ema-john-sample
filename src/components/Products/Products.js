import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h2>{name}</h2>
                <h3>Brand: {seller}</h3>
                <h3>Price: ${price}</h3>
                <p>Only {stock} left in stock - Order Now</p>
                <button className="cart-button" onClick = {() => props.addingOnCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Products;