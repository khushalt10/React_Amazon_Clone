import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, rating, price, image, hideButton}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }

    return (
        <div className="checkoutProduct">
            <img src={image} className="checkoutProduct__image" alt={title} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__itle">{title}</p>

                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                       <p>⭐</p>
                    ))}
            </div>
            {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
            )}
            </div>
        </div>
    )
}

export default CheckoutProduct
