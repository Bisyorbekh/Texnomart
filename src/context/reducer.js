const getUser = JSON.parse(localStorage.getItem("user"))

export const initialState = {
    cart: [],
    theme: false,
    user: getUser ? getUser : null
}

const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return {...state, cart: action.payload}
     }
}
export default reducer;