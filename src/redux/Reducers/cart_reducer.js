const mp = new Map();
const reducer = (state = mp , {type , payload}) => {
    if(type === 'ADD_TO_CART'){
        if(payload in mp){
            mp[payload]+=1
        }
        else{
            mp[payload]=1
        }
        return state;
    }
    else if(type === 'REMOVE_FROM_CART')
    {
        mp[payload]-=1;
        if(mp[payload]===0){
            console.log("chal rhi")
            mp.delete(payload)
        }
        return state;
    }
    else if(type === 'REMOVE_ALL')
    {
        mp.clear();
        return state;
    }
    else{
        return state;
    }
}

export {reducer}