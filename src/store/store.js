
import {createStore , compose , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/index";
import throttle from 'lodash.throttle'; 

function loadState() {
     try {
          const state =  localStorage.getItem('cart');
          if(state !== null) {
          return JSON.parse(state); 
         }
     }
     catch(e) {

     }
  
     return {
          cart : []
     }
}

function saveState(state) {
   console.log("SaveState ......")
   localStorage.setItem('cart' , JSON.stringify(state))  
}

/* function reducers (state) {
     return state
} */

const store =  createStore(cartReducer , loadState()  , compose (
     applyMiddleware(thunk),
   /*   window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__() */

))
store.subscribe(throttle(() => {
     saveState(store.getState())
} , 2000))
export default store ;