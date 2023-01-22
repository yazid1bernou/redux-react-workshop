import React from "react";
import { connect } from "react-redux";
import {removeFromCart} from "../store/actions/actions";


function CartItem(props) {
      const {item , index} = props ;
      const {product} = item ;
    return (
        <div className="card" >
        <img src="imgs/1.jpg" class="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title"> {product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{product.price} $</p>
        <p> Quantity : {item.quantity}</p>
        <p> Total : { item.quantity * product.price} </p>
        <button class="btn btn-danger" onClick={() => props.removeFromCart(index) } >Delete</button>
        
        </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
       removeFromCart :  (index) => dispatch(removeFromCart(index))
    }
  }

  export default connect(null , mapDispatchToProps)(CartItem);