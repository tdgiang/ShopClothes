import {createStore} from 'redux';



const arrCartReducer=(state=[],action)=>{
    switch (action.type) {
        case 'REMOVE_PRODUCT':
            return state.filter(e=>e.id!=action.id);
        case 'AUGMENT_PRODUCT':
            return state.map(e=>{
                if(e.id!=action.id) return e;
                return {...e,count:e.count+1};
            });
        case "SET_DATA":
            return action.data;
        case 'DECREASE_PRODUCT':
            return state.map(e=>{
                if(e.id!=action.id) return e;
                return {...e,count:e.count-1};
            });
        case 'ADD_PRODUCT':
            return [{
                id:(state.length+1).toString(),
                product:action.pro,
                count:1
            }].concat(state);
        default:
            return state;
    }
}

const store =createStore(arrCartReducer);
export default store;

