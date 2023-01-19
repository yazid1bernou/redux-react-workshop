import React from "react";


export default function (props) {
      const {item} = props ;
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
        <button class="btn btn-danger">Delete</button>
        
        </div>
    </div>
    )
}