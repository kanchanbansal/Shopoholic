import React, { useState } from 'react'
import { addToCartHelper } from './../helpers/cartHelper';
import { useDispatch } from 'react-redux';
import { addCartStart } from '../redux/action/cart.action';

export default function CartItem({ item, cart, user }) {
    let [quantity, setQuantity] = useState(item.quantity);
    const dispatch = useDispatch()

    const increseQuantity = () => {
        setQuantity(quantity + 1);

        item.quantity = quantity + 1;

        let response = addToCartHelper(item, cart, user, true)

        dispatch(addCartStart(response));
    }

    const decreaseQuantity = () => {
        setQuantity(quantity - 1);  
        
        item.quantity = quantity - 1;

        let response = addToCartHelper(item, cart, user, true)

        dispatch(addCartStart(response));
    }

    return (
        <tr>
            <td>
                <div className="media">
                    <div className="d-flex">
                        <img
                            src={item.image}
                            alt={item.name}
                        />
                    </div>
                    <div className="media-body">
                        <p>{item.name}</p>
                    </div>
                </div>
            </td>
            <td>
                <h5>${item.final_price}</h5>
            </td>
            <td>
                <div className="product_count">
                    <input
                        type="text"
                        name="qty"
                        id="sst"
                        maxLength="12"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                    <button
                        onClick={increseQuantity}
                        className="increase"
                        type="button"
                    >
                        <i className="lnr lnr-chevron-up"></i>
                    </button>
                    <button
                        onClick={decreaseQuantity}
                        className="reduced"
                        type="button"
                    >
                        <i className="lnr lnr-chevron-down"></i>
                    </button>
                </div>
            </td>
            <td>
                <h5>${item.final_price *  quantity}</h5>
            </td>
        </tr>
    )
}
