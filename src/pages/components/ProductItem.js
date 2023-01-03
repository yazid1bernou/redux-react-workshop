import React from "react";

export default  function  ProductItem (props) {
    
    const {product} = props ;
    return (
                <div className="card" >
                    <img src="imgs/1.jpg" class="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title"> {product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href={'/products/'+product.id} class="btn btn-primary">Details</a>
                    
                    </div>
                </div>
    )
}