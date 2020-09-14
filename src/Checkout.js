import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="
            https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
            
            {basket?.length === 0 ? (
                <div>
                    <h2>Your shopping basket is Empty!!</h2>
                    <p>You have no items in your basket. To buy one or more items, click on "Add to basket" next to the item.</p>
                </div>
            ): (
                <div className="checkout__title">
                    <h2>Your shopping Basket({basket.length} Orders)</h2>
                    
                    {basket.map(item => (
                        <CheckoutProduct key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                    ))}
                </div>
            )}
            </div>   
               <div className="checkout__right">
                    <Subtotal />
                </div>    
        </div>
    )
}

export default Checkout
