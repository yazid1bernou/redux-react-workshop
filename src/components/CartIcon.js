import React from "react";
import {Link} from "react-router-dom"
export default function () {
    return (
        <div className="cart-icon">
            <Link to="/cart">
               <i className="fa fa-shopping-cart"></i> 
               <span class="position-absolute  start-100 translate-middle badge rounded-pill bg-danger">
                 2
              </span>
            </Link>
              
        </div>
    )
}

