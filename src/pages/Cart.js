import React  from "react";
import CartItem from "../components/CartItem";
import ProductsApi from "../api/products" ;


export default class Card extends React.Component {
   
   state =  {
     products : []
   }
  
  componentDidMount =  () => {
    ProductsApi.getAll().then (
       data => {
        this.setState({
          products : data 
        })
       }
      
    ) 
  
  }
  
  
  
 
  render () {
    
    return (
         
          <div>
               <div className="row">
                {this.state.products.map((product) => (
                    <div className={"col-3"} key={product.id}>
                          <CartItem product={product} />  
                    </div>
                ))}
                  
                 
               </div>
               <p> Total : 3000</p>
               <div className="d-grid">
                  <button type="button" className="btn btn-primary"> Pay</button>
               </div>
               
          </div>
      
            
          
    )
  }
}