import {createStore} from 'redux';

const data=[
    {
        id:"1",
        product:{
            id:'1',
            name:'Black off the',
            price:123,
            img:[
                require('../../images/products/100.jpeg'),
                require('../../images/products/101.jpeg')
            ],
            color:'green',
            material:'leather',
            description:"Đây là mô tả sản phẩm......"
        },
        count:1
    },
    {
        id:"2",
        product:{
            id:'2',
            name:'Dress Pink',
            price:223,
            img:[
                require('../../images/products/102.jpeg'),
                require('../../images/products/103.jpeg')
            ],
            color:'kaki',
            material:'da',
            description:"Đây là mô tả sản phẩm......"
        },
        count:2
    }  
];

const arrCartReducer=(state=data,action)=>{
    switch (action.type) {
        case 'REMOVE_PRODUCT':
            return state.filter(e=>e.id!=action.id);
        case 'AUGMENT_PRODUCT':
            return state.map(e=>{
                if(e.id!=action.id) return e;
                return {...e,count:e.count+1};
            });
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
            }].map(state);
        default:
            return state;
    }
}

const store =createStore(arrCartReducer);
export default store;

