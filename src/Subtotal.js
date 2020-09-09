import React from 'react'
import './Subtotal.css'
import  CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtoal ({basket.length} items): <stronng>{`${value}`}</stronng>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift!
                    </small> 
                </>
            )}
            decimalScale={2} value={getBasketTotal(basket)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
