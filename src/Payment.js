import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout ({<Link to="/checkout">{basket?.length} items</Link>})</h1>
            {/* address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>3, Jigar Society</p>
                        <p>Kalyan, MAHARASHTRA.</p>
                    </div>
                </div>
            {/* items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                        </div>
                    <div className="payment__items">
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                    </div>
                </div>
            {/* payment */}
                <div className="payment__section">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">

                </div>
            </div>    
        </div>
    )
}

export default Payment
