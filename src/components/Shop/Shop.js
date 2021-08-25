import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const topProducts = fakeData.slice(0,10);
    const [products, setProduct] = useState(topProducts);
    const [cart , setCart] = useState([]);
    function addingOnCart(product){
        const newCart = [...cart, product];
        setCart(newCart);
    }

    function costInPrecision(number){
        number = number.toFixed(2);
        number = parseFloat(number);
        return number;
    }

    let  totalPrice = 0;
    let deliveryFees = 0;
    for(const element of cart){
        totalPrice += element.price;
    }
    if(totalPrice > 500 || totalPrice == 0){
        deliveryFees = 0;
    }
    else if(totalPrice > 100){
        deliveryFees = 20;
    }
    else{
        deliveryFees = 30;
    }
    totalPrice = costInPrecision(totalPrice);
    const tax = costInPrecision((totalPrice + deliveryFees) * .15);
    return (
        <div className="shop-container">
            <div className="shop-cards">
                {
                    products.map(pro => <Products product={pro} addingOnCart={addingOnCart}></Products>)
                }
            </div>
            <div className="shopping-cart">
                <h2>This is Cart</h2>
                <li>Total Order: {cart.length}</li>
                <li>Total Price: {totalPrice}</li>
                <li>Delivery Fees: {deliveryFees}</li>
                <li>Tax Charge: {tax}</li>
                <li><b>Total Amount: {costInPrecision(tax + totalPrice + deliveryFees)}</b></li>
            </div>
        </div>
    );
};

export default Shop;