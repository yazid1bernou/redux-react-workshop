import React  from "react";
import CartItem from "../components/CartItem";
import ProductsApi from "../api/products" ;
import { connect, Connect } from "react-redux";

class Card extends React.Component {
   
 
  render () {
    
    return (
         
          <div>
               <div className="row">
                {this.props.CartItem.map(item => 
                    <div className={"col-3"} key={item.product.id}>
                          <CartItem item={item} />  
                    </div>
                )}
                  
                 
               </div>
               <p> Total : {this.props.total}</p> 
               <div className="d-grid">
                  <button type="button" className="btn btn-primary"> Pay</button>
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
export default connect(mapStateToProps)(Card);