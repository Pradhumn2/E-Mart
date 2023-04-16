const add_to_cart = (item) =>{
    return (dispatch) =>{
        dispatch({
            type:"ADD_TO_CART",
            payload:item
        })
    }
}

const delete_from_cart = (item) =>{
    return (dispatch) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: item 
        })
    }
}

const grand_total = (item) =>{
    return (dispatch) => {
        dispatch({
            type: "GRAND_TOTAL",
            payload: item
        })
    }
}

const remove_all = (item) =>{
    return (dispatch) => {
        dispatch({
            type: "REMOVE_ALL",
            payload: item
        })
    }
}

export {add_to_cart} ;
export {delete_from_cart};
export {remove_all};
export {grand_total};