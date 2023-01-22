import React from "react";
import {getById} from "../api/products";
import { connect } from "react-redux";
import { addToCart } from "../store/actions/actions";

 class  Product  extends  React.Component {
   
          state =  {
            product : {} , 
            quantity : 0 , 
            loading : true ,

          }
        componentDidMount (){
            const id =  this.props.match.params.id;
            getById(parseInt(id)).then (product => {
                this.setState({
                    product ,
                    loading :  false
                })
            })

             
        }
         
        handleQuantity = (event) => {
          const valueQuantity = event.target.value;
          if(valueQuantity < 0)
            return 0 ;
          this.setState({
            quantity : valueQuantity
          })
        }
        
        AddToCard = (product) => {
             this.props.AddToCard(product , this.state.quantity)
        }
        
       render () {
          if (this.state.loading) {
            <p>Please Wait Loading ...</p> 
           
          } 
          const product =  this.state.product ;
          const quantity = this.state.quantity ;
          console.log(quantity);
        return (
           
            <div>
                 <div className={'row'}>
                     <div className={'col-6'}>
                         <img src={product.image}  width={'100%'}/> 
                     </div>
                      <div className={'col-6'}>
                            <h1>{product.name}</h1> 
                            <p> Price : {product.price}</p>
                            <p>{product.description}</p>
                            <br/>
                            <br/>
                            <input type="number"  value={quantity} onChange={this.handleQuantity} />
                            <br/>
                            <br/>
                            <p> Total : {quantity * product.price}</p> 
                            <button type="button" className="btn btn-primary" onClick={() => this.AddToCard(product)}>Add to Card</button>
                     </div>
                 </div>

            </div>
        )
       }
      
 
}

const mapDispatchToProps = (dispatch) => {
  return {
     AddToCard :  (productsInfo , quantity ) => dispatch(addToCart(productsInfo , quantity ))
  }
}

export default connect(null , mapDispatchToProps)(Product) ;