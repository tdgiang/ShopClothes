import {createStore} from 'redux';
import setAsynstorage from '../asynstorage/setAsynstorage';


const arrCartReducer=(state=[],action)=>{
    switch (action.type) {
        case 'REMOVE_PRODUCT':
            {
                let newCart=state.filter(e=>e.id!=action.id);
                setAsynstorage(newCart);
                return newCart;
            }
            
        case 'AUGMENT_PRODUCT':{
            let newCart=state.map(e=>{
                if(e.id!=action.id) return e;
                return {...e,count:e.count+1};
            });
            setAsynstorage(newCart);
            return newCart;
        }
            
        case "SET_DATA":
            return action.data;
        case 'DECREASE_PRODUCT':
            {
                let newCart=state.map(e=>{
                    if(e.id!=action.id) return e;
                    return {...e,count:e.count-1};
                });
                setAsynstorage(newCart);
                return newCart;
                
            }
            
        case 'ADD_PRODUCT':
            {
               let newCart=[{
                    id:require('random-string')({length:8}),
                    product:action.pro,
                    count:1
                }].concat(state);
                setAsynstorage(newCart);
                return newCart;
            }
            
        default:
            return state;
    }
}

const store =createStore(arrCartReducer);
export default store;

