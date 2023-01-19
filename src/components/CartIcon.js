import React from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";

 function CartIcon (props) {
    return (
        <div className="cart-icon">
            <Link to="/cart">
               <i className="fa fa-shopping-cart"></i> 
               <span class="position-absolute  start-100 translate-middle badge rounded-pill bg-danger">
                 {props.totalQantity}
              </span>
            </Link>
              
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        totalQantity : state.cart.reduce((total , item) =>  total + parseInt(item.quantity) , 0) 
    }
}
export default connect(mapStateToProps)(CartIcon) ;
