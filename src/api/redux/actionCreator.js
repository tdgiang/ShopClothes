export function removeProduct(id){
    return{
        type:"REMOVE_PRODUCT",
        id
    }
}


export function augmentProduct(id){
    return{
        type:'AUGMENT_PRODUCT',
        id
    }
}

export function decreaseProduct(id){
    return{
        type:'DECREASE_PRODUCT',
        id
    }
}
export function addProduct(pro){
    return{
        type:'ADD_PRODUCT',
        pro
    }
}


export function setData(data){
    return{
        type:'SET_DATA',
        data
    }
}