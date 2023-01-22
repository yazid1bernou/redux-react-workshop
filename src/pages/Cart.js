import React  from "react";
import CartItem from "../components/CartItem";
import { connect } from "react-redux";
import { clearCart } from "../store/actions/actions";


class Card extends React.Component {
   
  placeOrder = () => {
    // send the request to the server
    // clear cart
    this.props.clearCart()
    alert(" We received your Order , and we are working on it.")
  }
   
  render () {
    
    return (
         
          <div>
               <div className="row">
                {this.props.CartItem.map((item , index) => 
                    <div className={"col-3"} key={item.product.id}>
                          <CartItem item={item} index={index}  />  
                    </div>
                )}
                  
                 
               </div>
               <p> Total : {this.props.total}</p> 
               <div className="d-grid">
                  <button type="button" className="btn btn-primary" onClick={this.placeOrder}> Place Order</button>
               </div>
               
          </div>
      
            
          
    )
  }
}

const mapStateToProps = (state) => {
    return {
      CartItem : state.cart ,
      total : state.cart.reduce((total , item) =>  total + item.quantity * item.product , 0) 
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    clearCart : () => dispatch(clearCart()) ,
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Card);