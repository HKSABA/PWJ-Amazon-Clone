 export const initialState = {
    basket: [],
    user: null,
};

// Selector 
// 'reduce' will map through the basket and tally up the total
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

  const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
      
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      
      case "ADD_TO_BASKET":
        return { 
          ...state,
          basket: [...state.basket, action.item],
        };

      case "REMOVE_FROM_BASKET":  

        // we checked to see if product exists
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id
        );
        // we cloned the basket
        let newBasket = [...state.basket];

        if (index >= 0) {
          // if item exists in basket, remove it...
          newBasket.splice(index, 1);
        } else {
          console.warn(
            `Can't remove product (id: ${action.id}) as its not in basket`
          );
        }

        return { 
          ...state, 
          basket: newBasket,
        };

      default:
        return state;
    }

};

export default reducer;
