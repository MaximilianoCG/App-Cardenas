import React from 'react'
import { FaCartPlus } from "react-icons/fa";

function CartWidget() {
    return (
        <div>
            <FaCartPlus size="2em" color="#256ce1" style={{
            position: 'relative',
            right: '-465px',
            height: '63px'}}></FaCartPlus>
        </div>
    )
}

export default CartWidget
