// here we define all the application level states and define actions to make the changes to the state

export const initialState = {
    basket: [],
};

//Selector

export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount, item) => item.price + amount, 0));
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        //Remove the Item With Using ID/Find the Index
        case "REMOVE_FROM_BASKET":
            //To create the Index
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index>=0) {//Splite Js Keyword For remove Given Index Value
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product(id: ${action.id}) as its not in the basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }

        default:
            return state;
    }
}

export default reducer;