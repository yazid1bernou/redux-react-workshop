import React  from "react";
import ProductItem from "./components/ProductItem";
import ProductsApi from "../api/products" ;


export default class Products extends React.Component {
   
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
            <div className="row">
                {this.state.products.map((product) => (
                    <div className={"col-4"} key={product.id}>
                          <ProductItem product={product} />  
                    </div>
                ))}
                  
                
                  
              
            </div>
    )
  }
}