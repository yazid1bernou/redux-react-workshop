<<<<<<< HEAD
import {createStore , compose , applyMiddleware } from "redux";
=======
import {createStore , compose , applyMiddleware} from "redux";
>>>>>>> origin/yazid_home
import thunk from "redux-thunk";
import cartReducer from "./reducers/index";

const initialState = {
       cart : [
            {
               product : {
                    "id" : 1 ,
                    "name" : "home 1",
                    "price" : 100 ,
                    "image" : "/imgs/1.jpg",
                    "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
               } ,
               quantity : 1          
            }
       ]
}

/* function reducers (state) {
     return state
} */

const store =  createStore(cartReducer , initialState  , compose (
     applyMiddleware(thunk),
   /*   window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__() */
     

))

export default store ;