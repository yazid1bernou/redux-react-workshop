import React, { Component } from "react";

class Counter extends Component {
     
    state = {
        counter : 2,

    }
        
    Increament= () => {
       this.setState({
        counter : this.state.counter + 1 ,
       })
    }
    Decreament= () => {
        this.setState({
         counter : this.state.counter - 1 ,
        })
     }
    render () {
        return (

            <div>
                 <h1>This is The Counter : {this.state.counter}</h1>
                <button type="button" onClick={this.Increament}> Increament </button>
                <button type="button" onClick={this.Decreament}> Decreament </button>
            </div>
        )
    }
}

export default Counter ;